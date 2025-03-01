const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

buttons.forEach((btn) => {

    btn.addEventListener('click', () => {

        if (btn.id === '=') {
            display.value = eval(display.value);

        } else if (btn.id === 'ac') {
            display.value = ' '
        } else if (btn.id === 'de') {
            display.value = display.value.slice(0,-1)
        } else if(display.value == '0' || display.value =='00') {
            display.value =btn.id

        }else {
            display.value +=btn.id
        }
    })

})