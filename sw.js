/* Menyimpan halaman pembungkus dan ikon agar aplikasi terpasang cepat terbuka.
   Data keuangan tidak pernah disimpan di sini: isinya dibuka langsung dari Google. */
var CACHE = 'bedah-dompet-pembungkus-v3';
var FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './favicon-32.png', './favicon.ico'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.filter(function (n) { return n !== CACHE; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});
/* Jaringan dulu (agar pembaruan langsung terpakai), cadangan dari cache bila offline */
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  /* Profil ikon iPhone selalu diambil langsung, agar alamat di dalamnya tidak pernah versi lama */
  if (/\.mobileconfig$/.test(u.pathname)) return;
  e.respondWith(fetch(e.request).then(function (r) {
    var salin = r.clone();
    caches.open(CACHE).then(function (c) { c.put(e.request, salin); });
    return r;
  }).catch(function () {
    return caches.match(e.request).then(function (r) { return r || caches.match('./index.html'); });
  }));
});
