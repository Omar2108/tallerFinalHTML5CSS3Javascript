const main = ()=>{
	

	let enviar = document.getElementById("enviar");
	enviar.addEventListener("click", ()=>{
		let nombre = document.getElementById("nombre").value;
		let email = document.getElementById("email").value;
		let asunto = document.getElementById("asunto").value;
		let mensaje = document.getElementById("mensaje").value;

		console.log("Mensaje Enviado");
		console.log("DATOS ENVIADOS");
		console.log("Nombre de quien escribe el mensaje: "+nombre);
		console.log("Correo de quien escribe el mensaje: "+email);
		console.log("Asunto del mensaje: "+asunto);
		console.log("Mensaje: "+mensaje);


	});
}