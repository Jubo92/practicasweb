function tieneLetra(f){
	for (let i = 0; i < f.pass.value.length; i++){
		if ((f.pass.value.toUpperCase()[i] >= 'A' && f.pass.value.toUpperCase()[i] <= 'Z') || f.pass.value.toUpperCase()[i] == 'Ñ'){
			return true;
		}
	}
}

function tieneNum(f){
	for (let i = 0; i < f.pass.value.length; i++){
		if (!isNaN(f.pass.value[i])){
			return true;
		}
	}
}

function validarUsuarioPass(f){
	let div = document.getElementById("errores");
	if (f.usuario.value == f.pass.value){
		let p = document.createElement("p");
		let mensaje = document.createTextNode("- El usuario y la contraseña no pueden ser iguales.");
		p.appendChild(mensaje);
		div.appendChild(p);
		div.style.border = "1px solid black";
	}
}

function validarUsuario(f){
	let div = document.getElementById("errores");
	if (f.usuario.value.length > 10){
		let p = document.createElement("p");
		let mensaje = document.createTextNode("- El usuario no puede tener más de 10 caracteres.");
		p.appendChild(mensaje);
		div.appendChild(p);
		div.style.border = "1px solid black";		
	}
	for (let i = 0; i < f.usuario.value.length; i++){
		if (((f.usuario.value.toUpperCase()[i] < 'A' || f.usuario.value.toUpperCase()[i] > 'Z') && f.usuario.value.toUpperCase()[i] != 'Ñ') && (isNaN(f.usuario.value[i]))){
			let p = document.createElement("p");
			let mensaje = document.createTextNode("- El usuario sólo puede contener números o letras.");
			p.appendChild(mensaje);
			div.appendChild(p);
			div.style.border = "1px solid black";
		}
	}
}

function validarPass(f){
	let div = document.getElementById("errores");
	if (!tieneLetra(f) || !tieneNum(f)){
		let p = document.createElement("p");
		let mensaje = document.createTextNode("- La contraseña debe contener mínimo una letra y un número.");
		p.appendChild(mensaje);
		div.appendChild(p);
		div.style.border = "1px solid black";
	}
}

function validarPassRep(f){	
	let div = document.getElementById("errores");
	if (f.pass.value != f.pass2.value){
		let p = document.createElement("p");
		let mensaje = document.createTextNode("- Ambas contraseñas han de ser iguales.");
		p.appendChild(mensaje);
		div.appendChild(p);
		div.style.border = "1px solid black";
	}
}

function validarLogin(){
	
	let f = document.login;
	let div = document.getElementById("errores");
	let parrafos = div.children;
	if (parrafos.length != 0){
		for (let i = (parrafos.length - 1); i >= 0; i--){
			div.removeChild(parrafos[i]);
		}
	}
	
	validarUsuarioPass(f);
	validarUsuario(f);
	validarPass(f);
	
	if (parrafos.length != 0){
		return false;
	}
}

function validarRegistro(){
	
	let f = document.registro;
	let div = document.getElementById("errores");
	let parrafos = div.children;
	if (parrafos.length != 0){
		for (let i = (parrafos.length - 1); i >= 0; i--){
			div.removeChild(parrafos[i]);
		}
	}
	
	validarUsuarioPass(f);
	validarUsuario(f);
	validarPass(f);
	validarPassRep(f);
	
	if (parrafos.length != 0){
		return false;
	}
}