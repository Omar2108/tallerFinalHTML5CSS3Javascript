const cambiar = () => {
    
    let cambio = document.getElementById("cambio").value;
    document.body.style.backgroundColor = cambio;

}

const mostrar = () => {
    var ocultar = document.getElementById("ocultar");
    ocultar.style.display = "block";  
}

const ocultar = () => {
    const ocultar = document.getElementById("ocultar");
    ocultar.style.display = "none";

}
