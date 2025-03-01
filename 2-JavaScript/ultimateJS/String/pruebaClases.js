//funcion constructora de clase
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
//NEW
const persona1 = new Persona('Pepe', 'Arnau', 37);
const persona3 = new Persona('Pepa', 'Arnau', 47)


const persona2 = {
    nombre: 'Paco',
    apellido: 'Gil',
    edad: 32,
}

console.log('Persona 1 ' + persona1);
console.log('Persona 2 ' + persona2);
const miArrayPersonas = [persona1, persona2, persona3]


// for (const key in miArrayPersonas) {
//     if (Object.prototype.hasOwnProperty.call(miArrayPersonas, key)) {
//         const element = miArrayPersonas[key];

//     }
// }


// for (const key of miArrayPersonas) {
//     console.log(element);
// }

// console.log("El segundo For in \n");

// for(const key in miArrayPersonas){
//     console.log(miArrayPersonas[key]);

// }


class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

get area() {
    return this.calcArea();
}
    calcArea() {
        return this.alto * this.ancho;
    }
}

// get area(){
//     return calcArea();
// }
const cuadrado = new Rectangulo(20, 20)

console.log("El area del cuadrado es "+cuadrado.area);
console.log("El area del cuadrado es calculando "+cuadrado.calcArea());



//console.log(cuadrado);


//  calcArea() {
//     return this.alto*this.ancho;
// }