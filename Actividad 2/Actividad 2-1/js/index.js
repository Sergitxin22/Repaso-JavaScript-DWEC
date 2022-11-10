let num1 = Math.trunc(Math.random() * 10) + 1
let num2 = Math.trunc(Math.random() * 10) + 1
let operador = Math.trunc(Math.random() * 3) + 1

let signo = ""
let solucion = 0;

let message = ""
let oportunidades = 3

switch (operador) {
    case 1:
        signo = "+"
        solucion = num1 + num2        
        break;

    case 2:
        signo = "-"
        solucion = num1 - num2
        break;

    case 3:
        signo = "*"
        solucion = num1 * num2
        break;
}

let res = parseInt(prompt(`${num1}${signo}${num2}?`))

for (let index = 1; index < oportunidades; index++) {
    if (res === solucion) {
        message = "OK"
        break;
    } else {
        message = "NOK"
        res = parseInt(prompt(`${num1} ${signo} ${num2} - Te quedan ${oportunidades - index} oportunidades`))
    }
    
}

alert(message)