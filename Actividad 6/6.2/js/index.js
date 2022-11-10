const dia = +prompt("Introduce un día: ");
const mes = +prompt("Introduce un mes: ");
const año = +prompt("Introduce un año: ");

console.log("Fecha introducida: " + dia + "/" + mes + "/" + año);

/* Estos if de validación inicialmente en el programa se le llama clausula de Guarda https://www.marindelafuente.com.ar/que-son-las-clausulas-de-guarda 
    Los return se ponen para cortar el flujo del programa. Tambien se puede lanzar el error con un throw */

if (dia < 1 || dia > 31) {
    throw new Error("Día inválido");
}

/* la validación del año se ha puesto de 1985 al 2050*/
if (año < 1985 || año > 2050) {
    throw new Error("Año inválido");
}

if (mes < 1 || mes > 12) {
    throw new Error("Mes inválido");
}

// 1. Mostrar la fecha en castellano. Probar con fechas no válidas y con valores negativos

/* Los meses van del 0 al 11, por eso se resta 1 */
let fecha = new Date(año, mes - 1, dia);
console.log("Fecha en castellano: " + fecha.toLocaleDateString());

// 2. Mostrar qué fecha será transcurridos 15 días laborales (incluyendo sábados)

/* DIA_MS son los milisegundos que tiene un día */
const DIA_MS = 24 * 3600 * 1000;

let copiaFecha = new Date();

// Sumar 15 días laborales -> (Dia no laborable == Domingo -> fecha.getDay() == 0)
for (let i = 0; i < 15; i++) {
    /* Le va sumando cada dia hasta 15 laborables(no tiene en cuenta domingo en milisegundos) */
    copiaFecha.setTime(copiaFecha.getTime() + DIA_MS);

    /* si el día es domingo que es el 0 , le sumo un dia más porque no le considera laborable*/
    if (copiaFecha.getDay() == 0) {
      copiaFecha.setTime(copiaFecha.getTime() + DIA_MS);
    }
  }

console.log("Fecha 15 días laborales después: " + copiaFecha.toLocaleDateString());

// 3. Indicar qué día de la semana cae (en texto)
function diaSem(fecha) {
    let dia;

    switch (fecha.getDay()) {
      case 0:
        dia = "Domingo";
        break;
      case 1:
        dia = "Lunes";
        break;
      case 2:
        dia = "Martes";
        break;
      case 3:
        dia = "Miércoles";
        break;
      case 4:
        dia = "Jueves";
        break;
      case 5:
        dia = "Viernes";
        break;
      case 6:
        dia = "Sábado";
        break;
    }

    return dia;
}

console.log(`El día ${fecha.toLocaleDateString()} es ${diaSem(fecha)}`);

// 4. Indicar si el año de la fecha es bisiesto
const añoFecha = fecha.getFullYear();

if ((añoFecha % 4 == 0 && añoFecha % 100 != 0 ) || añoFecha % 400 == 0) {
    console.log("El año " + añoFecha + " es bisiesto");
} else {
    console.log("El año " + añoFecha + " no es bisiesto");
}

// 5. Mostrar cuándo será el próximo domingo
let fecha2 = new Date();
fecha2.setTime(fecha.getTime());

while (fecha2.getDay() != 0) {
    fecha2.setTime(fecha2.getTime() + DIA_MS);
}

console.log("El proximo domingo es el " + fecha2.toLocaleDateString());

// 6. Mostrar la fecha correspondiente al primer día del mes
fecha2.setDate(1);

console.log("El primer día del mes es el " + fecha2.toLocaleDateString());

// 7. Indicar cuántos días quedan hasta vuestro cumpleaños
let nacimiento = new Date(2003, 5, 20);
let cumpleanos;
let hoy = new Date();

/* Este if comprueba si no ha cumplido años el año vigente y el else indica que ha cumplido años este año*/
if (nacimiento.getMonth() > hoy.getMonth() || (nacimiento.getMonth() == hoy.getMonth() && nacimiento.getDate() > hoy.getDate())) {
    cumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
} else {
    cumpleanos = new Date(hoy.getFullYear() + 1, nacimiento.getMonth(), nacimiento.getDate());
}

console.log("Cumples años el " + cumpleanos.toLocaleDateString());
console.log("Hoy es " + hoy.toLocaleDateString());

let tiempoMsg = cumpleanos.getTime() - hoy.getTime();
let dias = parseInt(tiempoMsg / DIA_MS);

console.log(`Quedan ${dias} días para tu cumpleaños`);

// 8. Indicar cuántos años han pasado / quedan / desde la fecha introducida hasta la fecha de hoy (asumimos 365 días)
/* comprueba si faltan años. Es decir, el usuario ha introducido una fecha anterior a la de 
      hoy o han pasado años. Por eso se utiliza Math.abs, por si dá negativo*/
tiempoMsg = fecha.getTime() - hoy.getTime();
let años = parseInt(tiempoMsg / (365 * DIA_MS));

console.log((años > 0 ? "Faltan " : "Han pasado ") + Math.abs(años) + " años");

// 9. Indicar en qué día cae Navidad ese año
let navidad = new Date(hoy.getFullYear(), 11, 25);

console.log(`Este año Navidad cae en ${diaSem(navidad)}`);

// 10. Pedir al usuario una fecha en formato dd/mm/yyyy y convertirla a una fecha. Si el año introducido es inferior a 100 se le sumará 2000 años
let strFecha = prompt("Fecha (dd/mm/aaaa)");

let barra1 = strFecha.indexOf("/");

//let barra2 = strFecha.indexOf("/", barra1+1);
let barra2 = strFecha.lastIndexOf("/");

/* al poner el + por delante de la cadena lo transforma a entero*/
let d = +strFecha.substring(0, barra1);
let m = +strFecha.substring(barra1 + 1, barra2);
let a = +strFecha.substring(barra2 + 1);

// en el caso de que el año introducido sea <100 le suma 2000
if (a < 100) {
a += 2000;
}

let otraFecha = new Date(a, m - 1, d);
console.log(otraFecha);