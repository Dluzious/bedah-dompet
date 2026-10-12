/* Bedah Dompet: service worker kecil untuk "kulit" aplikasi.
 * Hanya menyimpan halaman pembungkus dan ikon agar ikon di layar utama cepat terbuka.
 * Data keuangan tidak pernah lewat sini: isi aplikasi tetap dimuat langsung dari Google Apps Script. */
var CACHE = 'bedah-dompet-kulit-v1';
var FILE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './icon-maskable-192.png', './icon-maskable-512.png', './apple-touch-icon.png', './favicon-32.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Utamakan versi terbaru dari internet; pakai salinan bila sedang offline.
    e.respondWith(fetch(req).then(function (res) {
      if (res.ok) {
        var salin = res.clone();
        caches.open(CACHE).then(function (c) { c.put('./index.html', salin); });
      }
      return res;
    }).catch(function () { return caches.match('./index.html'); }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (r) { return r || fetch(req); }));
});
