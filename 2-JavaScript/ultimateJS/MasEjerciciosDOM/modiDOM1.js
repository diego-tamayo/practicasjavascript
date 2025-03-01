let h1 = document.querySelector('h1') //Con el querySelector solo toma el primer elemento que encuentre en la etiqueta especificada
//document.getElementsByTagName('h1')[0]  //Otra manera es especificando la posicion [0]

h1.innerText = 'Patata' //Encuentra el primer h1 para sobreescribir el texto

let listItems = document.querySelectorAll('.list >li') //> significa los hijos
console.log(listItems);

let image = document.querySelector('img'); //captura la imagen
image.setAttribute('src', './assets/chica.png');//cambia la ruta de la imagen
image.classList.add('img-fluid') //agrega o crea una clase
image.classList.add('pepe') //agrega otra clase
image.setAttribute('style', 'border: 2px solid red')//coloca un borde a la imagen
image.style.borderStyle = 'dotted' //cambia el borde a puntos 

//let oldDiv =document.getElementsByClassName('old-div')
let oldDiv = document.querySelector('.old-div')
//console.log(oldDiv);

oldDiv.style.backgroundColor = 'grey'
oldDiv.setAttribute('style', 'height: 6vh; background: grey;')//coloca un borde a la imagen

document.body.removeChild(oldDiv) //Elimina el div oldDiv
let newDiv = document.createElement('div')//crea una nueva etiqueta para el HTML
newDiv.innerText = 'Soy un nuevo Div' //anexa un nuevo texto en el nuevo DIV newDiv

document.body.append(newDiv) //coloca el nueDiv al final del body

let button = document.createElement('button');//crea un boton
button.innerText = 'Pulsa Aqui'
document.body.append(button) //coloca el boton al final del body

/*
button.addEventListener('click', function (){
    alert ('Boton presionado')
})
*/

function showMessage(message) {
    alert(message)
}

button.addEventListener('click', showMessage.bind(null, 'Hola Mundo'))//agrega un evento al dar click al boton funcion BIND

/*Ejercicio añadir una lista de elementos dinamicos crear una lista 
que segun pulsaciones se ira añadiendo y luego crear un filtro de 
items y luego crear un elemento arrastrable */ //ul dinamit  list debajo del boton 

/* PRACTICA */
//Añadir elementos dinámicos a una lista
const miH2 = document.createElement('h2')
miH2.innerText = 'Añadir elementos dinámicos a una lista'
document.body.append(miH2)

const itemInput = document.createElement('input')//crea un input TEXT
itemInput.setAttribute('type', 'text')
itemInput.setAttribute('id', 'itemInput')
document.body.append(itemInput)

let buttonAnadir = document.createElement('button');//crea un boton
buttonAnadir.innerText = 'Añadir Item'
buttonAnadir.setAttribute('id', 'addButton')
document.body.append(buttonAnadir)

const ul = document.createElement('ul')//crea un UL
ul.setAttribute('id', 'dynamicList');
document.body.append(ul);

//Traer todos los elementos involucrados

let input = document.getElementById('itemInput')
let addButtton = document.getElementById('addButton')
let list = document.querySelector('#dynamicList')

addButtton.addEventListener('click', () => {
    if (input.value.trim() != '') {//Remueve todos los espacios en blanco por delante y por atras 
        let newItem = document.createElement('li'); //crea un nuevo li
        newItem.innerText = input.value //asigna el texto dentro del li
        list.appendChild(newItem)
        input.value = '' //deja el input vacio para que el usuario vuelva a escribir
    }
})

//Filtrar items de una lista ya creada
//situar elementos en HTML
// const inputBuscar = document.createElement('input');
// inputBuscar.setAttribute('type','text')
// inputBuscar.setAttribute('id','filterInput')
// inputBuscar.setAttribute('placeHolder','Item a filter')
// document.body.prepend(inputBuscar)

// let buttonFiltrar = document.createElement('button');//crea un botonFiltrar
// buttonFiltrar.innerText = 'Filtrar Item'
// buttonFiltrar.setAttribute('id','filtrarButton')
// document.body.prepend(buttonFiltrar)

//Traer todos los elementos involucrados
const filterInput = document.querySelector('#filterInput')
// const buttonFiltrar = document.getElementById('inputButton')
let itemsList = document.getElementById('list');
// console.log('prueba',typeof itemsList);


filterInput.addEventListener('keyup', () => { //agrega un evento al boton Filtrar
    const term = filterInput.value.toLowerCase(); //convierte la cadena en minuscula
    const items = itemsList.getElementsByTagName('li')
    Array.from(items).forEach(function (item) {//convierte el objeto a un Array
        // console.log('control de items',item.textContent);

        if (item.textContent.toLowerCase().indexOf(term) != -1) { //convierte el texto a minuscula para comparar
            item.style.display = 'block'
        } else {
            item.style.display = 'none' //en caso que no lo encuentre que no muestre
        }
    })
})

/*Hacer un elemento arrastrable: drag draggable, mover un elemento o arrastrarlo*/

const draggable = document.getElementById('draggable')
const dropzone = document.getElementById('dropzone')

draggable.addEventListener('dragstart',function () {// El objeto draggable que es el que se puede arrastar le ponemos una escucha
    setTimeout(()=>{
        this.style.display='none'
    },0)
}) 

dropzone.addEventListener('dragover',function (event){
    event.preventDefault();

})

dropzone.addEventListener('drop',function (){
    draggable.style.display = 'block'
    this.append(draggable)
})