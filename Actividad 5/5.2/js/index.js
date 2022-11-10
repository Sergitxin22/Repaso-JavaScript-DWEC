const efect = {
    saldo: 0,
    ingresar: function(cantidad) {
        this.saldo += cantidad;
    },
    gastar: function(cantidad) {
        this.saldo -= cantidad;
    },
    [Symbol.toPrimitive] : function(hint){
        return (hint == "string") ? ` Efectivo: ${this.saldo}€` : this.saldo;
    }
}

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
        return `Efectivo: ${this.saldo}€`;
    }
}

const efectivo = new Efectivo();

efectivo.saldo = +prompt("Saldo Inicial: ");
console.log("Efectivo inicial: " + efectivo.saldo + "€");

let resp = prompt("[I]ngreso o [G]asto").toLowerCase();

while (resp) {
    if(resp !== "i" && resp !== "g") {
        alert("Respuesta incorrecta")
        resp = prompt("[I]ngreso o [G]asto").toLowerCase();
    } else {
        let cant = +prompt("Cantidad");
        switch (resp) {
            case "i":
                efectivo.ingresar(cant);
                console.log(`Ingresados ${cant}€. Efectivo: ${efectivo.saldo}€`);
                break;
            case "g":
                /* En este ejemplo se compara cantidad con efectivo, porque efectivo es un objeto, pero al 
                hacer la comparación lo intenta convertir a un dato primitivo. Dependiendo del contexto se irá
                al valueOf, si es numérico o al toString si es alfanumérico. Sin embargo, en la actividad 1
                la comparación es con efectivo.saldo que es una propiedad del objeto*/

                if (efectivo < cant) {
                    console.log(`No hay saldo para un gasto de ${cant}€`);
                } else {
                    efectivo.gastar(cant);
                    /* en este console.log al ser un contexto de cadena, para visualizar efectivo irá a la 
                    función toString del objeto efectivo*/
                    console.log(`Gastados ${cant}€. ${efectivo}`);
                }                
                break;
        }
    }    
    resp = prompt("[I]ngreso o [G]asto").toLowerCase();
}

console.log(`Efectivo final: ${efectivo.saldo}€`);