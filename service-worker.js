const CACHE_NAME = 'icfes-pro-cache-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/styles.css',
  './assets/js/app.js',
  './assets/js/coach.js',
  './assets/js/exam.js',
  './assets/js/analytics.js',
  './assets/js/tutor.js',
  './assets/data/additional_questions.js',
  './assets/data/expanded_questions.js',
  './assets/data/auxiliary_questions.js',
  './assets/data/historical_questions.js',
  './assets/data/questions.js',
  './assets/data/study_guides.js',
  './assets/data/curriculum.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const isAppShell = /\\.(html|js|css|json)$/.test(requestUrl.pathname) || requestUrl.pathname.endsWith('/');

  event.respondWith(
    (isAppShell ? fetch(event.request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
      }
      return networkResponse;
    }).catch(() => caches.match(event.request)) : caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request);
    })).catch(() => caches.match('./index.html'))
  );
});
