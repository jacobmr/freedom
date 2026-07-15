// Uploads a single (already compressed) journal photo to Vercel Blob.
// The client POSTs raw image bytes as application/octet-stream and passes the real
// image mime type in the `x-photo-type` header. Returns { url }.
//
// Why octet-stream: the Vercel Node runtime reliably exposes an octet-stream body as
// a Buffer on req.body, whereas an image/* body can be consumed before the handler runs.
import { put } from '@vercel/blob';
import { makeId } from '../lib/db.js';

const ALLOWED = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
const MAX_BYTES = 6 * 1024 * 1024; // compressed photos are far smaller; generous ceiling

async function readRawBody(req) {
  if (Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === 'string') return Buffer.from(req.body, 'binary');
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'method not allowed' });
    }
    const photoType = (req.headers['x-photo-type'] || req.headers['content-type'] || '').split(';')[0].trim();
    const ext = ALLOWED[photoType];
    if (!ext) return res.status(415).json({ error: 'unsupported media type' });

    const buf = await readRawBody(req);
    if (!buf.length) return res.status(400).json({ error: 'empty body' });
    if (buf.length > MAX_BYTES) return res.status(413).json({ error: 'file too large' });

    const blob = await put(`freedom/${makeId(12)}.${ext}`, buf, {
      access: 'public',
      contentType: photoType,
      addRandomSuffix: false,
    });
    return res.status(201).json({ url: blob.url });
  } catch (e) {
    console.error('upload error', e);
    return res.status(500).json({ error: 'upload failed' });
  }
}
