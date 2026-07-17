// Shared Turso (libSQL) client + helpers for the share/backup API.
import { createClient } from '@libsql/client';
import crypto from 'node:crypto';

let _client;
export function db() {
  if (!_client) {
    _client = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }
  return _client;
}

// Idempotent schema creation, run once per warm instance.
let _schemaReady;
export function ensureSchema() {
  if (!_schemaReady) {
    _schemaReady = db().executeMultiple(`
      CREATE TABLE IF NOT EXISTS shares (
        id TEXT PRIMARY KEY,
        edit_token_hash TEXT NOT NULL,
        payload TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS rate_limits (
        k TEXT NOT NULL,
        ts INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_rate_limits_k_ts ON rate_limits (k, ts);
    `).then(() => true);
  }
  return _schemaReady;
}

// Best-effort per-key sliding-window rate limit backed by Turso. Returns false
// when the key has hit `max` hits inside the window. Call ensureSchema() first.
// ponytail: prunes expired rows on each call — fine at this app's volume; move to
// a scheduled cleanup if request rate ever gets high.
export async function checkRateLimit(key, max, windowMs = 3_600_000) {
  const now = Date.now();
  const since = now - windowMs;
  const c = db();
  await c.execute({ sql: 'DELETE FROM rate_limits WHERE ts < ?', args: [since] });
  const r = await c.execute({
    sql: 'SELECT COUNT(*) AS n FROM rate_limits WHERE k = ? AND ts >= ?',
    args: [key, since],
  });
  if (Number(r.rows[0].n) >= max) return false;
  await c.execute({ sql: 'INSERT INTO rate_limits (k, ts) VALUES (?, ?)', args: [key, now] });
  return true;
}

// Client IP from Vercel's forwarding headers, for rate-limit keys.
export function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) return String(fwd).split(',')[0].trim();
  return req.headers['x-real-ip'] || 'unknown';
}

// Unambiguous alphabet (no 0/1/o/l) for human-friendly share ids.
const ID_ALPHABET = '23456789abcdefghijkmnpqrstuvwxyz';
export function makeId(len = 10) {
  const bytes = crypto.randomBytes(len);
  let out = '';
  for (let i = 0; i < len; i++) out += ID_ALPHABET[bytes[i] % ID_ALPHABET.length];
  return out;
}

export function makeToken() {
  return crypto.randomBytes(24).toString('base64url');
}

export function hashToken(token) {
  return crypto.createHash('sha256').update(String(token)).digest('hex');
}

// Constant-time comparison of a presented token against a stored hash.
export function verifyToken(token, expectedHash) {
  if (!token || !expectedHash) return false;
  const a = Buffer.from(hashToken(token));
  const b = Buffer.from(String(expectedHash));
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
