class MediaPlayer {
    constructor(obj) {
        this.media = obj.prop_video;
        this.plugins = obj.plugins || [];

        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            // este this hace referencia a MediaPlayer, no a player.
            play: () => this.avanzar(),
            pause: () => this.pausar(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        };

        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
    }
    avanzar() {
        this.media.play();
    }
    pausar() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
}

export default MediaPlayer;