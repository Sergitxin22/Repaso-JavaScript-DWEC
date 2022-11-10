let numeros = [2, 3, 1, 1, 2, 3, 1, 5, 6];

// 1. Sacar el número de ocurrencias (cuántas veces aparece) cada número en un array, guardando el resultado final en un Map.
let resultado = new Map();

// Usando Map
for (const numero of numeros) {
    if (resultado.has(numero)) {
        // actualizar, sumar una ocurrencia
        resultado.set(numero, resultado.get(numero) + 1);
    } else {
        // es la primera vez que veo el numero en la lista y tengo que meter la clave al map con valor 1.
        resultado.set(numero, 1);
    }
}

console.log(`El resultado usando map es: `);
console.log(resultado);

// Usando objeto o diccionario
let resultado2 = new Map();

for (const numero of numeros) {
    /* En este if si existe la ocurrencia nos dá diferente de undefined*/
    if (resultado2[numero] != undefined) {  // Si no existe la ocurrencia da undefined y se iría al else
        /* Actualiza, sumar una ocurrencia*/
        resultado2[numero] = resultado2[numero] + 1;
    } else {
        // es la primera vez que veo el numero en la lista y tengo que meter la clave al map con valor 1.
        resultado2[numero] = 1;
    }
}

console.log(`El resultado usando objeto o diccionario es: `);
console.log(resultado2);