// Bump this version whenever the app shell changes so old caches are purged on activate.
const CACHE_NAME = 'freedom-trail-cache-v3';

// Local app-shell assets precached on install.
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './logo.png'
];

// Cross-origin hosts whose responses are safe to cache at runtime (fonts + icon glyphs).
const CACHEABLE_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com'
];

// Install - precache the app shell.
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate - drop any caches from previous versions.
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

function isCacheable(url) {
  return url.origin === self.location.origin || CACHEABLE_HOSTS.includes(url.hostname);
}

// App code (HTML/JS/CSS + navigations) should reflect the latest deploy:
// treat it network-first so a new version is picked up on the next load.
function isAppCode(request, url) {
  if (request.mode === 'navigate') return true;
  if (url.origin !== self.location.origin) return false;
  return /\.(html|js|css)$/.test(url.pathname) || url.pathname === '/' || url.pathname.endsWith('/');
}

async function putInCache(request, response) {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response);
  } catch (_) { /* opaque/uncacheable responses are fine to skip */ }
}

// Network-first: fresh when online, cached fallback when offline.
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) putInCache(request, response.clone());
    return response;
  } catch (_) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (request.mode === 'navigate') {
      const shell = await caches.match('./index.html');
      if (shell) return shell;
    }
    return Response.error();
  }
}

// Cache-first: instant for static assets (icons, fonts, images).
async function cacheFirst(request, url) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && (response.status === 200 || response.type === 'opaque') && isCacheable(url)) {
      putInCache(request, response.clone());
    }
    return response;
  } catch (_) {
    const fallback = await caches.match(request);
    return fallback || Response.error();
  }
}

self.addEventListener('fetch', (e) => {
  const request = e.request;

  // Only handle GET over http(s); ignore chrome-extension://, POST, etc.
  if (request.method !== 'GET') return;
  let url;
  try {
    url = new URL(request.url);
  } catch (_) {
    return;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // Never cache the backend API — responses are dynamic and per-user.
  if (url.origin === self.location.origin && url.pathname.startsWith('/api/')) return;

  if (isAppCode(request, url)) {
    e.respondWith(networkFirst(request));
  } else if (isCacheable(url)) {
    e.respondWith(cacheFirst(request, url));
  }
  // Anything else (e.g. third-party APIs) falls through to the network untouched.
});
