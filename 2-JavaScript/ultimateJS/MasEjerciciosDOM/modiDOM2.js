//Aprender a clonar Nodos o Etiquetas
let div1 = document.getElementById('div1')
//let div2 = div1.cloneNode(true) //Clona un DIV o un NODO
div1.after(div2)

document.getElementById('div1').addEventListener('click', mostrar)

function mostrar() {
    console.log('hola');
}


