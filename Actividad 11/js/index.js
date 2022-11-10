let monumentos = [   
    {titulo:"El Edificio del Ayuntamiento", texto:"De pie al lado del bonito estuario, en la zona del Casco Viejo, el Ayuntamiento de Bilbao es un gran ayuntamiento, que data de la dÃ©cada de 1890. Con una gran fachada de estilo barroco y muchas caracterÃ­sticas impresionantes, el interior es igualmente suntuoso y contiene una escalera imponente y una lujosa decoraciÃ³n. Por las maÃ±anas se pueden realizar visitas guiadas al edificio.",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bilbao_-_Ayuntamiento_24.jpg/375px-Bilbao_-_Ayuntamiento_24.jpg"},
    {titulo:"Puente Colgante", texto:"Catalogado como un sitio importante del patrimonio de la ciudad, el Puente de Vizcaya se encuentra en las afueras de Bilbao y es un gran puente de hierro con una plataforma mecÃ¡nica en movimiento que transporta personas y vehÃ­culos a travÃ©s del rÃ­o.  Construido a finales del siglo XIX, el puente conecta las zonas de Getxo y Portugalete y cuenta con magnÃ­ficas vistas desde los ascensores y visitas guiadas.",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Zubia_jun.jpg/405px-Zubia_jun.jpg"},
    {titulo:"Palacio de ChÃ¡varri", texto:"Es la sede oficial del Gobierno Civil de Vizcaya (conocido localmente como el Gobierno Civil de Vizcaya). Este importante edificio combina una serie de estilos y elementos arquitectÃ³nicos increibles. Inaugurado en 1890, el palacio fue construido originalmente para Bilbao por el empresario VÃ­ctor ChÃ¡varri y es uno de los hitos mÃ¡s destacados alrededor de la Plaza Moyua, con techos de doble pendiente, balcones y ventanas en todas las formas y tamaÃ±os.",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Txabarri_jauregia%2C_Bilbo._Euskal_Herria.jpg/450px-Txabarri_jauregia%2C_Bilbo._Euskal_Herria.jpg"},
    {titulo:"El Palacio de Ibaigane", texto:"Famoso por ser el hogar del Club AtlÃ©tico de Bilbao, una sociedad fundada en el aÃ±o 1900, el Palacio de Ibaigane estÃ¡ cerca de la Plaza Circular. Originalmente la gran residencia de RamÃ³n de la Sota, un empresario vasco local, el palacio contiene muchos elementos de Ã©poca y una gran sala de trofeos.",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Palacio_de_Ibaigane.jpg/375px-Palacio_de_Ibaigane.jpg"},
    {titulo:"La Catedral de Santiago", texto:"Uno de los lugares mÃ¡s antiguos del Casco Viejo de Bilbao, la catedral de Santiago se remonta al siglo XVI y cuenta con una arquitectura de estilo gÃ³tico, con muchas de sus caracterÃ­sticas sobresalientes. Instalada en la Plaza de Santiago, la Catedral ofrece misas durante toda la semana, con un interior espacioso muy histÃ³rico.",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bilbao_-_Catedral_de_Santiago_51.JPG/405px-Bilbao_-_Catedral_de_Santiago_51.JPG"},
];

// Función para recuperar un elemento único del DOM
const $ = (args) => {
    return document.querySelector(args);
}

// Función para recuperar varios elementos del DOM
const $$ = (args) => {
    return document.querySelectorAll(args);
}

const divCards = $("#cards");

let id=0;
monumentos.forEach(monumento => {
    divCards.innerHTML += `
        <div class="card mb-5">
        <img src="${monumento.foto}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${monumento.titulo}</h5>
        <p class="card-text">${monumento.texto.substring(0, 100)}...</p>
        <a id="id${id++}" href="#">Más</a>
        </div>
    </div>
    `
});

const divAllCards = $$(".card");

divAllCards.forEach(div => {
    div.addEventListener("mouseenter", entrar);
    div.addEventListener("mouseleave", salir);
});

function entrar(){
    /* En este caso this hace referencia al elemento html, sobre el cual se ha producido el evento original. El this sería el div sobre el cual
    se ejecuta la función entrar*/

    /* Al entrar le agrega la clase scaled(esta es nuestra) y shadow-lg(de bootstrap)*/
    this.classList.add("scaled");
    this.classList.add("shadow-lg");
}

function salir(){
     /* Al salir se le quita la clase  scaled(esta es nuestra) y shadow-lg(de bootstrap)*/
    this.classList.remove("scaled");
    this.classList.remove("shadow-lg");
}

const divAllA = $$("a");

divAllA.forEach(div => {
    div.addEventListener("click", actualizaTexto);
});

function actualizaTexto(){
    /* En este caso el this es el elemento a, el enlace que hemos hecho click, pero coge de su padre 
    que es card-body y busca el elemento con clase card-text dentro de él, que es el que necesitamos*/
    const divTexto = this.parentElement.querySelector(".card-text")

    // cogemos el id del enlace presionado (tendrá un formato tipo cadena del estilo id0, id1, id2, id3)
    const id = this.id;

    // sacamos de esa palabra, solo el numero, lo hacemos usando substring(Por eso ponemos "id".length)
    const indice = Number.parseInt(id.substring("id".length));

    // cogemos el texto completo buscandolo por el indice
    const textoCompleto = monumentos[indice].texto;

    if (this.innerText === "Más") {
        divTexto.innerText = textoCompleto;
        this.innerText = "Menos";
    } else {
        divTexto.innerText = textoCompleto.substring(0,100) + "...";
        this.innerText = "Más";
    }
}