let mayor = prompt("Ingresa tu Edad");

if(mayor >=18){
    alert("Acceso Permitido al sitio por mayoria de edad")
} else {
    alert("Entras bajo tu propio riesgo")
}

console.log(mayor)

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
});