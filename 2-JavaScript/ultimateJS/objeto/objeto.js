
let prop = 34;
const test = {
prop: 42,
func: function () {//funcion flecha sin nombre
    return this.prop;
},
saludo: 'Hola ',
};
prop=47
console.log(test.func());
console.log(test.saludo);

const persona ={
    nombre:'Paco',
    apellido: 'Gil',
    edad: 32,
    juntar: function (){
        return test.saludo + ' '+ this.nombre +' ' + this.apellido
       },
} 

console.log(persona.apellido);
console.log(persona.juntar());

mascota ={
    nombre: 'Peri',
    tipo: 'Aguila',
    metodo: function (){
      //  return "Es señor "+ persona.nombre +" tiene un "+this.tipo+ " llamado "+this.nombre
      return `Es señor ${persona.nombre} tiene un ${this.tipo} llamado ${this.nombre}`
    },
}

console.log(mascota.metodo());

const persona2 ={
    nombre,
    apellido,
    edad,
} 

new persona2 (nombre='Renzo',apellido='Lapoin',edad=30);
new persona2 (nombre='Aguencia',apellido='',edad=30);