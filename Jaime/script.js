
const parrafoOculto1 = document.getElementById("parrafoOculto1");
const parrafoOculto2 = document.getElementById("parrafoOculto2");
const parrafoOculto3 = document.getElementById("parrafoOculto3");
const parrafoOculto4 = document.getElementById("parrafoOculto4");
const modal = document.getElementById("modal");
const cerrar = document.getElementByClassName("cerrar");


function inscrito1() {

    parrafoOculto1.style.display = "block";

}

function inscrito2() {

    parrafoOculto2.style.display = "block";

}

function inscrito3() {

    parrafoOculto3.style.display = "block";

}


function inscrito4() {

    alert('Las entradas para este evento estan agotadas')

}

function mostrarModal() {
modal.style.display="block";

}

function cerrarModal() {

    modal.style.display="none";
}


// Nick

function mostrar() {
    let nav = document.querySelector('#nav');
    nav.classList.toggle("activo");
}
