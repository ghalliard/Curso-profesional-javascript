import MediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/autoPlay';
import AutoPause from './plugins/AutoPause';

const video: HTMLMediaElement = document.querySelector('.video') as HTMLMediaElement;
const mute_btn: HTMLElement = document.querySelector('.mute-btn') as HTMLElement;
const play_btn: HTMLElement = document.querySelector('.play-btn') as HTMLElement;

const player: MediaPlayer = new MediaPlayer({
    prop_video: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ],
});
console.log(player);

mute_btn.onclick = (): void =>{
    if(player.media.muted){
        player.unmute();
    } else{
        player.mute();
    }
}

play_btn.onclick = (): void =>{
    if(player.media.paused){
        player.avanzar();
    } else{
        player.pausar();
    }
}