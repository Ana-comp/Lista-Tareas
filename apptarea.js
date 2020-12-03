var listaUrgente = document.getElementById("listaUrgente"),
	tareaInputUrgente = document.getElementById("tareaInput");
	btnNuevaTareaUrgente = document.getElementById("btn-agregar-urgente");


var listaDiaria = document.getElementById("listaDiaria"),
	tareaInputDiaria = document.getElementById("tareaInput");
	btnNuevaTareaDiaria = document.getElementById("btn-agregar-diaria");


var lista = document.getElementById("listaSemanal"),
	tareaInputSemanal = document.getElementById("tareaInput");
	btnNuevaTareaSemanal = document.getElementById("btn-agregar-semanal");




// Funcion Tarea Urgente
var agregarTareaUrgente = function(){
	var tareaUrgente = tareaInputUrgente.value,
		nuevaTareaUrgente = document.createElement("li"),
		enlaceUrgente = document.createElement("a"),
		contenidoUrgente = document.createTextNode(tareaUrgente);

	if (tareaUrgente === "") {
		tareaInputUrgente.setAttribute("placeholder", "Agrega una tarea valida");
		tareaInputUrgente.className = "error";
		return false;
	}


	enlaceUrgente.appendChild(contenidoUrgente);

	enlaceUrgente.setAttribute("href", "#",);

	nuevaTareaUrgente.appendChild(enlaceUrgente);

	listaUrgente.appendChild(nuevaTareaUrgente);

	tareaInputUrgente.value = "";


	for (var i = 0; i <= listaUrgente.children.length -1; i++) {
		listaUrgente.children[i].addEventListener("click", function(){
			this.parentNode.removeChild(this);
		});
	}

}


// Funcion Tarea Diaria
var agregarTareaDiaria = function(){
	var tareaDiaria = tareaInputDiaria.value,
		nuevaTareaDiaria = document.createElement("li"),
		enlaceDiaria = document.createElement("a"),
		contenidoDiaria = document.createTextNode(tareaDiaria);

	if (tareaDiaria === "") {
		tareaInputDiaria.setAttribute("placeholder", "Agrega una tarea valida");
		tareaInputDiaria.className = "error";
		return false;
	}


	enlaceDiaria.appendChild(contenidoDiaria);

	enlaceDiaria.setAttribute("href", "#");

	nuevaTareaDiaria.appendChild(enlaceDiaria);

	listaDiaria.appendChild(nuevaTareaDiaria);

	tareaInputDiaria.value = "";


	for (var i = 0; i <= listaDiaria.children.length -1; i++) {
		listaDiaria.children[i].addEventListener("click", function(){
			this.parentNode.removeChild(this);
		});
	}
};


// Funcion Tarea Semanal
var agregarTareaSemanal = function(){
	var tareaSemanal = tareaInputSemanal.value,
		nuevaTareaSemanal = document.createElement("li"),
		enlaceSemanal = document.createElement("a"),
		contenidoSemanal = document.createTextNode(tareaSemanal);

	if (tareaSemanal === "") {
		tareaInputSemanal.setAttribute("placeholder", "Agrega una tarea valida");
		tareaInputSemanal.className = "error";
		return false;
	}


	enlaceSemanal.appendChild(contenidoSemanal);

	enlaceSemanal.setAttribute("href", "#");

	nuevaTareaSemanal.appendChild(enlaceSemanal);

	listaSemanal.appendChild(nuevaTareaSemanal);

	tareaInputSemanal.value = "";


	for (var i = 0; i <= listaSemanal.children.length -1; i++) {
		listaSemanal.children[i].addEventListener("click", function(){
			this.parentNode.removeChild(this);
		});
	}

};

var comprobarInputUrgente = function(){
	tareaInputUrgente.className = "";
	teareaInputUrgente.setAttribute("placeholder", "Agrega tu tarea");
}

var comprobarInputDiaria = function(){
	tareaInputDiaria.className = "";
	teareaInputDiaria.setAttribute("placeholder", "Agrega tu tarea");
}

var comprobarInputSemanal = function(){
	tareaInputSemanal.className = "";
	teareaInputSemanal.setAttribute("placeholder", "Agrega tu tarea");
};

//Eventos

btnNuevaTareaUrgente.addEventListener("click", agregarTareaUrgente);
btnNuevaTareaDiaria.addEventListener("click", agregarTareaDiaria);
btnNuevaTareaSemanal.addEventListener("click", agregarTareaSemanal);


tareaInputUrgente.addEventListener("click", comprobarInputUrgente);
tareaInputDiaria.addEventListener("click", comprobarInputDiaria);
tareaInputSemanal.addEventListener("click", comprobarInputSemanal);


for (var i = 0; i <= lista.children.length -1; i++) {
	lista.children[i].addEventListener("click", eleminarTarea);

