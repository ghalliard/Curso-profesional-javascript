import MediaPlayer from './video-mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('.video');
const mute_btn = document.querySelector('.mute-btn');
const play_btn = document.querySelector('.play-btn');

const player = new MediaPlayer({
    prop_video: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ],
});
console.log(player);

/*
//Esta es una forma de registrar tu service worker

// con este if podemos validar si es que el service worker esta disponible en el navegador. 
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js')
        .then(registration => console.log('el registro del SW esta hecho', registration))
        .catch(err => console.log(err.message));
}
*/

// ahora con async y await
const registerServiceWorker = async () =>{
    if('serviceWorker' in navigator){
        try{
            const registration = await navigator.serviceWorker.register('../sw.js', {
                scope: './',
            });
            console.log(registration);
            if(registration.installing){
                console.log('Service Worker installing');
            } else if(registration.waiting){
                console.log('Service Worker installed');
            } else if(registration.active){
                console.log("Service worker active");
            }
        } catch(err){
            console.error('el registro fallo con error ' + err);
        }
    } 
}

mute_btn.onclick = () =>{
    if(player.media.muted){
        player.unmute();
    } else{
        player.mute();
    }
}

play_btn.onclick = () =>{
    if(player.media.paused){
        player.avanzar();
    } else{
        player.pausar();
    }
}

registerServiceWorker();