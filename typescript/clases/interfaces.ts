// interfaces
enum Color{
    rojo = 'rojo',
    verde = 'green',
}

interface Rectangulo{
    ancho: number,
    alto: number,
    color?: Color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 5,
    //color: Color.rojo
};

function area(r: Rectangulo): number{
    return r.alto * r.ancho;
}
const areaRectangulo = area(rect);
console.log(areaRectangulo);

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo sin color`;
}

console.log(rect.toString());