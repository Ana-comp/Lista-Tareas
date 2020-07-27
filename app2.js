// Variables
var lista = document.getElementById("lista"),
	tareaInputUrgente = document.getElementById("tareaInput");
	tareaInputDiaria = document.getElementById("tareaInput");
	tareaInputSemanal = document.getElementById("tareaInput");
	btnNuevaTareaUrgente = document.getElementById("btn-agregar-urgente");
	btnNuevaTareaDiaria = document.getElementById("btn-agregar-diaria");
	btnNuevaTareaSemanal = document.getElementById("btn-agregar-semanal");
	tareaInput = document.getElementById("tareaInput");



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

	lista.appendChild(nuevaTareaUrgente);

	tareaInputUrgente.value = "";


	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", function(){
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

	lista.appendChild(nuevaTareaDiaria);

	tareaInputDiaria.value = "";


	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", function(){
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

	lista.appendChild(nuevaTareaSemanal);

	tareaInputSemanal.value = "";


	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", function(){
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


// Borrar Elementos de la lista
for (var i = 0; i <= lista.children.length -1; i++) {
	lista.children[i].addEventListener("click", eleminarTarea);
	// lista.children[i].addEventListener("click", eleminarTareaDiaria);
	// lista.children[i].addEventListener("click", eleminarTareaSemanal);
}


// No puedo poner ni el color ni la fecha

// let lis = document.querySelectorAll('#lista li')
//
// for (li of lis) {
// 	btnNuevaTareaUrgente.addEventListener('click', recogerColor);
// }
//
// function recogerColor(event) {
//
// 	let color = event.target.dataset.color;
//
// 	document.body.style.color = color;
// }

// fecha y hora
// document.getElementById("myBtn").addEventListener("click", displayDate);
//
// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }
