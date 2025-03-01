
const h2 =document.createElement('h2') //creo un h1
const h22 =document.createElement('h2')

 h2.innerText ='Bienvenido'
 h22.innerText ='Bienvenido Al Mundo'

 document.body.append(h2) //añade al final de Body
 h2.replaceWith(h22)


// h1.style.color='red'
// h1.style.fontSize='40px';

const uno = document.getElementsByTagName('h2')[0] //posicion del HTML

console.log(uno.innerText); //veo el contenido del h1
//uno.style.color = 'green'

uno.setAttribute('id','uno')//crea un id al primer h1

const dos=document.getElementsByTagName('h2')[1]
console.log(dos.innerHTML);
dos.setAttribute('id','dos');//crea un id al segundo h1

uno.setAttribute('style','font-size: 2em; color:red')
document.getElementById('dos').setAttribute('style','color:green') //dos maneras de acceder a los atributos 

const h1 =  document.createElement('h1') //creamos un h1
h1.innerText = 'Super Bienvenidos'
document.body.prepend(h1)//añade al inicio del body

const ol = document.createElement('ol') //creamos un ol
ol.innerHTML='<li>Pato</li><li>Pollo</li>';
document.body.append(ol);

const liNew =document.createElement('li')//creamos un li
const liLast =document.createElement('li')
liNew.innerText='Se pone primero';
liLast.innerText='Se pone de ultimo';
//document.body.(liNew)

const liPato = document.getElementsByTagName('li')[0]
const liPollo = document.getElementsByTagName('li')[1]

liPato.before(liNew) //posiciona antes de ol
liPollo.after(liLast) //posiciona despues de ol

const patito =document.createElement('li')
patito.innerText='Patito'

const patito2 = document.getElementsByTagName('li')[0].nodeValue = `patito`

liPato.replaceWith(patito) //reemplaza la etiqueta y el texto

const article = document.createElement('article')
article.innerText ='Es un articulo'
document.body.append(article)

article.insertAdjacentHTML('beforeend','<h3>Despues</h3>')
article.insertAdjacentHTML('beforebegin','<h3>Antes</h3>')
article.insertAdjacentHTML('afterbegin','<h3>¿Antes?</h3>')
article.insertAdjacentHTML('beforebegin','<h3>Después de</h3>')
article.insertAdjacentHTML('beforebegin','<h3>Después de Antes de cual</h3>')

article.insertAdjacentHTML('beforebegin','<h3>Despues de Antes de cual</h3>')
const antes = 'Antes de '
let acum = 'Después de '
for (let i = 0; i < 5; i++) {
    article.insertAdjacentHTML('beforebegin',`<h3>${acum += antes} </h3> `)

}

const boton = document.createElement('input')
boton.setAttribute('type','button');
boton.setAttribute('value','Borrar H3')
boton.setAttribute('id','borrar')

document.body.append(boton)

boton.addEventListener('click',borrar)

function borrar () {
   h1.remove()
}

