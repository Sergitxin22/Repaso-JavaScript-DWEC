function Post(texto, nick) {
    this.texto = texto;
    this.nick = nick;
    
    this.fecha = new Date();

    this.toString = function() {
        return `${this.nick} (${this.fecha.toLocaleDateString()}:${this.fecha.toLocaleTimeString()} ) : ${this.texto}`;
    }
}

function Usuario(nombre, nick, password) {
    this.nombre = nombre;
    this.nick = nick;
    this.password = password;

    this.post = function(texto){
        return new Post(texto, this.nick);
    }
}


const juan = new Usuario("juan","juanito","juan");
const ana = new Usuario("ana","anita","ana");
const miren = new Usuario("miren","mirentxu","miren");

let nombre = prompt("Usuario");

while (nombre){
    let password = prompt("Password");
    let usuario = null;

    if (juan.nombre === nombre && juan.password === password){
        usuario = juan;
    } else if (ana.nombre === nombre && ana.password === password){
        usuario = ana;
    } 
    
    if (miren.nombre === nombre && miren.password === password){
        usuario = miren;
    }

    if (usuario){
        let mensaje = prompt("Mensaje");
        console.log(""+(usuario.post(mensaje)));
    } else {
        alert("Usuario / password erróneos");
    }

    nombre = prompt("Usuario");
}