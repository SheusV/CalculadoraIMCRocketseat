export function notNumber(value){
    return isNaN(value) || value == ""
}

export function calcuteIMC(weight,height){
    return (weight/((height/100)**2))
}
