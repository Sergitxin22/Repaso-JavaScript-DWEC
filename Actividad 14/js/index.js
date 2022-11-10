let datos = {};
let selectRaza;
let selectSubRaza;

async function cargarDatos(){
    let repuestaRazas = await fetch("https://dog.ceo/api/breeds/list/all");
    let rdo = await repuestaRazas.json();

    selectRaza = document.querySelector("#raza");

    datos = rdo.message;

    // En el for in va obteniendo cada clave y por cada clave va creando un elemento option y lo agrega al selectRaza que es un combo.  Pone el mismo contenido por cada elemento para el texto y el valor para cada option
    for(let raza in datos){
        let opc = document.createElement("OPTION");
        opc.text = raza;
        opc.value = raza;
        selectRaza.appendChild(opc);
    }
    seleccionar(selectRaza);
}

// En este caso el obj es el combo de la raza
async function seleccionar(obj){
    selectSubRaza = document.querySelector("#subRaza");

    // Si el elemento de subrazas tiene algun hijo (options), los va eliminado
    // Limpia las subrazas
    while (selectSubRaza.childElementCount > 0){
        selectSubRaza.removeChild(selectSubRaza.firstChild);
    }

    // Obtengo el nombre de la raza, del combo y cojo las subrazas a través del nombre de la raza
    let nombreRaza = obj.value;

    /* Crea un option para cada subraza y lo agrega al combo de subrazas. En caso de que no haya subrazas es un array vacio y no entraria en el forEach*. 
    En el objeto datos tengo indexadas como claves las razas y como valor de cada clave su subRaza*/

    datos[nombreRaza].forEach( subRaza =>{
        let opc = document.createElement("OPTION");
        opc.text = subRaza;
        opc.value = subRaza;
        selectSubRaza.appendChild(opc);
    });

    // Diferencio si tengo subrazas o no, y llamo a una url de la api u otra.
    let rdo = {};
    console.log(datos[nombreRaza])

    if (datos[nombreRaza].length > 0){
       rdo = await fetch (`https://dog.ceo/api/breed/${selectRaza.value}/${selectSubRaza.value}/images/random/10`);
       rdo = await rdo.json();
    } else {
       rdo = await fetch (`https://dog.ceo/api/breed/${selectRaza.value}/images/random/10`);
       rdo = await rdo.json();
    }

    crearTarjetas(rdo.message);
}

async function mostrarFotos(selectSubRaza) {
    console.log(selectSubRaza.value);

    /* Se llama a una url para coger 10 imagenes y lo transforma a json*/
    let rdo = await fetch (`https://dog.ceo/api/breed/${selectRaza.value}/${selectSubRaza.value}/images/random/10`);
    rdo = await rdo.json();

    crearTarjetas(rdo.message); 
}


function crearTarjetas(imagenes){
    // Cogemos el div de fotos con id = fotos
    let divCard = document.querySelector("#fotos");

    // Eliminamos los hijos del div de fotos, que serían las imagenes
    while (divCard.firstChild) {
        divCard.removeChild(divCard.firstChild);
    }

    // Iteramos las imagenes, y creamos una tarjeta para cada una, con su formato, etc
    /*
    <div class="card">
        <img src="http://urldelaimagen" />
    </div>
    */

    imagenes.forEach(imagen => {
        let divC = document.createElement("DIV");
        divC.className = "card";
        divC.style.width="18rem";

        let img = document.createElement("IMG");

        // El src es el atributo que apunta a la url de la imagen
        img.src = imagen;
        
        divC.appendChild(img);

        divCard.appendChild(divC);
    });
   
}