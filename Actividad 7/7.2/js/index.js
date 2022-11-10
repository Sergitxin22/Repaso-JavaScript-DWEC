const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Antonio", edad: 45 },
    { nombre: "Jose", edad: 15 },
    { nombre: "Diego", edad: 27 },
    { nombre: "Ana", edad: 18 },
    { nombre: "Maria", edad: 19 }
];

// 1. Obtener un array con los nombres de las personas (usar map)
const nombres = personas.map(p => p.nombre);
console.log("Nombres: " + nombres);

// 2. Obtener las personas mayores de edad (usar filter)
const mayoresDeEdad = personas.filter(p => p.edad >= 18);

console.log("Personas mayores de edad: ");
mayoresDeEdad.forEach(p => {
    console.log(p.nombre);
});

// 3. Ordenar utilizando sort las personas por edad en orden creciente
personas.sort((e1, e2) => e1.edad - e2.edad);

console.log("Personas ordenadas por edad: ");
personas.forEach(p => {
    console.log(p);
});

// 4. Utilizando Map o Reduce, devolver el array de personas con la misma estructura, poniendo el nombre en mayúsculas, a los mayores de 18 años
// Opción 1 (usando función map)
const transformadosUsandoMap = personas.map( p => {
    let objetoTransformado;
    
    if (p.edad > 18) {
        objetoTransformado = { nombre: p.nombre.toUpperCase(), edad: p.edad };
    } else {  
        objetoTransformado = p;
    }

    return objetoTransformado;
});

console.log("Personas ordenadas mayores de 18 años nombre en mayúscula (con map): ");
transformadosUsandoMap.forEach(p => {
    console.log(p);
});

// Opción 2 (usando función reduce) (Sintaxis método reduce -> objeto.reduce((acumulador, objetoActual) => {lógica; return valor;}, *valorPorDefecto) | * => opcional
const transformadosUsandoReduce = personas.reduce((p, valorActual) => {
    let elemento;

    if (valorActual.edad > 18) {
        elemento = { nombre: valorActual.nombre.toUpperCase(), edad: valorActual.edad };
    } else {
        elemento = valorActual;
    }

    p.push(elemento);
    return p;
}, []);

console.log("Personas ordenadas mayores de 18 años nombre en mayúscula (con reduce): ");
transformadosUsandoReduce.forEach(p => {
    console.log(p);
});