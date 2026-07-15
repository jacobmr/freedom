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
    _schemaReady = db().execute(`
      CREATE TABLE IF NOT EXISTS shares (
        id TEXT PRIMARY KEY,
        edit_token_hash TEXT NOT NULL,
        payload TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )
    `).then(() => true);
  }
  return _schemaReady;
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
