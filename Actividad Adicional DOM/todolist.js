
function agregarElemento(elemento) {
	let listadoUl = document.getElementById("listado");
	listadoUl.appendChild(elemento);
}

function crearElementoTarea(texto) {
	let elementoLi = document.createElement("li");

	let nodoTexto = document.createTextNode(texto);

	let btnMarcarComoCompletada = document.createElement("button");
	btnMarcarComoCompletada.innerText = "Marcar como completada";
	btnMarcarComoCompletada.classList.add("marcar", "margenes");

	let btnEliminar = document.createElement("button");
	btnEliminar.innerText = "Eliminar Tarea";
	/* cada nodo a través de su classList accedemos a su lista de clases. En este caso , agregamos las clases .eliminar y .margenes*/ 
	btnEliminar.classList.add("eliminar", "margenes");

	elementoLi.appendChild(nodoTexto);
	elementoLi.appendChild(btnMarcarComoCompletada);
	elementoLi.appendChild(btnEliminar);

	return elementoLi;
}

function agregarListenersElemento(elementoLi) {
	let btnMarcarCompletado = elementoLi.querySelector(".marcar");
	let btnEliminar = elementoLi.querySelector(".eliminar");
	
	btnMarcarCompletado.addEventListener("click", function() {
		elementoLi.classList = "completado";
		elementoLi.removeChild(btnMarcarCompletado);
	});

	btnEliminar.addEventListener("click", function() {
		let listado = document.getElementById("listado");
		listado.removeChild(elementoLi);
	});
}

function eliminarTodasLasTareas() {
	let listadoUl = document.getElementById("listado");
	let elementosLi = document.querySelectorAll("#listado > li");
	for (const elementoLi of elementosLi) {
		listadoUl.removeChild(elementoLi);
	}
}


/* Listeners principales, (agregar tarea, limpiar, eliminar todas) */
document.getElementById("agregarTareaBtn").addEventListener("click", function() {

	let texto = document.getElementById("cajaTexto").value.trim();
	if (texto.length == 0) {
		alert("Texto vacio...");
	}
	else {
		let elemento = crearElementoTarea(texto);
		agregarElemento(elemento);
		agregarListenersElemento(elemento);
	}
});


document.getElementById("limpiarCajaTextoBtn").addEventListener("click", function() {
	document.getElementById("cajaTexto").value = "";
});


document.getElementById("eliminarTodasBtn").addEventListener("click", eliminarTodasLasTareas);

