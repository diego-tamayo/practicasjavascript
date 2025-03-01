document.addEventListener('DOMContentLoaded', () => {
  const btnEnviar = document.getElementById('enviar'); // por id
  btnEnviar.addEventListener('click', miFuncion)
})



function miFuncion() {

  console.log('Hola');


}


const prueba = document.getElementsByTagName('ul'); //Para una etiqueta  
console.log('Aquí muestra el tagname' + prueba);

const prueba2 = document.getElementById('lista'); //Para una etiqueta  
console.log(prueba2.innerHTML);
console.log(prueba2.innerText);

const prueba3 = document.getElementsByClassName('aperitivo')
console.log(prueba3);
console.log(prueba3.innerHTML);
console.log(prueba3.innerText);

const prueba4 = document.getElementById('patatas')
console.log(prueba4.innerText);

const prueba5 = document.getElementById('pepinillos')
console.log('Imprime HTML ' + prueba5.innerHTML);

function change() {
  // document.getElementsByTagName("h2") devuelve un NodeList de los elementos
  // <h2> en el documento, el primero es el numero 0:
  const header = document.getElementsByTagName("h2").item(0);
  const header1 = document.getElementsByTagName("h2").item(1);
  const header2 = document.getElementsByTagName("h2").item(2);
  const header3 = document.getElementsByTagName("h2").item(3);

  const aperitivo = document.getElementsByTagName("li").item(0);
  const aperitivo1 = document.getElementsByTagName("li").item(1);
  const aperitivo2 = document.getElementsByTagName("li").item(2);
  const aperitivo3 = document.getElementsByTagName("li").item(3);
  const aperitivo4 = document.getElementsByTagName("li").item(4);
  // El primer hijo del encabezado es un nodo de texto:
  header.firstChild.data = "Un documento dinámico";
  header1.lastChild.data = "En medio"
  header2.lastChild.data = "Este es mi formulario-"
  header3.firstChild.data = "Patata"

  aperitivo.firstChild.data = "pastel";
  aperitivo1.firstChild.data = "malteada";
  aperitivo2.firstChild.data = "helado";
  aperitivo3.firstChild.data = "flan";
  aperitivo4.firstChild.data = "leche";
  // Ahora el encabezado es "Un documento dinámico".

  // Accede al primer párrafo
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "Este es el primer párrafo.";

  const para1 = document.getElementsByTagName("p").item(1);
  para1.firstChild.data = "Paco";
  const para2 = document.getElementsByTagName("p").item(2);
  para2.firstChild.data = "Pepe";
  const para3 = document.getElementsByTagName("p").item(2);
  para3.firstChild.data = "Lola";

  // // Crear un nuevo nodo Texto para el segundo párrafo
  const newText = document.createTextNode("Éste es el segundo párrafo.");
  const newText1 = document.createTextNode("Lorem ipsum dolor sit, amet consectetur");

  // // Crea un nuevo elemento para que sea el segundo párrafo.
  const newElement = document.createElement("p"); //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  const newElement1 = document.createElement("article");
  // // Poner el texto en el párrafo.
  newElement.appendChild(newText);
  newElement1.appendChild(newText1);
  // // Coloque el párrafo al final del documento agregándolo al cuerpo
  // // (que es el padre de para)
  //para.parentNode.appendChild(newElement);
  enviar.parentNode.appendChild(newElement1);
  para.parentNode.appendChild(newElement);

}