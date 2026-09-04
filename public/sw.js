const CACHE_NAME = 'malpani-pwa-cache-v2';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Filter for http and https schemes (exclude chrome-extension, etc.)
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // Exclude localhost, internal Next.js dev chunks, and API requests
  if (url.hostname === 'localhost' || url.hostname === '127.0.0.1' || url.pathname.startsWith('/_next/') || url.pathname.includes('/api/')) return;

  // Stale-While-Revalidate strategy for static resources, HTML, fonts, and images
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.status === 0)) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch((err) => {
          console.error('[SW] Fetch failed:', err);
          // Return cached response if available even if network failed
          if (cachedResponse) return cachedResponse;
          throw err;
        });

        // Return cached response instantly if available, fallback to network fetch
        return cachedResponse || fetchPromise;
      });
    })
  );
});
