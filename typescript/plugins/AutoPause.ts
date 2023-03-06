import MediaPlayer from "../mediaPlayer";

class AutoPause{
    private threshold: number;
    options: object; 
    player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
        this.options = {
            threshold: this.threshold,
        };
    }

    run(player: MediaPlayer){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, this.options);
        observer.observe(player.media);

        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    }

    private handlerVisibilityChange(): void{
        const isVisible = document.visibilityState === 'visible';
        isVisible ? this.player.avanzar() : this.player.pausar();
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]): void{
        const entry = entries[0];

        if(entry.intersectionRatio < this.threshold){
            this.player.pausar();
        }
        else{
            this.player.avanzar();
        }
    }

}

export default AutoPause;