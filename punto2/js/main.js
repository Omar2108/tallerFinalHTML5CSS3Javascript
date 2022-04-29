const cambiarColor = ()=>{

	const par1 = document.getElementById("par");
	const impar1 = document.getElementById("impar");

	const par2 = document.getElementById("par2");
	const impar2 = document.getElementById("impar2");

	const par3 = document.getElementById("par3");
	const impar3 = document.getElementById("impar3");

	const par4 = document.getElementById("par4");
	const impar4 = document.getElementById("impar4");

	const par5 = document.getElementById("par5");
	const impar5 = document.getElementById("impar5");
		
		if (par1.classList.contains("par")  && impar.classList.contains("impar")) {
			par1.classList.replace("par","impar");
			impar1.classList.replace("impar","par")

			par2.classList.replace("par","impar");
			impar2.classList.replace("impar","par");

			par3.classList.replace("par","impar");
			impar3.classList.replace("impar","par");

			par4.classList.replace("par","impar");
			impar4.classList.replace("impar","par");

			par5.classList.replace("par","impar");
			impar5.classList.replace("impar","par");

			
		} else {
			par1.classList.replace("impar","par");
			impar1.classList.replace("par","impar");

			par2.classList.replace("impar","par");
			impar2.classList.replace("par","impar");

			par3.classList.replace("impar","par");
			impar3.classList.replace("par","impar");

			par4.classList.replace("impar","par");
			impar4.classList.replace("par","impar");

			par5.classList.replace("impar","par");
			impar5.classList.replace("par","impar");
			
		}
}



