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
	document.write("<ul>");
	for (let i=1; i <= nums[1]; i++)
	{
		document.write("<li>" + nums[0] + "x" + i + "=" + (nums[0] * i) + "</li>");
	}
	document.write("</u>");
}

if (modo == "TABLA")
{
	document.write("<table>");
	for (let i=1; i <= nums[1]; i++)
	{
		document.write("<tr><td>" + nums[0] + "x" + i + "</td><td>=</td><td>" + (nums[0] * i) +"</td></tr>");
	}
	document.write("</table>");
}