const staticCacheName = 'casha-v1'
const dynamicCacheName = 'dasha-v1'
const assetUrls =[
    'index.html',
    '/js/app.js',
    '/js/facha.js',
    '/css/styles.css',
    '/offline.html'
]
self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)
  })

self.addEventListener("activate", async event => {
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames
            .filter(name => name !== staticCacheName)
            .filter(name => name !== dynamicCacheName)
            .map(name => caches.delete(name))
    )
})
self.addEventListener('fetch', event => {
    const {request}= event
    const url = new URL(request.url)
     if (url.origin===location.origin) {
        event.respondWith(cacheFirst(event.request))
    } else {
        event.respondWith(networkFirst(event.request))
    }
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (e) {
        const cached = await cache.match(request)
        return cached ?? await cached.match('/offline.html')
    }
    
}
if ('serviceWorker' in navigator){
    function lol(){ 
      isit.innerHTML=' '
      isid.innerHTML=`
        [SW]: register success
        <br>
        Кэшировано:
        <br>
        ` 
        + assetUrls[0]+'<br>'+assetUrls[1]+'<br>'+assetUrls[2]+'<br>'+assetUrls[3]+'<br>'+assetUrls[4]
       
    }
    
}