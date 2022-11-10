let num1
let num2
let operador

let signo = ""
let solucion = 0;

let message = ""
let oportunidades = 3

let captcha = function() {
    num1 = Math.trunc(Math.random() * 10) + 1
    num2 = Math.trunc(Math.random() * 10) + 1
    operador = Math.trunc(Math.random() * 3) + 1

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

    document.getElementById("op1").innerText = num1;
    document.getElementById("oper").innerHTML = signo;
    document.getElementById("op2").innerHTML = num2;
}

captcha();

function comprobar() {
    respuesta = parseInt(document.getElementById("rdo").value);
    console.log(respuesta);

    if (respuesta === solucion) {
        document.getElementById("enviar").disabled = false        
        document.getElementById("captcha").innerHTML = ""        
    } else {
        document.getElementById("enviar").disabled = true
        document.getElementById("rdo").value = "";
        captcha();
    }
}

let validar = (usuario, password) => {
    let user = "Sergio"
    let contraseña = "12345"

    if (usuario === user && password === contraseña) {
        alert(`Bienvenido ${usuario}`)
        document.getElementById("principal").innerHTML = `<h1>Bienvenido, ${usuario}</h1>`

    } else {
        document.getElementById("captcha").innerHTML = "<div class='alert alert-danger'>Usuario / Contraseña incorrectos</div>"  

    }
    
}

