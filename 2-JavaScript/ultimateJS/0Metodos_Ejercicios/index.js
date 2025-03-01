
//Ejercicio 1
console.log(`//////Ejercicio 1///////`);

const playlist1 = ["Concrete and Gold", "The Line", "Sunday Rain",
    "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water",
    "La Dee Da", "The Sky Is a Neighborhood", "Make It Right",
    "Run", "T-Shirt"];

playlist1.forEach(element => {
    console.log(element);
});

//Ejercicio 2
console.log(`//////Ejercicio 2///////`);

const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
];
let totalLibros = 0;
librosDeJS.forEach(element => {
    totalLibros += 1;
});

/// ¡escribir en este espacio la solución del ejercicio!
console.log(`Mi lista de libros de JavaScript tiene ${totalLibros} libros`);

//Ejercicio 3
console.log(`//////Ejercicio 3///////`);

const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)",
    "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right",
    "Run", "T-Shirt"];
let cont = 0;
playlist.forEach(element => {
    console.log(`${cont} - ${element}`);

});
/// completá acá el código
// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt

//Ejercicio 4
console.log(`//////Ejercicio 4///////`);

let numbers = [];
let sum = 0;
// codifica debajo de este comentario la solución al ejercicio
//console.log(sum);
// deberia mostrar la suma, en el ejemplo 155

//se crea una funcion random dando el min y max

function ramdomMinyMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 6; i++) {
    numbers[i] = ramdomMinyMax(10, 17);
}

console.log(numbers);

numbers.forEach(element => {
    sum = element + sum;
});

console.log(`La suma total es de ${sum}`);

//Ejercicio 5
console.log(`//////Ejercicio 5///////`);

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;
// codea debajo de este comentario la solución al ejercicio

notasDeTPs.forEach(element => {
    notaFinal = element + notaFinal;
});

console.log(`La suma de la nota final es de ${notaFinal} y su tamaño es de ${notasDeTPs.length}`);

notaFinal = notaFinal / notasDeTPs.length

console.log(`el promedio de la nota final es de ${notaFinal}`);
// debería mostrar 6.8

//Ejercicio 6
console.log(`//////Ejercicio 6///////`);

const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
const numerosPares = [];
const numerosImpares = [];

masNumeros.forEach(element => {
    if (element % 2 == 0) {
        numerosPares.push(element)
    } else {
        numerosImpares.push(element)
    }
});

// SOLUCIÓN
console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 7
console.log(`//////Ejercicio 7///////`);
const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
const dobles = [];

valores.forEach(element => {
    dobles.push(element * 2)
});

// // codifica aquí tu solución al ejercicio
console.log("valores: ", valores);
console.log("dobles: ", dobles);
// deberias tener como resultado
// valores: [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles: [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]

//Ejercicio 8-1 Map (1)
console.log(`//////Ejercicio 8///////`);
const numeros = [1, 2, 3, 4, 5];
let numerosMasDiez;

numerosMasDiez = numeros.map((numeros) => numeros * 10)
// codificar aquí la solución del ejercicio
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

//Ejercicio 9-2 (2)
console.log(`//////Ejercicio 9///////`);

const numeros1 = [3, 7, 13, 99];
let dobles1 = [];

dobles1 = numeros1.map((numeros1) => numeros1 * 2)

// codear acá la solución del ejercicio
console.log(numeros1); // [3, 7, 13, 99]
console.log(dobles1); // [6, 14, 26, 198]

//Ejercicio 10-3 (3)
console.log(`//////Ejercicio 10///////`);
const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
let frasesExclamadas = [];

frasesExclamadas = frases.map((frases) => `¡${frases}!`)

// codear acá la solución del ejercicio
console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas);// [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

//Ejercicio 11-4 (4)
console.log(`//////Ejercicio 11///////`);

const librosDeJS2 = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
];

const listaLibros = librosDeJS.map(libro => `<li>${libro}</li>`).join('\n');

console.log(`<ul>\n${listaLibros}\n</ul>`);

console.log(`//////Ejercicio 11-2///////`);

let listaLibros3 = "<ul>\n";  // Iniciamos la lista desordenada

librosDeJS.forEach(libro => {
    listaLibros3 += `  <li>${libro}</li>\n`;  // Agregamos cada libro dentro de <li>
});

listaLibros3 += "</ul>";  // Cerramos la lista

console.log(listaLibros3);

// codifica aquí la solución del ejercicio
// el resultado final debería ser
// <ul>
// <li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li>
// <li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li>
// <li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li>
// <li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li>
// <li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li>
// <li>JavaScript Allongé: The Six Edition</li>
// </ul>

//Ejercicio 12-5 (5)
console.log(`//////Ejercicio 12///////`);

const frases1 = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
let longitudes = [];
// codifica aquí la solución del ejercicio
frases1.forEach(element => {
    longitudes.push(element.length);
});

console.log(frases1); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]

//Ejercicio 13-6 (6)
console.log(`//////Ejercicio 13///////`);

const playlist2 = ['Everlong', 'The Pretender', 'Learn to Fly'];
/// completa aquí el código

const playlistConIndice = playlist2.map((element, index) => `${index} - ${element}`);

console.log(playlistConIndice);

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

//Ejercicio 14-7 (7)
console.log(`\n//////Ejercicio 14///////`);

