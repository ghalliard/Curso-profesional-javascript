function AutoPlay(){}
AutoPlay.prototype.run = function(player){
    // este parametro player hace referencia al que se creo en _initplugins
    if(!player.muted){
        player.muted = true;
    }
    player.play();
}

export default AutoPlay;