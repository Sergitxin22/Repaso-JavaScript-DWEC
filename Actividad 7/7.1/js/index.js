// 1. Generar un array de numeros del 1 al 50
let numeros = [];

for (let index = 0; index < 50; index++) {
    numeros.push(index + 1);    
}

console.log("Números 1-50: " + numeros);

// 2. Obtener un array que nos devuelva en cada posición el doble de su valor en dicha posición (usar map)
const dobles = numeros.map(n => n = n*2);
console.log("Números dobles 1-50: " + dobles);

// 3. Obtener un array solo con los números pares (usar filter)
const pares = numeros.filter(n => n%2 == 0);
console.log("Números pares 1-50: " + pares);

// 4. Obtener el mismo array pero ordenado de mayor a menor (no vale usar .reverse, aplicar usando sort)
const decrecientes = Array.from(numeros);

// Opción 1 (usando función flecha)
decrecientes.sort( (n1, n2) => (n2 - n1));

// Opción 2 (usando función normal)
/*
decrecientes.sort(function (n1, n2) {
    if (n1 < n2) {
        return 1;
    }
    else if (n1 > n2) {
        return -1;
    }
    else return 0;
});*/

console.log("Números 50-1: " + decrecientes);

// 5. Obtener el total de sumar todos los números del array

// Opción 1 (usando función normal)
const suma = function(acumulador, valor) {
    return acumulador + valor;
};

const total1 = numeros.reduce(suma, 0);

// Opción 2 (usando función flecha)
const total2 = numeros.reduce((p,e) => p + e);

console.log("Resultado suma de todos los números 1-50 (método 1): " + total1);
console.log("Resultado suma de todos los números 1-50 (método 2): " + total2);