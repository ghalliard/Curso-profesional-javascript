class MediaPlayer {
    media: HTMLMediaElement;
    plugins: any[];

    constructor(obj: { 
            prop_video: HTMLMediaElement,
            plugins: any[],
        }){
        this.media = obj.prop_video;
        this.plugins = obj.plugins || [];

        this.initPlugins();
    }
    private initPlugins(): void {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    avanzar(): void{
        this.media.play();
    }
    pausar(): void{
        this.media.pause();
    }
    mute(): void{
        this.media.muted = true;
    }
    unmute(): void{
        this.media.muted = false;
    }
}

export default MediaPlayer;