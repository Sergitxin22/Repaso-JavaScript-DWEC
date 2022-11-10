/* Tenemos la función persona que recibe 6 parámetros y se los asigna a variables "privadas" */
function Persona(nombre, apellido1, apellido2, edad, altura, peso) {
    this._nombre = nombre;
    this._apellido1 = apellido1;
    this._apellido2 = apellido2;
    this._edad = edad;
    this._altura = altura;
    this._peso = peso;
}

// Definimos una propiedad nombre sobre el prototipo de persona y para esa propiedad definimos un getter y un setter
/*
let p = new Persona("n1", "a1", "a2", 18, 178, 80);
// Recuperamos el nombre
p.nombre
// Seteamos el nombre
p.nombre = "Nom1";

Esto, si no definimos getters y setters y la variable nombre no existe (existe _nombre)
al recuperarla da undefined y al setearla, nos crea una variable nueva nombre dentro del objeto p
*/
Object.defineProperty(Persona.prototype, "nombre", {
    get() {
        return this._nombre;
    },
    set(value) {
        this._nombre = value;
    },
});

/*
let persona = new Persona("n1", "a1", "a2", 18, 178, 80);
// Recuperamos el nombre
persona.nombre
// Seteamos el nombre
persona.nombre = "Nom1";

Esto, como ya hemos definido getters y setters sobre una propiedad nombre
al recuperarla nos devuelve lo que tenga _nombre, y al setearla se lo establece a _nombre
*/

Object.defineProperty(Persona.prototype, "apellido1", {
    get() {
        return this._apellido1;
    },
    set(value) {
        this._apellido1 = value;
    },
});

Object.defineProperty(Persona.prototype, "apellido2", {
    get() {
        return this._apellido2;
    },
    set(value) {
        this._apellido2 = value;
    },
});

Object.defineProperty(Persona.prototype, "edad", {
    get() {
        return this._edad;
    },
    set(value) {
        this._edad = value;
    },
});

Object.defineProperty(Persona.prototype, "altura", {
    get() {
        return this._altura;
    },
    set(value) {
        this._altura = value;
    },
});

Object.defineProperty(Persona.prototype, "peso", {
    get() {
        return this._peso;
    },
    set(value) {
        this._peso = value;
    },
});

Object.defineProperty(Persona.prototype, "nombreCompleto", {
    // estamos usando los getter y setter de nombre, apellido1 y apellido2
    // si se usa las variables directamente (_variable) funcionaría.
    get() {
        return `${this.nombre} ${this.apellido1} ${this.apellido2}`;
    },
    set(value) {
        /* esto sería un ejemplo de  desestructuración*/
        /* en ingles currying (currificacion o desestructuración) */
        [this.nombre, this.apellido1, this.apellido2] = value.split(" ");
    },
});

// Ejemplo 1
let p = new Persona("Jose", "Garcia", "Lopez", 32, 178, 81);

document.write("Imprimimos los atributos de persona después de crearla");
document.write("<br>");
document.write(p.nombre);
document.write("<br>");
document.write(p.apellido1);
document.write("<br>");
document.write(p.apellido2);
document.write("<br>");
document.write(p.edad);
document.write("<br>");
document.write(p.altura);
document.write("<br>");
document.write(p.peso);
document.write("<br>");
document.write(p.nombreCompleto);
document.write("<br>");
document.write("<br>");

// Ejemplo 2
p.nombre = "David";
p.apellido1 = "Martin";
p.apellido2 = "Perez";
p.edad = 25;
p.altura = 183;
p.peso = 77;


document.write("Imprimimos los atributos de persona después de usar los setters para asignación");
document.write("<br>");
document.write(p.nombre);
document.write("<br>");
document.write(p.apellido1);
document.write("<br>");
document.write(p.apellido2);
document.write("<br>");
document.write(p.edad);
document.write("<br>");
document.write(p.altura);
document.write("<br>");
document.write(p.peso);
document.write("<br>");
document.write(p.nombreCompleto);
document.write("<br>");
document.write("<br>");

// Ejemplo 3
document.write("Imprimimos los atributos de persona después de asignar nombre completo");
document.write("<br>");

p.nombreCompleto = "Ana Garcia Martin";

document.write(p.nombreCompleto);
document.write("<br>");
document.write(p.nombre);
document.write("<br>");
document.write(p.apellido1);
document.write("<br>");
document.write(p.apellido2);
document.write("<br>");