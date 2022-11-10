let juan = {
    nombre: "Juan",
    curso: "DAW2",
    edad: 20
}

let ana = new Object()
ana.nombre = "Ana"
ana["curso"] = "DAW2"
ana.edad = 23

for (let p in juan) {
    console.log(p + `: ${juan[p]}`)    
}

if(juan.edad > ana.edad) {
    console.log("Juan es el mayor")
} else if (juan["edad"] < ana["edad"]) {
    console.log("Ana es la mayor")
} else {
    console.log("Ana y Juan tienen la misma edad")
}

let nota1 = {
    asignatura : "DWEC",
    nota : 8
}

juan.dwec = nota1
juan.dwes = {
    asignatura : "DWES",
    nota : 8
}

let asignatura = "DWES";
let nota = 8;

ana.dwes = {
    asignatura,
    nota
}

ana.dwec = new Object();
ana.dwec.asignatura = "DWEC";
ana.dwec.nota = 8;

asignatura = "EIE";
nota = 8;
ana.eie = {
    asignatura,
    nota
}

const mediaJuan = (juan.dwec.nota + juan.dwes.nota) / 2;
const mediaAna = (ana.dwec.nota + ana.dwes.nota + ana.eie.nota) / 3;
console.log(`${mediaJuan==mediaAna?"Tienen la misma media":(mediaAna>mediaJuan?"Ana":"Juan") + " tiene mejor nota media"}`)

delete juan.edad;

function mostrarAlumno(alumno){
    for(let p in alumno){
        if (typeof alumno[p] == "object"){
            console.log(`${p}`);
            for (let prop in alumno[p]){
                console.log(`${prop} : ${alumno[p][prop]}`);    
            }
            mostrarAlumno(alumno[p]);
        } else {
            console.log(`${p} : ${alumno[p]}`);
        }
    }
}
console.log("----- Juan -----");
mostrarAlumno(juan)

console.log("----- Ana -----");
mostrarAlumno(ana)