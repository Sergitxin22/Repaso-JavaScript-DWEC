// Duplicar el ejercicio anterior y modificar la clase persona para que no se pueda instanciar(crear objetos de tipo persona, lo que en Java conocemos como clase abstracta)

// Estamos haciendo como en Java conoceis clase abstracta. Es decir crear una clase persona que no se pueda instanciar, pero si se puedan crear alumnos y profesores
class Persona {
    constructor(nombre, apellido1, apellido2, edad) {
        /* vemos si estamos intentando construir una persona, en ese caso lanzamos un error.
        En el caso de que este constructor sea llamado desde la clase Alumno o Profesor usando super, este this.constructor no será persona  y se lo saltará*/

        if (this.constructor === Persona) {
            throw new TypeError("No se puede crear personas");
        }

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

    set numeroAsignaturasImpartidas(numeroAsignaturasImpartidas) {
        this._numeroAsignaturasImpartidas = numeroAsignaturasImpartidas;
    }  
};


// Ejemplos usando lo que hemos hecho.
let alumno1 = new Alumno("david", "mora", "fernandez", 22, 60);
let profesor1 = new Profesor("cristina", "garcia", "fernandez", 27, 3);

console.log(alumno1.nombre);
console.log(profesor1.nombre);

let persona1 = new Persona("juan", "garcia", "lopez", 33);
// OJO! Aqui falla porque al construir la persona estamos lanzando un error a proposito
// verificar abriendo la consola, que nos da un TypeError (el que estamos lanzando);
/*El error lo incluimos al final para que se puedan ver alumno y profesor creados, ya que
si lo pongo antes se iría por el throw, lanzaría el error y no seguiría el programa*/