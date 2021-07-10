'use strict';

let nums = new Array(2);

do{
	nums[0] = +prompt("Introduzca un número del 1 al 10.");
	if (isNaN(nums[0]) || nums[0] < 1 || nums[0] > 10)
		alert("Error, no ha introducido un número del 1 al 10.");
} while((isNaN(nums[0]) || nums[0] < 1 || nums[0] > 10));

do{
	nums[1] = +prompt("Introduzca otro número del 1 al 10.");
	if (isNaN(nums[1]) || nums[1] < 1 || nums[1] > 10)
		alert("Error, no ha introducido un número del 1 al 10.");
} while((isNaN(nums[1]) || nums[1] < 1 || nums[1] > 10));

nums.sort();

let modo = "";

do{
	modo = prompt("Introduzca TABLA si quiere verlo en una tabla o LISTA si prefiere verlo en una lista.").toUpperCase();
	if (modo != "TABLA" && modo != "LISTA")
		alert("Error, no ha seleccionado ninguna de las opciones posibles.");
} while((modo != "TABLA" && modo != "LISTA"));

if (modo == "LISTA")
{
	let listades = document.createElement("ul");
	listades.id = "idLista";
	for (let i = 1; i <= nums[1]; i++)
	{
		let listaelem = document.createElement("li");
		let lista = document.createTextNode(nums[0] + "x" + i + "=" + (nums[0] * i));
		listaelem.appendChild(lista);
		listaelem.style.listStyleType = "circle";
		listades.appendChild(listaelem);
		if (i%2 == 1)
			listaelem.style.backgroundColor = "red";
		else
			listaelem.style.backgroundColor = "cyan";
	}
	document.body.appendChild(listades);
}

if (modo == "TABLA")
{
	let tabla = document.createElement("table");
	for (let i = 1; i <= nums[1]; i++)
	{
		let fila = document.createElement("tr");
		let celda1 = document.createElement("td");
		let contenido = document.createTextNode(nums[0] + "x" + i);
		celda1.appendChild(contenido);
		celda1.style.border = "1px solid black";
		let celda2 = document.createElement("td");
		contenido = document.createTextNode("=");
		celda2.appendChild(contenido);
		celda2.style.border = "1px solid black";
		let celda3 = document.createElement("td");
		contenido = document.createTextNode((nums[0] * i));
		celda3.appendChild(contenido);
		celda3.style.border = "1px solid black";
		fila.appendChild(celda1);
		fila.appendChild(celda2);
		fila.appendChild(celda3);
		tabla.appendChild(fila);
		tabla.style.borderCollapse = "collapse";
		if (i%2 == 1)
			fila.style.backgroundColor = "pink";
		else
			fila.style.backgroundColor = "orange";
	}
	document.body.appendChild(tabla);
}