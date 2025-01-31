// public/service-worker.js

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/manifest.json',
        // '/assets/css/style.css',
        '/ekattorpratidin-logo.svg',
        '/img-1.jpg',
        '/placeholder.svg',
        'https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.1.01/mastors.css',
        'https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.1/mastorsIcons/mastorsIcons.css'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  const cacheWhitelist = ['v1'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
