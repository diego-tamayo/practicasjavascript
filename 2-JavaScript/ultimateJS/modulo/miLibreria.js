import {saludo} from './miLibreria2.js'

export function sumar(a,b) {
    
    let  rtdo = a + b;
    return rtdo
}

export function dividir(a,b) {
    
    let  rtdo = a / b;
    return rtdo
}

export function dividir1 (a,b,c){
    let rtdoSuma = sumar (a,b)
    let rtdo = rtdoSuma/c
    return rtdo
}

export function potencia (x,y) {
    let rtdo = Math.pow(x,y)
    return rtdo;
}

export function aleatorioCrudo() {
   // console.log('El número aleatorio es '+Math.random());
    return Math.random();
    
}
let num = Math.random();
export function aleatorioCocinado() {
    console.log('El número aleatorio cocinado capturado '+num);
    console.log('El número aleatorio cocinado redondeado '+ Math.floor((num)*100));
   // console.log('El número aleatorio cocinado es '+Math.floor(Math.random()*100));
    
}
export function alearioCocinadoUno(){
    let c = aleatorioCrudo()
    console.log('\n el número aleatorio crudo es: '+ c);
    
    console.log("El número aleatorio crudo, ahora cocinado es " + Math.floor((c)*100));
    
}

export function obtenerRamdon(num) {

    return Math.floor(Math.random() * num);
  }

 export function ramdomMinyMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
 

  // Expected output: 0, 1 or 2

// console.log(sumar(3500,345));
// let paco =sumar(3500,345)

// console.log(dividir(paco/5));
// console.log(" aqui dividir invocada con tres parametros "+dividir1(3500,345,5));


// module.exports = {sumar, dividir, dividir1};