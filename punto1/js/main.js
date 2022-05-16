const main = () => {


	let enviar = document.getElementById("enviar");
	enviar.addEventListener("click", () => {
		let nombre = document.getElementById("nombre").value;
		let email = document.getElementById("email").value;
		let asunto = document.getElementById("asunto").value;
		let mensaje = document.getElementById("mensaje").value;

		if (nombre === "" ) {
			alert("¡Este campo es obligatorio!");
		} else if(email === ""){
			alert("¡Este campo es obligatorio!");
		} else if(asunto === ""){
			alert("¡Este campo es obligatorio!");

		} else if(mensaje === ""){
            alert("¡Este campo es obligatorio!");
		}else{
			console.log("Mensaje Enviado");
			console.log("DATOS ENVIADOS");
			console.log("Nombre de quien escribe el mensaje: " + nombre);
			console.log("Correo de quien escribe el mensaje: " + email);
			console.log("Asunto del mensaje: " + asunto);
	    	console.log("Mensaje: " + mensaje);

		}

	});

	let reset = document.getElementById("reset");
	reset.addEventListener("click", () => {

		let nombre = document.getElementById("nombre");
		let email = document.getElementById("email");
		let asunto = document.getElementById("asunto");
		let mensaje = document.getElementById("mensaje");

		nombre.reset;
		email.reset;
		asunto.reset;
		mensaje.reset;
	
	});

}