//Ejercicio 1
const boton1 = document.createElement('input');
boton1.setAttribute('type', 'button')
boton1.setAttribute('id', 'pulsar')
boton1.setAttribute('value', 'Pulsar1')
document.body.append(boton1)

//document.addEventListener('DOMContentLoaded', () => {
//  const btnPulsar = document.getElementById('pulsar');
boton1.addEventListener('click', botonPulsado1)
//})

function botonPulsado1() {
  alert('Botón1 pulsado')
}

//Ejercicio 2
const boton2 = document.createElement('input');
boton2.setAttribute('type', 'button')
boton2.setAttribute('id', 'pulsar')
boton2.setAttribute('value', 'Pulsar2')
document.body.append(boton2)

boton2.addEventListener('click', botonPulsado2)


function botonPulsado2() {
  console.log('\n /////Ejercicio No. 2///// \n');
  console.log('Mensaje con console.log');
  console.info('Mensaje con console.info');
  console.error('Mensaje con console.error');
  console.warn('Mensaje con console.warn');
}

//Ejercicio 3
import { mostrarMensajes } from './ficheroEjercicio3.js'

const boton3 = document.createElement('input');
boton3.setAttribute('type', 'button')
boton3.setAttribute('id', 'pulsar')
boton3.setAttribute('value', 'Pulsar3')
document.body.append(boton3)

boton3.addEventListener('click', mostrarMensajes)


//Ejercicio 4
// document.addEventListener('DOMContentLoaded', () => {
//   const btnPulsar = document.getElementById('pulsar');
//   btnPulsar.addEventListener('click', mostrarContenido)
// })
let miH1= document.createElement('h1');
miH1.setAttribute('id', 'miDiv4');
miH1.innerText='Hola Mundo';
document.body.prepend(miH1);

const boton4 = document.createElement('input');
boton4.setAttribute('type', 'button')
boton4.setAttribute('id', 'pulsar')
boton4.setAttribute('value', 'Pulsar4')
document.body.append(boton4)
boton4.addEventListener('click', mostrarContenido)

function mostrarContenido() {
  
  miH1.innerHTML = 'botón pulsado';
  miH1.style.fontWeight = 'bold'; //negrita
  miH1.style.fontStyle = 'italic'; //cursiva
  miH1.style.color = 'blue'; //color azul
  miH1.style.fontSize = '40px'; //tamaño de la fuente
  //miH1.style.backgroundColor = 'yellow'; //color de fondo
  //miH1.style.padding = '10px'; //espaciado
  //miH1.style.border = '1px solid black'; //borde

}

//Ejercicio 5
// document.addEventListener('DOMContentLoaded', () => {
//   const btnPulsar = document.getElementById('pulsar');
//   btnPulsar.addEventListener('click', mostrarContenido)
// })


// function mostrarContenido () {
//   const contenidoPrevio = document.getElementById('preContenedor');
//   const img = document.createElement('img');
//   img.src = './assets/hola.jpg'; // Reemplaza con la ruta de tu imagen
//   img.alt = 'hola mundo'; // Reemplaza con una descripción adecuada
//   contenidoPrevio.appendChild(img);
// }

//Ejercicio 6
// document.addEventListener('DOMContentLoaded', () => {
//     const btnPulsar = document.getElementById('pulsar');
//     btnPulsar.addEventListener('click', mostrarContenido)
//   })
//   document.addEventListener('DOMContentLoaded', () => {
//     const btnPulsar2 = document.getElementById('pulsar2');
//     btnPulsar2.addEventListener('click', mostrarContenido2)
//   })

// function mostrarContenido () {
//     const contenidoPrevio = document.getElementById('preContenedor');
//     const img = document.createElement('img');
//     img.src = './assets/hola.jpg'; // Reemplaza con la ruta de tu imagen
//     img.alt = 'hola mundo'; // Reemplaza con una descripción adecuada
//     contenidoPrevio.appendChild(img);
// }

// function mostrarContenido2 () {
//     const contenidoPrevio2 = document.getElementById('preContenedor');
//     const img2 = document.createElement('img');
//     img2.src = './assets/comoEstas.jpg'; // Reemplaza con la ruta de tu imagen
//     img2.alt = 'hola mundo2'; // Reemplaza con una descripción adecuada
//     contenidoPrevio2.innerHTML = ''; // Limpiar contenido previo
//     contenidoPrevio2.appendChild(img2);
// }

//Ejercicio 7

// document.addEventListener('DOMContentLoaded', () => {
//     const btnPulsar3 = document.getElementById('pulsar3');
//     btnPulsar3.addEventListener('click', mostrarContenido3)
//   })
//   document.addEventListener('DOMContentLoaded', () => {
//     const btnPulsar4 = document.getElementById('pulsar4');
//     btnPulsar4.addEventListener('click', mostrarContenido4)
//   })

//   let contenedor1 = document.getElementById('contenedor1');
//   let contenedor2 = document.getElementById('contenedor2');
//   contenedor2.style.display = 'none';


//   function mostrarContenido3 (){
//     contenedor2.style.display = 'block';
//     contenedor1.style.display = 'none';
//   }

//   function mostrarContenido4 (){
//     contenedor2.style.display = 'none';
//     contenedor1.style.display = 'block';
//   }

//Ejercicio 8
// document.addEventListener('DOMContentLoaded', () => {
//     const btnEnviar = document.getElementById('enviar');
//     btnEnviar.addEventListener('click', mostrarContenido)
//   })

//   function mostrarContenido (){
//     const nombre = document.getElementById('nombre').value;
//     const contenidoDiv = document.getElementById('contenido');

//     contenidoDiv.innerHTML = `Hola ${nombre}`;
//   }

//Ejercicio 9
// document.addEventListener('DOMContentLoaded', () => {
//     const btnEnviar = document.getElementById('enviar');
//     btnEnviar.addEventListener('click', mostrarContenido)
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const btnRegresar = document.getElementById('regresar');
//     btnRegresar.addEventListener('click', mostrarFormulario)
// })

// let contenedorFormulario = document.getElementById('formulario');
// let contenedorContenido = document.getElementById('contenido');
// contenedorContenido.style.display = 'none';

// function mostrarContenido() {
//     contenedorContenido.style.display = 'block';
//     contenedorFormulario.style.display = 'none';

//     const nombre = document.getElementById('nombre').value;
//     const contenidoDiv = document.getElementById('contenido');

//     const contTitulo = document.getElementById('titulo');
//     contTitulo.innerHTML = `${nombre}`;
// }

// function mostrarFormulario() {
//     contenedorContenido.style.display = 'none';
//     contenedorFormulario.style.display = 'block';
// }

//Ejercicio 10
// document.addEventListener('DOMContentLoaded', () => {
//     const btnEnviar = document.getElementById('enviar');
//     btnEnviar.addEventListener('click', mostrarMensaje)
// })


// function mostrarMensaje() {
//     let contNumero = parseInt(document.getElementById('numero').value, 10);
//     contNumero = contNumero + 1;
//     alert(`Valor incrementado ${contNumero}`);
// }

