// API KEY de OpenWeather
const OPENWEATHER_API_KEY = '2305cd81ad9127e93f21187a6e7f479b';

// Coordenadas bilbao
const bilbao = {
    latitud: 43.26271,
    longitud: -2.92528
}

// Url donde pediremos los datos a openweather api
const urlDatos = `https://api.openweathermap.org/data/2.5/forecast?lat=${bilbao.latitud}&lon=${bilbao.longitud}&exclude=current,minutely,hourly&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`;

// Recuperamos los datos con el async/await
async function recuperarDatos() {
    // Recuperamos los datos (devuelve una response)
    const resp = await fetch(urlDatos);
    // Transformamos los datos a json para devolverlos
    return resp.json();
}

// function que le pasamos los datos y se encarga de pintar el nombre de la ciudad, e ir creando capas para cada prediccion de fecha y hora
function pintarDatos(data) {
    const elementoNombreCiudad = document.getElementById("nombreCiudad");
    elementoNombreCiudad.innerText = data.city.name;

    const elementoListaPredicciones = document.getElementById("predicciones");
    
    // a cada elemento de la lista se le ha llamado record
    for (const record of data.list) {
        const elmentoPrediccion = document.createElement("div");

        // Le ponemos como clase tarjeta-prediccion para que coja los estilos que se han indicado
        elmentoPrediccion.className = "tarjeta-prediccion";

        const elementoTextoFechaHora = document.createElement("h4");
        elementoTextoFechaHora.innerText = `Fecha/Hora: ${record.dt_txt}`;

        const elementoDescripcion = document.createElement("h5");
        elementoDescripcion.innerText = record.weather[0].description;

        const elementoImagen = document.createElement("img");

        // La url la obtenemos con el icon. Ejemplo: podemos ir al navegador y probar la url https://openweathermap.org/img/wn/04n@2x.png   
        elementoImagen.src = `https://openweathermap.org/img/wn/${record.weather[0].icon}@2x.png`;
        
        const elementoGrados = document.createElement("h4");
        elementoGrados.innerText = `Grados: ${record.main.temp} ºC`;

        const elementoHumedad = document.createElement("h4");
        elementoHumedad.innerText = `Humedad: ${record.main.humidity} %`;

        elmentoPrediccion.appendChild(elementoTextoFechaHora);
        elmentoPrediccion.appendChild(elementoDescripcion);
        elmentoPrediccion.appendChild(elementoImagen);
        elmentoPrediccion.appendChild(elementoGrados);
        elmentoPrediccion.appendChild(elementoHumedad);

        elementoListaPredicciones.appendChild(elmentoPrediccion);
    }
}

// Cogemos los datos de recuperar datos con .then (porque estamos en el hilo principal y "await" solo se puede usar dentro de async functions)
recuperarDatos()
    .then(
        datos => pintarDatos(datos)
    )
    .catch(
        error => document.write(`Se ha producido un error ${error}`)
    )