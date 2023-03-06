function MediaPlayer(obj){
    this.media = obj.prop_video;
    this.plugins = obj.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    const player = {
        // este this hace referencia a MediaPlayer, no a player.
        play: () => this.avanzar(),
        pause: () => this.pausar(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },
        set muted(value){
            this.media.muted = value;
        },
    };

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

MediaPlayer.prototype.avanzar = function(){
    this.media.play();
}

MediaPlayer.prototype.pausar = function(){
    this.media.pause();
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

export default MediaPlayer;