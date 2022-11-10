let direccion = {
    direccion : "Esperanza, 12",
    poblacion : "Bilbao"
}

const juan = {
    nombre : "Juan",
    apellido : "López",
    direccion
}

let copiaJuan = {};
Object.assign(copiaJuan,juan);
copiaJuan.direccion.poblacion = "Barakaldo"
copiaJuan.nombre = "Copia"
console.log(juan);
console.log(copiaJuan)

function copia(destino, origen){
    for(let p in origen){
        if (typeof origen[p] == "object"){
            destino[p] = {}
            copia(destino[p], origen[p])
        } else {
            destino[p] = origen[p]
        }
    }
}

let copiaJuan2 = {};
copia(copiaJuan2, juan);
copiaJuan2.direccion.poblacion = "Madrid"

console.log(juan)
console.log(copiaJuan2)