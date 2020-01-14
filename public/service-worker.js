const cacheName = 'v1'
let filesToCache = [
  './',
  './index.html',
  './bundle.js',
  './bundle.css',
  './activity.png'
]

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache)
    })
  )
})

// Will cache uncached files, don't need that
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      return r || fetch(e.request).then((response) => {
        return response
        //return caches.open(cacheName).then((cache) => {
        //  cache.put(e.request, response.clone())
        //  return response
        //})
      })
    })
  )
})
