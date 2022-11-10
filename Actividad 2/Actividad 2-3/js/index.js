let opciones = "1. 0020 — 007F  Basic Latin\n2. 20A0 — 20CF  Currency Symbols\n3. 2190 — 21FF  Arrows\n4. 2200 — 22FF  Mathematical Operators\n5. 2600 — 26FF  Miscellaneous Symbols\n6. 2700 — 27BF  Dingbats"
let input = +prompt(opciones)
let n1, n2;

switch (input) {
    case 1:
        n1 = "0020"
        n2 = "007F"
        break;
    case 2:
        n1 = "20A0"
        n2 = "20CF"
        break;
    case 3:
        n1 = "2190"
        n2 = "21FF"
        break;
    case 4:
        n1 = "2200"
        n2 = "22FF"
        break;
    case 5:
        n1 = "2600"
        n2 = "26FF"
        break;
    case 6:
        n1 = "2700"
        n2 = "27BF"
        break;
    default:
        alert("Opción Incorrecta");
        break;
}

const nP1 = parseInt(n1, 16);
const nP2 = parseInt(n2, 16);

document.writeln("<table class='table'>")
document.write("<tr>")

let cont = 1;

for(let i=nP1; i<=nP2; i++) {
    document.write("<td>" + String.fromCharCode(i) + "\n" + i + "</td>")
    if (cont % 15 == 0){
        document.write("</tr><tr>");
    }
    cont++
}

document.writeln("</tr></table>");