const costos = [12.5, 56, 98, 45.75];
let preciosFinales = [];

const agregarIVA = function (costo) {
    return costo * 1.21;
}

const sumarGanancia = function (costo) {
    return costo * 1.5;
}

preciosFinales = costos.map((element) => sumarGanancia(element))
preciosFinales = preciosFinales.map((element) => agregarIVA(element))
// codifica aquí la solución del ejercicio
console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]

//Ejercicio 15-8 (8)
console.log(`\n//////Ejercicio 15///////`);

const productos = ['celular', 'notebook', 'monitor'];
const costos1 = [12.5, 56, 98];
let preciosFinales1 = [];

const agregarIVA1 = function (costo) {
    return costo * 1.21;
}
const sumarGanancia1 = function (costo) {
    return costo * 1.5;
}

preciosFinales1 = costos1.map((element) => sumarGanancia1(element));
preciosFinales1 = preciosFinales1.map((element) => agregarIVA1(element));
preciosFinales1 = productos.map((element, index) => `${element} ${preciosFinales1[index]}`)

// codifica aquí la solución del ejercicio
console.log(preciosFinales1);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

//Ejercicio 16-1 (1)
console.log(`\n//////Ejercicio 16///////`);

const costos2 = [39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14];
let losMasCaros = costos2.filter((element) => element > 50);
// codifica aquí la solución del ejercicio
console.log(costos2);
console.log(losMasCaros);
// debería mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

//Ejercicio 17-2 (2)
console.log(`\n//////Ejercicio 17///////`);

const masNumeros1 = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
// codea acá tu solución
let numerosPares1 = [];
let numerosImpares1 = [];

numerosPares1 = masNumeros1.filter((element) => element % 2 == 0);
numerosImpares1 = masNumeros1.filter((element) => element % 2 != 0);

console.log("pares: ", numerosPares1);
console.log("impares: ", numerosImpares1);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 18-3 (3)
console.log(`\n//////Ejercicio 18///////`);
const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1, 2, 3],
    'Dolore.'
];

soloStrings = mix.filter((element) => typeof element === 'string');
// codifica aquí la solución del ejercicio
console.log(soloStrings);
// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

//Ejercicio 19-4 (4)
console.log(`\n//////Ejercicio 19///////`);

const playlist3 = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
var playlistEscuchada3 = ['The Pretender', 'Lithium', 'Come As You Are']
/// codifica aquí tu solución

playlistSinEscuchar3 = playlist3.filter((element) => !playlistEscuchada3.includes(element));

console.log(playlistSinEscuchar3);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]

//Ejercicio 20-1 (1)
console.log(`\n//////Ejercicio 20///////`);
/**
 El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
 devolviendo como resultado un único valor.
 */
const numbers1 = [6, 1, 34, 94, 3, 17];
// codea debajo de este comentario la solución al ejercicio
let sum2 = numbers1.reduce((total, number) => total + number, 0);
console.log(sum2);

// debería mostrar 155

//Ejercicio 21-2 (2)
console.log(`\n//////Ejercicio 21///////`);

const numbers2 = [6, 1, 34, 94, 3, 17];
// codifica aquí debajo de este comentario la solución al ejercicio
let multiplicacion = numbers2.reduce((total, number) => total * number, 1);
console.log(multiplicacion);

// debería mostrar 977976

//Ejercicio 22-3 (3)
console.log(`\n//////Ejercicio 22///////`);

const notasDeTPs1 = [4, 7, 8, 5, 10];
// codifica aquí este comentario la solución al ejercicio
let promedio = notasDeTPs1.reduce((total, number) => total + number, 0);
promedio = promedio / notasDeTPs1.length;
console.log(promedio);
// debería mostrar 6.8

//Ejercicio 23-4 (4)
console.log(`\n//////Ejercicio 23///////`);
const librosDeJS1 = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
];
    // codificar aquí la solución del ejercicio
    // el resultado final debería ser
    // <li>JavaScript for Kids: A Playful Introduction to 
    // Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A 
    // Modern Introduction to Programming</li><li>JavaScript: The Good 
    // Parts</li><li>Programming JavaScript Applications: Robust Web
    // Architecture with Node, HTML5, and Moderns JS 
    // Libraries</li ><li>Effective JavaScript: 68 Specific Ways to Harness 
    // the Power of JavaScript</li><li>JavaScript: The Definitive 
    // Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six 
    // Edition</li>

    const listaLibros1 = librosDeJS1.reduce((total, libro) => total + `<li>${libro}</li>`, '');
    console.log(`<ul>${listaLibros1}</ul>`);

    //Ejercicio 24-5 (5)
console.log(`\n//////Ejercicio 24///////`);

const personas = [
    {nombre: "Gracia",
    edad: 6
    },
    {nombre: "Ada",
    edad: 19
    },
    {nombre: "Heidy",
    edad: 34
    }
    ];
    // codefica debajo de este comentario la solución al ejercicio
    let sumaEdades = personas.reduce((total, persona) => total + persona.edad, 0);
    console.log(sumaEdades);
    // debería mostrar 59

      //Metodo Integrador 25 (0)
console.log(`\n//////Ejercicio 25///////`);

// const datos = [2, -4, 6, 0, 5, -1];
// // codificar aquí la solución del ejercicio
// let total = [];

// total = datos.reduce((total, number) => total + number, 0);
// console.log(total);