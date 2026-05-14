
const CACHE_NAME = "cen-bible-chronology-v44-exact-timeline-style";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/chronology-data.js",
  "./js/app.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/infographics/01_creation.png",
  "./assets/infographics/02_adam_eve.png",
  "./assets/infographics/03_eden_exile.png",
  "./assets/infographics/04_cain_abel.png",
  "./assets/infographics/05_noah_ark.png",
  "./assets/infographics/06_babel_tower.png",
  "./assets/maps/01_creation_map.png",
  "./assets/maps/02_adam_eve_map.png",
  "./assets/maps/03_eden_exile_map.png",
  "./assets/maps/04_cain_abel_map.png",
  "./assets/maps/05_noah_ark_map.png",
  "./assets/maps/06_babel_tower_map.png",
  "./assets/infographics/07_abraham_call.png",
  "./assets/maps/07_abraham_call_map.png",
  "./assets/infographics/08_lot_sodom.png",
  "./assets/maps/08_lot_sodom_map.png",
  "./assets/infographics/09_jacob_ladder.png",
  "./assets/maps/09_jacob_ladder_map.png",
  "./assets/infographics/10_jabbok_wrestling.png",
  "./assets/maps/10_jabbok_wrestling_map.png",
  "./assets/infographics/11_joseph_dream.png",
  "./assets/maps/11_joseph_dream_map.png",
  "./assets/infographics/12_joseph_governor.png",
  "./assets/maps/12_joseph_governor_map.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
