// el self es como los this, pero para service workers

const version = 'v1';

self.addEventListener('install', event =>{
    event.waitUntil(preCache());
});

self.addEventListener('fetch', event =>{
    const request = event.request;
    // get
    if(request.method !== 'GET'){
        return;
    } 
    // buscar en cache
    event.respondWith(cachedResponse(request));

    // actualizando el cache
    event.waitUntil(updateCache(request));
});

async function cachedResponse(request){
    const cache = await caches.open(version);
    const res = await cache.match(request);
    console.log(res);

    return res || fetch(request);

}

async function updateCache(request){
    const cache = await caches.open(version);
    const res = await fetch(request);
    return await cache.put(request, res);
}

async function preCache(){
    const cache = await caches.open(version);
    return cache.addAll([
        './',
        './html/video.html',
        './src/index.js',
        './src/video-mediaPlayer.js',
        './src/plugins/AutoPlay.js',
        './src/plugins/AutoPause.js',
        './assets/video/videoPrueba.mp4'
    ]);
}