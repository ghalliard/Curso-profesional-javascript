class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string{
        return"Hello, " + this.greeting;
    }
}

const greeter: Greeter = new Greeter("world");

console.log(greeter.greet());
console.log(greeter.greeting);

class Animal{
	move(distanceInMeter: number = 0): void{
		console.log(`el animal se ha desplazado ${distanceInMeter}m`);
	}
}

class Dog extends Animal{
	bark(): void{
		console.log('woof woof');
	}
}

const chans: Dog = new Dog();

chans.bark();
chans.move(500);

class Animal1{
	public name: string;
	public constructor(theName: string){
		this.name = theName;
	}
	public move(distanceInMeters: number){
		console.log(`el ${this.name} se desplazo ${distanceInMeters}m.`);
	}
}

class Animal2 {
    private name: string;
    constructor(theName: string){ 
        this.name = theName; 
    }
}

// console.log(new Animal2("Cat").name); marca un error 

// protected propiedades 
class Person {
    protected name: string;
    constructor(name: string){ 
        this.name = name; 
    }
}
  
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

const howard: Employee = new Employee('howard', 'TI'); 
console.log(howard.getElevatorPitch());

// propiedades con protected. 
class Person1{
    protected name: string;
    protected constructor(theName: string){ 
        this.name = theName; 
    }
}
  
class Employee1 extends Person{
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return`Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
const howard1: Employee1 = new Employee1('howard 2', 'TI');
console.log(howard1.getElevatorPitch());
// const john = new Person1('John'); esto es error porque no se puede instanciar ya que el constructor es protected.
