// REST endpoint for cloud shares / backups.
//   POST   /api/share            -> create   { payload }            => { id, editToken }
//   GET    /api/share?id=ID      -> read (public)                   => { id, payload, updatedAt }
//   PUT    /api/share?id=ID      -> update (x-edit-token header)    => { id, ok }
//   DELETE /api/share?id=ID      -> delete (x-edit-token header)    => { id, deleted }
import { db, ensureSchema, makeId, makeToken, hashToken, verifyToken } from '../lib/db.js';
import { del } from '@vercel/blob';

const MAX_PAYLOAD_BYTES = 1_000_000; // journal text + photo URLs only (images live in Blob)

function getId(req) {
  if (req.query && req.query.id) return String(req.query.id);
  try { return new URL(req.url, 'http://localhost').searchParams.get('id'); } catch { return null; }
}

function getBody(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return null; } }
  if (Buffer.isBuffer(req.body)) { try { return JSON.parse(req.body.toString('utf8')); } catch { return null; } }
  return null;
}

function validPayloadStr(body) {
  if (!body || typeof body.payload !== 'object' || body.payload === null) return null;
  const str = JSON.stringify(body.payload);
  if (Buffer.byteLength(str) > MAX_PAYLOAD_BYTES) return { tooLarge: true };
  return { str };
}

// Pull Vercel-Blob photo URLs out of a payload so we can clean them up on delete.
function collectBlobUrls(payload) {
  const urls = [];
  const entries = payload && payload.entries;
  if (entries && typeof entries === 'object') {
    for (const key of Object.keys(entries)) {
      const photos = entries[key] && entries[key].photos;
      if (Array.isArray(photos)) {
        photos.forEach((u) => { if (typeof u === 'string' && u.includes('.blob.vercel-storage.com')) urls.push(u); });
      }
    }
  }
  return urls;
}

export default async function handler(req, res) {
  try {
    await ensureSchema();
    const id = getId(req);

    if (req.method === 'GET') {
      if (!id) return res.status(400).json({ error: 'missing id' });
      const r = await db().execute({ sql: 'SELECT id, payload, updated_at FROM shares WHERE id = ?', args: [id] });
      if (!r.rows.length) return res.status(404).json({ error: 'not found' });
      const row = r.rows[0];
      res.setHeader('Cache-Control', 'public, max-age=30');
      return res.status(200).json({ id: row.id, payload: JSON.parse(row.payload), updatedAt: Number(row.updated_at) });
    }

    if (req.method === 'POST') {
      const v = validPayloadStr(getBody(req));
      if (!v) return res.status(400).json({ error: 'invalid payload' });
      if (v.tooLarge) return res.status(413).json({ error: 'payload too large' });
      const newId = makeId();
      const token = makeToken();
      const now = Date.now();
      await db().execute({
        sql: 'INSERT INTO shares (id, edit_token_hash, payload, created_at, updated_at) VALUES (?,?,?,?,?)',
        args: [newId, hashToken(token), v.str, now, now],
      });
      return res.status(201).json({ id: newId, editToken: token });
    }

    if (req.method === 'PUT') {
      if (!id) return res.status(400).json({ error: 'missing id' });
      const v = validPayloadStr(getBody(req));
      if (!v) return res.status(400).json({ error: 'invalid payload' });
      if (v.tooLarge) return res.status(413).json({ error: 'payload too large' });
      const r = await db().execute({ sql: 'SELECT edit_token_hash FROM shares WHERE id = ?', args: [id] });
      if (!r.rows.length) return res.status(404).json({ error: 'not found' });
      if (!verifyToken(req.headers['x-edit-token'], r.rows[0].edit_token_hash)) return res.status(403).json({ error: 'forbidden' });
      await db().execute({ sql: 'UPDATE shares SET payload = ?, updated_at = ? WHERE id = ?', args: [v.str, Date.now(), id] });
      return res.status(200).json({ id, ok: true });
    }

    if (req.method === 'DELETE') {
      if (!id) return res.status(400).json({ error: 'missing id' });
      const r = await db().execute({ sql: 'SELECT edit_token_hash, payload FROM shares WHERE id = ?', args: [id] });
      if (!r.rows.length) return res.status(404).json({ error: 'not found' });
      if (!verifyToken(req.headers['x-edit-token'], r.rows[0].edit_token_hash)) return res.status(403).json({ error: 'forbidden' });
      try {
        const urls = collectBlobUrls(JSON.parse(r.rows[0].payload));
        if (urls.length) await del(urls);
      } catch (e) { /* best-effort blob cleanup */ }
      await db().execute({ sql: 'DELETE FROM shares WHERE id = ?', args: [id] });
      return res.status(200).json({ id, deleted: true });
    }

    res.setHeader('Allow', 'GET, POST, PUT, DELETE');
    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    console.error('share handler error', e);
    return res.status(500).json({ error: 'server error' });
  }
}
