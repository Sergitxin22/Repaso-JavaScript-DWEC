function Efectivo() {
    this.saldo = 0;
    
    this.ingresar = function(cantidad) {
        this.saldo += cantidad;
    }

    this.gastar = function(cantidad) {
        this.saldo -= cantidad;
    }
    
    this.valueOf = function(){
        return this.saldo;
    }

    this.toString = function(){
        return `Saldo: ${this.saldo}€`;
    }
}

let efectivo = new Efectivo();

function ingresar(cantidad){
    document.getElementById("error").innerHTML = "";
    efectivo.ingresar(parseFloat(cantidad));
    document.getElementById("saldo").innerHTML = efectivo;
}

function gastar(){
    let cant = parseFloat(document.getElementById("cant").value);
    document.getElementById("error").innerHTML = "";
    if (cant > efectivo){
        document.getElementById("error").innerHTML = `<div class='alert alert-danger'>No tiene suficiente saldo</div>`;
    } else {
        efectivo.gastar(cant);
        document.getElementById("saldo").innerHTML = efectivo;
    }
}