const rocketIO = "rocketio-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/script.js",
  "/img/favicon.ico",
  "/img/rocketdab.png",
  "/img/rocketman.png",
  "/img/rocketlaunch.png",
  "/img/rocketride.png",
];

// Cached core static resources
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(rocketIO).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fatch resources
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
