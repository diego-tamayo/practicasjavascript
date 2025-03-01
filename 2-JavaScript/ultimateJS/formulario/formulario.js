
document.addEventListener('DOMContentLoaded', ()=> {
    const btnPulsar = document.getElementById('pulsar');
    btnPulsar.addEventListener('click',verificarParImpar);
    const btnSumar =document.getElementById('sumar');
    btnSumar.addEventListener('click',sumarDosNumeros);
    const btnRestar =document.getElementById('restar');
    btnRestar.addEventListener('click',restarDosNumeros);
    const btnMultiplicar =document.getElementById('multiplicar');
    btnMultiplicar.addEventListener('click', miltiplicarDosNumeros);
    const btnDividir =document.getElementById('dividir');
    btnDividir.addEventListener('click', dividirDosNumeros);
    })
  
function
    verificarParImpar() {
    const numero = document.getElementById('numero').value
    const resultado =document.getElementById('resultado')

    if (numero%2 ==0) {
// console.log('El número ' + numero +'es par ');
    resultado.textContent='El número ' +numero +' es par'

    } else {
        resultado.textContent='El número ' +numero +' es impar'
    }
}

function
    sumarDosNumeros() {

    const numero1 =document.getElementById('numero1').value
    const numero2 =document.getElementById('numero2').value
    const resultado1 =document.getElementById('resultado1')
    const suma =parseInt(numero1)+ parseInt(numero2);

    resultado1.textContent='los numeros suman' +suma
}

function
    restarDosNumeros() {
    const numero1 =document.getElementById('numero1').value
    const numero2 =document.getElementById('numero2').value
    const resultado2 =document.getElementById('resultado2')
    const resta =parseInt(numero1)- parseInt(numero2);
    resultado2.textContent='la diferencia de los dos números es'+ resta
}

function
    miltiplicarDosNumeros() {
    const numero1 =document.getElementById('numero1').value
    const numero2 =document.getElementById('numero2').value

    const resultado1 =document.getElementById('resultado1')

    const multiplicar =parseInt(numero1) * parseInt(numero2);

    resultado1.textContent ='el producto de los dos numeros es  '+ multiplicar

}



function
    dividirDosNumeros() {
    const numero1 =document.getElementById('numero1').value

    const numero2 =
            document.getElementById('numero2').value

    const
        resultado1 =
            document.getElementById('resultado1')

    const
        dividir =
            parseInt(numero1)
            / parseInt(numero2);



    resultado1.textContent
        =
        'la division de  los dos numeros es  '
        + dividir

}