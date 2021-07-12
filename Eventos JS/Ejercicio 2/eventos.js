function generar(){
	let cabecera = document.createElement("h1");
	let contenido = document.createTextNode("SLAVA STALIN");
	cabecera.appendChild(contenido);
	document.body.appendChild(cabecera);
	cabecera.addEventListener("click",generar);
	cabecera.addEventListener("auxclick",borrar);
}
function borrar(){
	this.parentNode.removeChild(this);
}

window.onload = function(){
		generar();
}