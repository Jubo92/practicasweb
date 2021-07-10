'use strict';

let numParr = +prompt("¿Cuántos párrafos quieres escribir?");

if (isNaN(numParr))
	alert("Error, el campo solicitado debía ser un número.");
else
	for (let i=0; i<numParr;i++)
	{
		let parr = prompt("¿Qué quieres escribir en el párrafo " + (i + 1) + "?");
		document.write("<p>" + parr + "</p>");
	}