class Persona {
    constructor(nombre, apellido1, apellido2, edad) {
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get apellido1() {
        return this._apellido1;
    }

    set apellido1(nuevoApellido1) {
        this._apellido1 = nuevoApellido1;
    }

    get apellido2() {
        return this._apellido2;
    }

    set apellido2(nuevoApellido2) {
        this._apellido2 = nuevoApellido2;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }
};

class Alumno extends Persona {
    constructor(nombre, apellido1, apellido2, edad, numeroCreditosMatriculados) {
        // llamar al constructor padre
        super(nombre, apellido1, apellido2, edad);
        this._numeroCreditosMatriculados = numeroCreditosMatriculados;
    }

    get numeroCreditosMatriculados() {
        return this._numeroCreditosMatriculados;
    }

    set numeroCreditosMatriculados(nuevoNumeroCreditosMatriculados) {
        this._numeroCreditosMatriculados = nuevoNumeroCreditosMatriculados;
    }  
};

class Profesor extends Persona {
    constructor(nombre, apellido1, apellido2, edad, numeroAsignaturasImpartidas) {
        super(nombre, apellido1, apellido2, edad);
        this._numeroAsignaturasImpartidas = numeroAsignaturasImpartidas;
    }

    get numeroAsignaturasImpartidas() {
        return this._numeroAsignaturasImpartidas;
    }

    set numeroAsignaturasImpartidas(nuevoNumeroAsignaturasImpartidas) {
        this._numeroAsignaturasImpartidas = nuevoNumeroAsignaturasImpartidas;
    }  
};

 // Ejemplos usando lo que hemos hecho.
 let persona1 = new Persona("juan", "garcia", "lopez", 33);

 document.write("persona1 recien creada");
 document.write("<br>");
 document.write(persona1.nombre);
 document.write("<br>");
 document.write(persona1.apellido1);
 document.write("<br>");
 document.write(persona1.apellido2);
 document.write("<br>");
 document.write(persona1.edad);
 document.write("<br>");
 document.write("<br>");
 
 persona1.nombre = "diego";
 persona1.apellido1 = "martin";
 persona1.apellido2 = "martinez";
 persona1.edad = 26;

 document.write("persona1 despues de usar setter (modificar)");
 document.write("<br>");
 document.write(persona1.nombre);
 document.write("<br>");
 document.write(persona1.apellido1);
 document.write("<br>");
 document.write(persona1.apellido2);
 document.write("<br>");
 document.write(persona1.edad);
 document.write("<br>");
 document.write("<br>");

 let alumno1 = new Alumno("david", "mora", "fernandez", 22, 60);

 document.write("alumno1 recien creado");
 document.write("<br>");
 document.write(alumno1.nombre);
 document.write("<br>");
 document.write(alumno1.apellido1);
 document.write("<br>");
 document.write(alumno1.apellido2);
 document.write("<br>");
 document.write(alumno1.edad);
 document.write("<br>");
 document.write(alumno1.numeroCreditosMatriculados);
 document.write("<br>");
 document.write("<br>");

 alumno1.nombre = "diego2";
 alumno1.apellido1 = "martin2";
 alumno1.apellido2 = "martinez2";
 alumno1.edad = 28;
 alumno1.numeroCreditosMatriculados = 120;

 document.write("alumno1 despues de usar setter (modificar)");
 document.write("<br>");
 document.write(alumno1.nombre);
 document.write("<br>");
 document.write(alumno1.apellido1);
 document.write("<br>");
 document.write(alumno1.apellido2);
 document.write("<br>");
 document.write(alumno1.edad);
 document.write("<br>");
 document.write(alumno1.numeroCreditosMatriculados);
 document.write("<br>");
 document.write("<br>");

 let profesor1 = new Profesor("cristina", "garcia", "fernandez", 27, 3);

 document.write("profesor1 recien creado");
 document.write("<br>");
 document.write(profesor1.nombre);
 document.write("<br>");
 document.write(profesor1.apellido1);
 document.write("<br>");
 document.write(profesor1.apellido2);
 document.write("<br>");
 document.write(profesor1.edad);
 document.write("<br>");
 document.write(profesor1.numeroAsignaturasImpartidas);
 document.write("<br>");
 document.write("<br>");

 profesor1.nombre = "ana";
 profesor1.apellido1 = "fernandez";
 profesor1.apellido2 = "lopez";
 profesor1.edad = 29;
 profesor1.numeroAsignaturasImpartidas = 5;

 document.write("profesor1 despues de usar setter (modificar)");
 document.write("<br>");
 document.write(profesor1.nombre);
 document.write("<br>");
 document.write(profesor1.apellido1);
 document.write("<br>");
 document.write(profesor1.apellido2);
 document.write("<br>");
 document.write(profesor1.edad);
 document.write("<br>");
 document.write(profesor1.numeroAsignaturasImpartidas);
 document.write("<br>");
 document.write("<br>");