import MediaPlayer from "../mediaPlayer";

class AutoPlay {
    run(player: MediaPlayer) {
        // este parametro player hace referencia al que se creo en _initplugins
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.avanzar();
    }
}

export default AutoPlay;