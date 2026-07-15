# Sharing Your Adventure — Architecture (Design / Not Yet Built)

## Why this doesn't exist yet

The app is currently **100% client-side**. All of a user's data lives on one device in one browser:

- Visited stops + theme → `localStorage`
- Journal entries + photos → `IndexedDB` (`FreedomTrailDB`)

There is no account and no server, so there is nothing to link to. To let a user
send a friend or family member a URL that shows their trail progress, journal, and
photos, we need to add backend infrastructure. This document scopes that work; **no
code is being written for it in this iteration.**

A useful side benefit: the same backend becomes a **durable backup** — today a
user's journal is lost if they clear their browser or switch phones.

## Goal

A **"Share my adventure"** button that produces a public URL (e.g.
`https://<app>/a/<id>`) any browser can open to view a read-only snapshot of the
user's visited stops, journal text, and photos.

## Proposed architecture

Everything below fits Vercel (the app's existing deploy target).

### 1. API — Vercel Serverless Functions

- `POST /api/share` — accepts the serialized adventure payload + photo uploads,
  creates a record, returns `{ id, editToken }`. `id` is short and unguessable
  (e.g. 10–12 chars of base62 from crypto random). `editToken` is a longer secret
  kept only on the creating device (in `localStorage`) so the user can update or
  delete their share later.
- `GET /api/share/:id` — returns the public payload (no token, read-only).
- `DELETE /api/share/:id` — requires the `editToken`; removes the record and its
  photos.

### 2. Metadata store

A lightweight row per share: `{ id, createdAt, editTokenHash, payload, expiresAt }`
where `payload` = visited stop IDs + journal text + photo URLs.

Good fits given existing inventory:

- **Turso (libSQL)** — already in JMR's master catalog; SQLite-compatible, cheap.
- **Vercel Postgres** or **Vercel KV** — zero-config on the deploy platform.

Store the **hash** of the edit token, never the token itself.

### 3. Photos — object storage

Journal photos are JPEG blobs in IndexedDB; a URL can't carry them. On share:

1. Upload each photo to **Vercel Blob** (or Cloudflare R2).
2. Store the returned blob URLs in the share `payload`.

Photos are already compressed client-side (max 1280px, q0.82), keeping uploads small.

### 4. Client changes

- **Share button** (likely in the Journal tab header, next to Export): serialize
  state → upload photos → `POST /api/share` → show a copyable link and trigger the
  native share sheet via `navigator.share()` (with clipboard fallback).
- **Public view route** — a read-only page (`/a/:id`) that fetches the payload and
  renders the adventure. Can reuse the journal-card markup; no editing controls, no
  GPS, no IndexedDB.
- Persist `{ id, editToken }` locally so the user can **re-share (update)** or
  **delete** an existing share.

### 5. Privacy & safety

- Unguessable IDs; no PII collected.
- Optional **expiry** (`expiresAt`, e.g. 90 days) with a cron cleanup.
- **"Delete this share"** action using the edit token.
- Server-side escaping/sanitization of journal text on the public view (the client
  already escapes via `escapeHtml`, but the public renderer must not trust input).
- Consider a soft size cap on photos per share.

## Rough estimate

- API routes + store schema: ~0.5 day
- Blob upload + wiring: ~0.5 day
- Public read-only view route: ~0.5–1 day
- Share/update/delete client UX + native share sheet: ~0.5 day
- Testing, expiry cron, polish: ~0.5 day

**~2.5–3 days** for a first version.

## Interim option (no backend, could ship anytime)

If an immediate "share something" capability is wanted before the backend exists:
generate a **single self-contained HTML file** (entries + base64-embedded photos)
that the user downloads and sends. Works offline, keeps photos, but is a file rather
than a link. Noted as a stopgap only — the chosen direction is the real shareable link.
