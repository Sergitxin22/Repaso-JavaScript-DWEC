let negrita = (texto) => {
    return `<strong>${texto}</strong>`
}

let cursiva = (texto) => {
    return `<em>${texto}</em>`
}

function textoF(texto, param = null) {
    if (param !== null) {
        return `<div>${param(texto)}</div>`
    } else {
        return `<div>${texto}</div>`
    }
}

function comprobar() {
    const texto = document.getElementById("texto").value
    let rdo
    
    if (document.getElementById("negrita").checked) {
        if (document.getElementById("cursiva").checked) {
            rdo = textoF(textoF(texto,negrita), cursiva)
        } else {
            rdo = textoF(texto, negrita)
        }
    } else {
        if (document.getElementById("cursiva").checked){
            rdo = textoF(texto,cursiva)
        } else {
            rdo = textoF(texto)
        }
    }

    document.getElementById("rdo").innerHTML = rdo
}