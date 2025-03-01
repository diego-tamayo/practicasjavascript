document.addEventListener('DOMContentLoaded',()=>{
    const btnCalcular = document.getElementById('calcular');
    btnCalcular.addEventListener('click',calcular);
})

function calcular() {
    const ope1 = parseFloat(document.getElementById('ope1').value)
    const opera = document.getElementById('opera').value
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
        pResul.style ='color: grey'
        pResul.innerText = 'El resultado es igual a ' + resul
        
    } else {
        pResul.style ='color: red'
        pResul.innerText = 'Operacion imposible '
        //console.log('Operacion Imposible');
    }

}