// One-off: create the shares table. Reads creds from .env.local (gitignored).
import { createClient } from '@libsql/client';
import { readFileSync } from 'node:fs';

try {
  for (const line of readFileSync(new URL('../.env.local', import.meta.url), 'utf8').split('\n')) {
    const m = line.match(/^([A-Z_]+)="?(.*?)"?$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch { /* rely on ambient env */ }

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

await client.execute(`
  CREATE TABLE IF NOT EXISTS shares (
    id TEXT PRIMARY KEY,
    edit_token_hash TEXT NOT NULL,
    payload TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )
`);

const info = await client.execute("SELECT name FROM sqlite_master WHERE type='table'");
console.log('Tables:', info.rows.map((r) => r.name).join(', '));
console.log('Schema ready.');
