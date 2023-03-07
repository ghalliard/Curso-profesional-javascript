interface Observer{
    update: (data: any) => void,
};

interface Subject{
    subscribe: (observer: Observer) => void,
    unsubscribe: (observer: Observer) => void,
};

class BitcoinPrice implements Subject{
    observers: Array<Observer> = [];
    private el: HTMLInputElement;
    constructor(){
        //const el:HTMLInputElement = document.getElementById('value') as HTMLInputElement;
        this.el = document.getElementById('value') as HTMLInputElement;
        this.el.addEventListener('input', () =>{
            this.notify(this.el.value);
        });
    }

    public subscribe(observer: Observer): void{
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void{
        const index = this.observers.findIndex(obs => {
            return obs === observer
        });
        
        this.observers.splice(index, 1);
    }

    public notify(data: any): void{
        this.observers.forEach(obs => obs.update(data));
    }
}

class PriceDisplay implements Observer{
    private el: HTMLParagraphElement;
    constructor(){
        this.el = document.getElementById('price') as HTMLParagraphElement;
    }
    update(data: any){
        this.el.innerText = `$${data}`;
    }
}

const value = new BitcoinPrice();
console.log(value);
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(
    () => value.unsubscribe(display),
    5000
);
