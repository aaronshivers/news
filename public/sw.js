const CACHE_STATIC_NAME = `static-v1`
const CACHE_DYNAMIC_NAME = `dynamic-v1`
const STATIC_FILES = [
  `/`,
  `/js/script.js`,
  `/js/bootstrap.min.js`,
  `/js/jquery.min.js`,
  `/js/popper.min.js`,
  `/css/bootstrap.min.css`
]

self.addEventListener('install', async event => {
  try {
    console.log(`[Service Worker] Installing Service Worker...`, event)
    const cache = await caches.open(CACHE_STATIC_NAME)
    if (cache) {
      console.log(`[Service Worker] Pre-Caching App Shell`)
      cache.addAll(STATIC_FILES)
    }
  } catch (error) {
    console.log(error.message)
  }
})

self.addEventListener('activate', async event => {
  try {
    console.log(`[Service Worker] Activating Service Worker...`, event)
  
    const keyList = await caches.keys()
    keyList.map(key => {
      if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
        console.log(`[Service Worker] Removing Old Cache.`)
        return caches.delete(key)
      }
    })
    return self.clients.claim()    
  } catch (error) {
    console.log(error.message)
  }
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request).then(response => {
        return caches.open(CACHE_DYNAMIC_NAME).then(cache => {
          cache.put(event.request.url, response.clone())
          return response
        })
      })
    }).catch(() => {
      return caches.open(CACHE_STATIC_NAME).then(cache => {
        return caches.match(event.request)
      })
    })
  )
})
