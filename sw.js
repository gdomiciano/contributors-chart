importScripts('/contributors-chart/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/contributors-chart/_nuxt/0a38273c7d24cf172ece.js",
    "revision": "0936884abafd7c8761071a06fde434bc"
  },
  {
    "url": "/contributors-chart/_nuxt/1868e94d79bed4b915a4.css",
    "revision": "301741d8e288916b33735d77b7da7c56"
  },
  {
    "url": "/contributors-chart/_nuxt/232f48e09db77869655b.js",
    "revision": "38cda575bbe970d211adbcdd427926e9"
  },
  {
    "url": "/contributors-chart/_nuxt/2879e2fe0d973a7ec5ff.js",
    "revision": "486a697e6f6abbde5ce63381be58fb51"
  },
  {
    "url": "/contributors-chart/_nuxt/382d1797fa2d68317271.js",
    "revision": "e068fb7054785e20585640751bd8685b"
  },
  {
    "url": "/contributors-chart/_nuxt/9d0c6bfabbff962a8daf.css",
    "revision": "93a34c755f2b9865d45e74999d2b216b"
  },
  {
    "url": "/contributors-chart/_nuxt/ba21cfcf4534877f7580.js",
    "revision": "a9b0f0e0d8def8eded7fe5c0808335d6"
  }
], {
  "cacheId": "contributors-chart",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/contributors-chart/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/contributors-chart/.*'), workbox.strategies.networkFirst({}), 'GET')
