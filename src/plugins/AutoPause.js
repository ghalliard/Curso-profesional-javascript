class AutoPause{
    constructor(){
        this.handlerIntersection = handlerIntersection_fnc.bind(this);
        this.threshold = 0.25;
        this.options = {
            threshold: this.threshold,
        };
    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, this.options);
        observer.observe(this.player.media);
    }
}

function handlerIntersection_fnc(entries){
    // en este caso cuando usamos this dentro de esta funcion, va a señalar a Intersection observer. Por ese motivo en el constructor se estaría usando la funcion bind.
    console.log(this);
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