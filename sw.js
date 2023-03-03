// el self es como los this, pero para service workers

const version = 'v1';

self.addEventListener('install', event =>{
    // el waitUntil es una función que garantiza que el service worker no se instalará hasta que el código enviado en el argumento (preCache) haya ocurrido con exito.
    event.waitUntil(preCache());
});

self.addEventListener('fetch', event =>{
    console.log(event);
    const request = event.request;
    // get
    if(request.method !== 'GET'){
        return;
    } 
    // buscar en cache
    // con respondWith puedes secuestrar respuestas http y actualizarlas con su propio contenido
    event.respondWith(cachedResponse(request));

    // actualizando el cache
    event.waitUntil(updateCache(request));
});

async function cachedResponse(request){
    const cache = await caches.open(version);
    const res = await cache.match(request);

    return res || fetch(request);
}

async function updateCache(request){
    const cache = await caches.open(version);
    const res = await fetch(request);

    if(res.status === 200){
        return cache.put(request, res);
    }
}
    

async function preCache(){
    // con la funcion, "caches.open()", creamos un nuevo cache 
    const cache = await caches.open(version);
    // luego usamos la funcion "addAll()" en el cache creado para mandar en su parametro una matriz de URL de todos los recursos que deseas almacenar en caché
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