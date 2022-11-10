const efect = {
    saldo: 0,
    ingresar: function(cantidad) {
        this.saldo += cantidad;
    },
    gastar: function(cantidad) {
        this.saldo -= cantidad;
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
}

/* Alternativa con el objeto sería */
// const efectivo = efect;

/* Alternativa con la función constructora */
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
                if (efectivo.saldo < cant) {
                    console.log(`No hay saldo para un gasto de ${cant}€`);
                } else {
                    efectivo.gastar(cant);
                    console.log(`Gastados ${cant}€. Efectivo: ${efectivo.saldo}€`);
                }
                
                break;
        }
    }    
    resp = prompt("[I]ngreso o [G]asto").toLowerCase();
}

console.log(`Efectivo final: ${efectivo.saldo}€`);