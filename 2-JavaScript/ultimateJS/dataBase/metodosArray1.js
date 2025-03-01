import { points, students } from './dataBase.js'

/*
Math.random
.join()
.eval()
.pop() // eliminar los elementos de un array
.push() //añade un elemento al array PERO devuelve es el tamaño del array
.reverse() // cambia la posicion de los objetos del array
.shift() //elimina el primer elemento del array
.slice
.unshift // añade un elemento al princio del array PERO devuelve el tamaño del array

*/

//const cadena = students.join('**')

//ejecutar JavaScript desde una cadena es un enorme riesgo de seguridad. 
// Es demasiado fácil para un actor malintencionado ejecutar código arbitrario cuando se utiliza eval()
//Pregunta de examen
//eval() 

// const cadena = students.join('**')
// const ristra = points.join('+')
// console.log(eval(ristra));

// console.log(cadena+' '+ristra);

// const miArray = [1,1,15]
// console.log(miArray);

// console.log(miArray.pop());
// console.log(miArray);

// console.log(miArray.push(20,30,60,'hola',ristra));
// console.log(miArray);

// const union =points.concat(students,miArray,ristra) // une un array y un objeto
// console.log(union);



// //hacer una funcion que genere 5 numeros aleatorios, vector array con 5 numeros 
// // aleatorios y obtener su suma
// //10 y el 30

// // Math.random
// // join
// // eval
// //.pop() // eliminar los elementos de un array
// //.push() //añade un elemento al array pero devuelve es el tamaño del array

// //se crea una funcion random dando el min y max
// function ramdomMinyMax(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }

// const min=10;
// const max=30;
// let nuevoArray =  [];

// for (let i = 0; i < 5; i++) {
//      nuevoArray.push(ramdomMinyMax(min,max));
    
// }
// console.log('/////////////////////////');

// console.log(nuevoArray);
// //se une todos los elementos de array en un string
// let miJoin=nuevoArray.join('+');
// console.log(miJoin);
// //realiza la operacion
// console.log(eval(miJoin));

// console.log("//////////////////////////////////////////\n");


// const miArray1 = [1,1,15]
// console.log(miArray1.shift());
// console.log(miArray1);

// const miArraySlice = points.slice(3,9)
// console.log(points);
// console.log(miArraySlice);

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(3, 1, "canario"); // 1 es para sustituir
// const añadir = myFish.splice(3, 0, "patata");//0 para añadir
// const sorpresa = myFish.splice(3, 0);
// console.log(myFish.toString()+typeof myFish);

// // let j = myFish.toString()
// // console.log( typeof j);

// myFish.unshift('demonio','enterrador','flauta')
// diego
// console.log(removed);
// console.log(myFish);

// console.log('/////////////////////////////');

let num = 3453;
let miString = num.toString() // convierto en un string

let miArray = miString.split('') //convierto en un array

console.log(miArray);

const miArrayReverse = miArray.reverse();

console.log(miArrayReverse);
let booleana =true;

for (let i = 0; i < miArray.length; i++) {
    if (miArray[i] !== miArrayReverse[i]){

        booleana=false;
    }
    
}



