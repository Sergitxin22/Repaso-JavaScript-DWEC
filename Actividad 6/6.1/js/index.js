function invertida(cadena) {
    return cadena.split("").reverse().join("");
}

function primera(cadena) {
    return cadena.split(" ")[0];
}

function ultima(cadena) {
    return cadena.split(" ").reverse()[0];
}

function versales(cadena) {
    let palabras = cadena.split(" ");    
    let palabrasFormateadas = [];
    
    palabras.forEach(i => {
        let letras = i.split("");
        letras[0] = letras[0].toUpperCase();
        i = letras.join("");
        palabrasFormateadas.push(i);
    });
    
    return palabrasFormateadas.join(" ");
}

function quitarAcentos(cadena) {
    let letras = cadena.split("");
    letrasFormateadas = [];
    
    const acentos = "áÁéÉíÍóÓúÚ";
    const vocales = "aAeEiIoOuU";
    
    letras.forEach(i => {
        let pos = acentos.indexOf(i);
        
        if (pos !== -1) {
            i = vocales.substring(pos,pos+1);
        }
        
        letrasFormateadas.push(i);
    });
    
    return letrasFormateadas.join("");
}

let cadena = prompt("Texto");

console.log("Invertida: " + invertida(cadena));
console.log("Primera: " + primera(cadena));
console.log("Última: " + ultima(cadena));
console.log("Versales: " + versales(cadena));
console.log("Quitar Acentos: " + quitarAcentos(cadena));