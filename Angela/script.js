const artistas = document.querySelectorAll(".slider");
let index = 0;


function mostrarArtistas(){
    artistas[index].classList.remove('active');

    index = (index + 1) % artistas.length;
   
    artistas[index].classList.add("active");
}

function ejecutarSlider(){
    setInterval(mostrarArtistas, 5000);
}

ejecutarSlider();

const cantantes = document.querySelectorAll(".artista");
cantantes.forEach(cantante => {
    cantante.addEventListener('mouseover', ( )=> {
        const nombre = cantante.getAttribute('data-nombre');

        const nombreCantante = cantante.querySelector('.nombreCantante');
        nombreCantante.textContent = nombre;
    });
    cantante.addEventListener('mouseleave', ( )=> {
    
        const nombreCantante = cantante.querySelector('.nombreCantante');
        nombreCantante.textContent = '';
    });
})


function compraRealizada(idCompra){
    document.getElementById(idCompra).innerHTML = `¡Compra realizada con éxito!`;
    setTimeout(() => {
        document.getElementById(idCompra).innerHTML = '';
    }, 3000);
}

function mostrar() {
    let nav = document.querySelector('#nav');
    nav.classList.toggle("activo");
}

   
