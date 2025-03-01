// //creacion como PRIMITIVA
// let frase = new String ('Paquito el chocolatero')
// //creacion como OBJETO
// let frase1 = new String('Donde estará mi carro')
// let frase2 = new String('Él vino en un barco')
// //const cuadrado = new Rectangulo(20,20)


// console.log(frase1.length);


// console.log("tipo de la variable frase: " + typeof frase);
// console.log("tipo de la variable frase1: " + typeof frase1);

// console.log(frase.length);

// console.log(frase.indexOf('ro'));
// console.log(frase1.indexOf('ro'));
// console.log(frase1.indexOf('r'));
// console.log(frase1.indexOf('r', 14));
// console.log(frase1.lastIndexOf('r'));
// console.log(frase.charAt(13));
// console.log(frase.charCodeAt(13));
// console.log(frase.charAt(14));
// console.log(frase.charCodeAt(14));

// if (frase.charAt(13) > frase.charAt(14)) {
//     console.log('o minúscula es mayor que O mayúscula');
// } else {
//     console.log('o minúscula es menor que O mayúscula');
// }

// console.log('concatena' + frase.concat(' ' + frase1, ' ', frase2));

// console.log(String.fromCharCode(111, 79));
// console.log(String.fromCharCode(189, 43, 190, 61));
// console.log(String.fromCharCode(189, 43, 190, 61));
// console.log(String.fromCharCode(189));
// console.log(String.fromCharCode(43));
// console.log(String.fromCharCode(190));
// console.log(String.fromCharCode(61));
// console.log(frase2.match('barco'));
// let frase3 = 'Ay quien maneja mi barco'
// console.log(frase3.replace('barco', 'barca'));
// console.log(frase3);
// //frase3 = frase3.replace('barco', 'barca')
// console.log(frase3);

// console.log('Método search() ', frase3.search('barca'));
// console.log('Método search() ', frase3.search('co'));


// miArray = [frase, frase1, frase2]

// //  for (const key in miArray) {
// //     if (Object.prototype.hasOwnProperty.call(miArray, key)) {
// //         const element = miArray[key];
// //         if (element.match('barco')!= null){
// //         console.log(element);
// //     }
// //     }
// //  }

// miArray.push(frase3)

// console.log("inicio de la busqueda \n /////////////////////////////////////// \n");


// // function sumar(a, b) { return a + b }
// // console.log(sumar(3, 8));

// // const sumar1 = (a, b) => a + b //Funcion flecha

// // console.log(sumar1(23, 28));

// for (const key in miArray) {
//     const element = miArray[key];

//     if (element.search('co') != -1) {

//         console.log(element.toString());
//        // const a = element.toString();
//         //console.log(a);

//     }

// }

// console.log('Rebanada: '+frase3.slice(12,19));  // Solo muestra la fraccion del String


// console.log('Método search() ', frase3.search('co'));
// posicionCO=frase3.search('co');
// console.log(frase3.indexOf(' '));
// let posiblanco = frase3.indexOf(' ');

// let posicionInicial= frase3.lastIndexOf(' ',22);
// console.log(posicionInicial);

// let posicionFinal = frase3.indexOf(' ', 22);
// console.log(posicionFinal);

// let largoString = frase3.length;

// let palabra = frase3.slice(posicionInicial+1,largoString)
// console.log(palabra);

// console.log('///////////////////Tarea//////////////////////// \n');

// let oracion = "quiero que el esta en el sea mio barco";
// let letras = "co";

// function buscarYSepararPalabra(oracion, letras) {
//     // Busca la posición de las letras en la oración
//     let primerIndice = oracion.search(letras);

//     if (primerIndice === -1) {
//       return `Las letras "${letras}" no se encuentran en la oración.`;
//     }

//     // Encuentra el espacio antes de las letras
//     let espacioAntes = oracion.lastIndexOf(' ', primerIndice);

//     // Encuentra el espacio después de las letras para buscar el final de la palabra
//     let espacioDespues = oracion.indexOf(' ', primerIndice);

//     // Ajusta el índice final si la palabra está al final de la oración
//     if (espacioDespues === -1) {
//       espacioDespues = oracion.length;
//     }

//     // Extrae la palabra usando los índices encontrados
//     let palabra = oracion.substring(espacioAntes + 1, espacioDespues);

//     return palabra;
//   }

//   console.log(buscarYSepararPalabra(oracion, letras)); // "barco"

const s = "The morning is upon us"

// console.log('la cadena mide '+s.length);
// console.log(s.slice(12));
// console.log(s.substring(12));
// console.log(s.slice(-11));
// console.log(s.substring(-11));
// console.log(s.slice(13,16));
// console.log(s.substring(13,16));
// console.log(s.slice(16,13));
// console.log(s.substring(16,13));
// console.log(s.slice(-8,-4));
// console.log(s.substring(-8,-4));
// console.log(s.slice(-22,-11));
// console.log(s.substring(-22));
// console.log('negativo + positivo');
// console.log(s.slice(-8,4));
// console.log(s.substring(-8,4));
// console.log(s.slice(8,-4));
// console.log(s.substring(8,-4));
// console.log(s.slice(8,-20));
// console.log(s.substring(8,-20));

// console.log(s.split(''));
// console.log(s.split());
// console.log(s.split('o',2));

// const miArray= s.split('',4);

// const frase = 'en un lugar de la Mancha, de cuyo nombre no quiero acordarme no ha mucho';
// let a=frase.split(' ',35)

// nombres = ['gato','sabrina','lusmeri','lusma','sasi','salamandra','pepe','tamayo']

// for (const key in nombres) {
//   if (Object.prototype.hasOwnProperty.call(nombres, key)) {
//     const element = nombres[key];
//     if (element.startsWith('s')) {
//       console.log(element);
//     }
//   }
// }

const frase1 = 'en un lugar de la moncha1, de cuyo nombre. no 2quiero acordarme no ha mucho';
//miArray = frase1.split(' ')
// console.log(miArray);


// for (const key in miArray) {
//   if (Object.prototype.hasOwnProperty.call(miArray, key)) {
//     const element = miArray[key];
//     if (element.startsWith('m')){
//       console.log(element.replace('o','a')); 
//     }

//   }
// }

//1. Busca 'co' dentro de una  cadena y saca la palabra completa

const miArrayGigante = frase1.split(' ', 25)
console.log(miArrayGigante);

for (const element of miArrayGigante) {
  if (element.startsWith('m') == 1 || element.indexOf('m') >= 1) {
    console.log(element);

  }
}

//segundo ejercicio
// const miArrayGigante2 = frase1.split(' ', 25)
// console.log(miArrayGigante2);

// for (const element of miArrayGigante2) {
//   if (element.startsWith('m')==1) {

//     let a = element.toLocaleUpperCase;
//     console.log(a);

//   }
// }

//elimina las comas (,)

const miArarySinComas = [];
for (const element of miArrayGigante) {
  if (element.indexOf(',') >= 0) {
    miArarySinComas.push(element.replace(',', ''))
  }
  else if (element.indexOf('.') >= 0) {
    miArarySinComas.push(element.replace('.', ''))
  } else {
    miArarySinComas.push(element)
  }

}
console.log("Antes de "+miArarySinComas);

for (const element1 of miArarySinComas) {
 
  console.log(element1.toWellFormed());
}

let expe = 'lalala7'
let expe1='23'

// // if(parseInt(expe))
// let ab = miArarySinComas.split('')
// console.log(ab);
