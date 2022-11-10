let res = parseInt(prompt('Valor'))
let resultado = "0x"
let convertido = ""
let inputCorrecto = false;

while(!inputCorrecto) {
    if (isNaN(res) || typeof res !== 'number') {
        alert("Número erróneo")
        res = parseInt(prompt('Valor'))
    } else {
        inputCorrecto = true;

        if (typeof res === 'number') {
            let cociente =  res
            let resto = 0;
        
            while (cociente > 15) {
                resto = parseInt(cociente % 16)
                cociente = parseInt(cociente / 16)
        
                switch (resto) {
                    case 10:
                        convertido += "A"
                        break;
        
                    case 11:
                        convertido += "B"
                        break;
        
                    case 12:
                        convertido += "C"
                        break;
        
                    case 13:
                        convertido += "D"
                        break;
        
                    case 14:
                        convertido += "E"
                        break;
        
                    case 15:
                        convertido += "F"
                        break;
                
                    default:
                        convertido += resto
                        break;
                }
            }

            convertido += cociente
            resultado += convertido.split("").reverse().join("")
        }        
        alert("Resultado: " + resultado)
    }  
}
