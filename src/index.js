import MediaPlayer from './video-mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('.video');
const mute_btn = document.querySelector('.mute-btn');
const play_btn = document.querySelector('.play-btn');

const player = new MediaPlayer({
    prop_video: video,
    plugins: [
        new AutoPlay
    ],
});
console.log(player);

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