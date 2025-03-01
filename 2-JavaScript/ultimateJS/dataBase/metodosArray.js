import { students } from './dataBase.js'

/* MÉTODO FOREACH/ */
// for (let index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }
// const nuevoStudents = students.forEach(function(student){
//    // console.log('ForeAch',student.name,student.lastname,student.age);
//   return{
//    ...students,
//    title: student.name+' '+student.lastname
// }
// })
// console.log('Array Nuevo Students '+ nuevoStudents);

// const nuevoStudents = students.map(function(student){
//     // console.log('ForeAch',student.name,student.lastname,student.age);
//    return{
//     // ...students,
//     title: `${student.name} limon ${student.lastname}`,
//     course: 'Programming',
//     age: student.age*4,
//     courseAndAge: student.course+' '+student.age,
//  }
//  })

const nuevoStudents1 = students.map(student => ({ ...student, course: 'Cocinar' }))

const nuevoStudents2 = students.map(student => ({ ...student, course: `Cocinar` }))
    .map(student => ({ ...student, age: student.age * 2 }))
    // .map(student => ({ ...student, course2: 'planchar' }))
    // .map(student => ({ ...student, course3: 'lavar' }))
    .map(student => ({ ...student, name: `Maria ${student.name} ` }))

    const nuevoStudents3 = nuevoStudents2.map(student => ({ ...student, course: `Cocinar, planchar y lavar` }))
    .map(student => ({ ...student, age: student.age * 2 }))
    .map(student => ({ ...student, name: `Don ${student.name} ` }))

//const nuevoStudents3 = nuevoStudents2.map(student =>({...student,name: 'Maria '+student.name}))
//  .map(student => ({... student,name: 'Cocinar'}))

nuevoStudents3.forEach(student => console.log(student));

//  console.log('Array Nuevo Students '+ nuevoStudents);

const sortedStudents = students.sort(function (first, second) {
    if (first.age > second.age) {
        return 1;
    } else {
        return -1;
    }
})
console.log(sortedStudents);

const sortedStudents1 = students.sort((a, b) => a > b ? 1 : -1)
console.log(sortedStudents1);
const frutas = ["limones", "guindas", "manzanas", "bananas"];
console.log(frutas);
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

console.log(frutas.sort());

// //  const points = [
// //     'diego', 'renzo', 'marta', 'lucero', 'zapato', 'animal','aaimal',2,'1','3',
// //   ];

const points = [100, 20, 30, 44, 55, 70, 90, 10, 30, 45, 60, 80, 100, 100];
console.log(points);
const sortedPoints = points.sort((a, b) => a > b ? 1 : -1)

console.log(sortedPoints);

//Ordenar por nombre
const ordenNombre = students.sort(function (first, second) {
    if (first.name > second.name) {
        return 1;
    } else {
        return -1;
    }
})

console.log(ordenNombre);

console.log("\n //////////////////METODO SOME/////////////////////////\n");

const result = students.some((students) => students.lastname == 'Doe');

console.log(result);


console.log("\n //////////////////METODO REDUCE/////////////////////////\n");
// te permite reducir los elementos de un array y retornar un valor único
let total; //acumulador
for (let i = 0; i < points.length; i++) {
    const element = points[i];
    total += element
}

const total1 = points.reduce((total, point) => { return total += point })
console.log("metodo reduce ", total1);

const total2 = points.reduce((total, point) => total + point, 0)
console.log('metodo reduce v2', total2);

const sumaEdades = students.reduce((total, students) => total + students.age, 0);
console.log("La suma de edades ", sumaEdades);
console.log("La media de edades es: ", sumaEdades / students.length);


console.log("/////////////////////METODO MAP/////////////////////////////");
//Es una especie de FOR recorre el array y lo multiplica * 2 dejando el array modificado
//La funcion Map es para crear un nuevo Objeto
const numbers = [1, 5, 10, 15];
const doubles = numbers.map((number) => number * 2)
console.log(doubles);

console.log("/////////////METODO FIND (DEVUELVE VALOR)//////////////////\n");
//Encuentra un determinado dato entre varios objetos y trae el objeto en cuestion
const resultado = students.find((student) =>student.name==='Ryan');

console.log('encontro nombre de RYAN ',resultado);

const resultado2 = students.find((student) =>student.age >20);
console.log('edad ',resultado2);

const resultado3 = students.find((student) =>student.course === 'Web Development');
console.log('curso ',resultado3);

console.log("\n/////////////METODO FILTER//////////////////\n");
//Busca los elementos o objetos que tengan mayores de 20 años, en este caso son 3
const resultado4 = students.filter((student) =>student.age >20);
console.log(typeof resultado4);
console.log('filter edad ',resultado4);

const resultado5 = students.filter((student) =>student.course === 'Web Development');
console.log('filter curso',resultado5);

console.log("\n/////////////METODO INCLUDES//////////////////\n");
//Busca con el metodo Filter los nombre del array students y solo muestra los nombre que tengan la platable 'a'
const resultado6 = students.filter((student) =>student.name.includes('a'));
console.log('filter e INCLUDES ',resultado6);

const result3 = students.filter((student) =>student.course.includes('o'));
result3.forEach(student => console.log(student));

const result4 = students.map(student =>({...student, age: Math.sqrt(student.age)}));
result4.forEach(student => console.log(student));

console.log("\n/////////////DESESTRUCTURAR UN OBJETO//////////////////\n");
// const result12 = students.map(student =>({student: 
//     `${student.name}
//     ${student.lastname}
//     ${student.age}
//     ${student.course}
//     `}))

//     result12.forEach(student => console.log(student));
   
    const result13 = students.map(({name,lastname,age,course}) =>( {student:`${name} ${lastname} ${course} `,age}))
    result13.forEach(student => console.log(student));
