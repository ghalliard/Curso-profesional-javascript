class AutoPause{
    constructor(){
        this.handlerIntersection = handlerIntersection_fnc.bind(this);
        this.handlerVisibilityChange = handlerVisibilityChange_fnc.bind(this);
        this.threshold = 0.25;
        this.options = {
            threshold: this.threshold,
        };
    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, this.options);
        observer.observe(this.player.media);

        // añadimos el visibility change
        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    }
}
function handlerVisibilityChange_fnc(){
    const isVisible = document.visibilityState === 'visible';
    isVisible ? this.player.play() : this.player.pause();
}
function handlerIntersection_fnc(entries){
    // en este caso cuando usamos this dentro de esta funcion, va a señalar a Intersection observer. Por ese motivo en el constructor se estaría usando la funcion bind.
    const entry = entries[0];
    if(entry.intersectionRatio < this.threshold){
        this.player.pause();
    }
    else{
        this.player.play();
    }
    console.log(entry);
}

export default AutoPause;