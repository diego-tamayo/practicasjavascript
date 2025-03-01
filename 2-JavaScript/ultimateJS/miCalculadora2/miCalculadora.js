document.addEventListener('DOMContentLoaded', () => {
    const btnSumar = document.getElementById('sumar');
    btnSumar.addEventListener('click', sumar);
    const btnRestar = document.getElementById('restar');
    btnRestar.addEventListener('click', restar);
    const btnMultiplicar = document.getElementById('multiplicar');
    btnMultiplicar.addEventListener('click', multiplicar);
    const btnDividir = document.getElementById('dividir');
    btnDividir.addEventListener('click', dividir);
    // const btnCalcular = document.getElementById('calcular');
    // btnCalcular.addEventListener('click',calcular);
})
let opera;

function sumar() {
    opera = '+'
    return calcular();
}

function restar() {
    opera = '-'
    return calcular();
}

function multiplicar() {
    opera = '*'
    return calcular();
}

function dividir() {
    opera = '/'
    return calcular();
}

function calcular() {
    const ope1 = parseFloat(document.getElementById('ope1').value)
    //const opera = document.getElementById('opera').value
    const ope2 = parseFloat(document.getElementById('ope2').value)
    const pResul = document.getElementById('pResul')

    let resul;
    //console.log(opera);

    if ((opera == '+') || (opera == '-') || (opera == '*') || (opera == '/')) {
        switch (opera) {
            case '+':
                resul = ope1 + ope2
                break;
            case '-':
                resul = ope1 - ope2
                break;
            case '*':
                resul = ope1 * ope2
                break;
            default:
                resul = ope1 / ope2
                break;
        }
        console.log(resul);
        pResul.style = 'color: grey'
        pResul.innerText = 'El resultado es igual a ' + resul

    } else {
        pResul.style = 'color: red'
        pResul.innerText = 'Operacion imposible '
        //console.log('Operacion Imposible');
    }

}