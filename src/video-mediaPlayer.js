function MediaPlayer(obj){
    this.media = obj.prop_video;
    this.plugins = obj.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this);
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