import {Modal} from "./modal.js"
import{AlertError} from "./alert-error.js"
import{notNumber, calcuteIMC} from "./utils.js"
// var

const form= document.querySelector('form')
const inputWeight = document. querySelector('#weight')
const inputHeight = document. querySelector('#height')


form.onsubmit = event => {
    event.preventDefault()

    const weight= inputWeight.value
    const height= inputHeight.value

    const weightOrHightIsNotANumber= notNumber(weight)|| notNumber(height) 

    if(weightOrHightIsNotANumber){
        AlertError.open()
    return;
    }
    
    AlertError.close()

    const result =calcuteIMC(weight, height)
    const message=`seu IMC é de ${result.toFixed(2)}`

    Modal.message.innerText = message
    Modal.open()

}

inputWeight.oninput= () => AlertError.close()
inputHeight.oninput= () => AlertError.close()


