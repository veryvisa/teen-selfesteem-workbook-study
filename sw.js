// The study site moved to https://veryvisa.github.io/body-mind-library/books/teen-selfesteem-workbook/. This worker removes the old offline cache and unregisters itself.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('sew-')).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({type: 'window'}))
    .then(cs => cs.forEach(c => c.navigate(c.url)))));
