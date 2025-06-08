self.addEventListener('install', (event) => {
  console.log('[SW] Installed');
  // Precache static assets
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/src/pages/Dashboard.jsx',
        '/src/pages/Settings.jsx',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
