document.addEventListener('DOMContentLoaded', () => {
  const btnPulsar = document.getElementById('pulsar');
  btnPulsar.addEventListener('click', ramdomMinyMax)
})

function ramdomMinyMax() {

  const min = document.getElementById('minimo').value
  const max = document.getElementById('maximo').value
  const resultado=document.getElementById('resultado')

  const respuesta = Math.floor(Math.random() * (max - min) + min);

  resultado.textContent = `El número aleatorio entre ${min} y ${max} es: ${respuesta}`

}