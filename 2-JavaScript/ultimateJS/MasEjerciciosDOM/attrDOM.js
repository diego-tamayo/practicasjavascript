document.addEventListener('DOMContentLoaded', () => {
    const btnProbar = document.getElementById('probar')
    btnProbar.addEventListener('click', probar)

    const btnCambiar = document.getElementById('cambiar')
    btnCambiar.addEventListener('click', cambiar)
})

// function probar (){
//     const elementos = document.getElementsByName('apellidos')
//     const resul = document.getElementById('resul')
//     // for (let i = 0; i < elementos.length; i++) {
//     //     const element = elementos[i].value;
//     //     resul.innerText +=' ' + element
//     // }

//     for (const element of elementos) {
//         console.log(element);
//         resul.innerText += ' ' + element.value
//     }
//    // resul.innerText = elementos

// }

function cambiar() {
    // document.getElementById('ape1').attributes[1].nodoValue('Paquito')
    // const cambio = document.getElementById('ape1').attributes['name'].nodeValue
    // const cambio = document.getElementById('ape1').name = 'Paquito'
    const cambio = document.getElementById('ape1').id = 'hola'
    const cambio1 = document.getElementById('hola').placeholder = 'hola'
    document.getElementById('ape2').setAttribute('value', 'Miguel')
    const cambio2 = document.getElementById('ape2').getAttribute('value')
    document.getElementById('ape2').removeAttribute('value')
    //document.write(cambio)
    console.log(cambio, cambio1, cambio2);
    //     const pR = document.getElementsByName('Paquito')
    //     const cadena = pR
    //    const pruebaRenzo = document.getElementById('pruebaRenzo')
    //    pruebaRenzo.innerText = cadena
    //resul.innerText += ' ' + atributo1.nodeName + ' -> ' + atributo1.value + '\n'

}

function probar() {
    //   const elementos1 = document.getElementsByTagName('input')
    const elementos2 = document.getElementById('ape1').attributes
    const resul = document.getElementById('resul')
    // for (let i = 0; i < elementos.length; i++) {
    //     const element = elementos[i].value;
    //     resul.innerText +=' ' + element
    // }

    for (const element of elementos2) {
        // console.log(element);
        resul.innerText += ' ' + element.nodeName + ' -> ' + element.value + '\n'
    }
    // resul.innerText = elementos
    // document.getElementById('ape1').attributes[1].nodoValue('Paquito')
}