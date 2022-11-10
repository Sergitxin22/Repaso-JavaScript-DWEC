let numeros = [1,2,3,1,5,4,6,2,3];

// Dado un array de números repetidos, convertirlo a un Set(un set no contiene repetidos).

// Método 1 -> constructor + iterable -> let nombreVariable = new Set(elemento tipo iterable);
let numerosUnicos1 = new Set(numeros);
console.log("Números no repetidos en declaración: ");
console.log(numerosUnicos1);

// Método 2 -> constructor + luego añadir el elemento uno a uno -> let nombreVariable = new Set(); -> nombreVariable.add(elemento) | aunque metas dos veces el mismo valor solo se almacenará una ves, ya que es un Set
let numerosUnicos2 = new Set();

numeros.forEach(n => {
    numerosUnicos2.add(n);
});

console.log("Primero se crea el Set y luego se añaden los números de uno en uno, da igual que añadas uno repetido ya que al ser un Set solo lo almacenará una vez: ");
console.log(numerosUnicos2);