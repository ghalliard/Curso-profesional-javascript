console.log('hello typescript');

function add(a: number, b: number){
    return a + b;
}

const sum = add(1, 13);
console.log(sum);

let muted: boolean = true;
muted = false;

// numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// string
let nombre: string = 'richi';
let saludo = `Me llamo ${nombre}`;

// arreglos
let people: string[] = [];
people = ['isabel', 'nicole', 'raul'];
people.push('GABRIEL');
people.forEach(element => console.log(element));

// varios tipos de datos en un array
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(22);
peopleAndNumbers.forEach(element => console.log(element));

// enum
enum Color{
    rojo = 'red',
    verde = 'green',
    azul = 'blue',
}

let favoriteColor: Color = Color.azul;
console.log(favoriteColor);

// keyword any: cuando no sabemos que tipo de dato sera usamos any. 
let comodin: any = 'joker';
comodin = {
    type: 'wildCard'
};
console.log(comodin);

// object
let someObject: object = {
    type: 'wildcard',
}

// con funciones

function myfnc(a: number, b: number): number{
    return a + b;
}

const suma = myfnc(5, 8);
console.log(suma);

// una funcion que regresa otra funcion
function createAdder(a: number): (number) => number{
    return function(b: number){
        return a + b;
    }
}
const num2 = createAdder(1);
const num3 = num2(2);
console.log(num3);

// parametros opcionales 
// podemos agregar "lastaName?: string" 
function fullName(firstName: string, lastName: string = ''){
    return `${firstName} ${lastName}`;
}
const person = fullName('Gabriel', 'Montoya');
const person1 = fullName('richi');
console.log(person1);
console.log(person);

