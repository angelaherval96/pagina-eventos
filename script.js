const slider = document.querySelectorAll('.slider');
let index = 0;

function mostrarSlider(){
    slider[index].classList.remove('active');

    index = (index + 1) % slider.length;
   
    slider[index].classList.add("active");

   
}

function ejecutarSlider(){
    setInterval(mostrarSlider, 3000);
}

ejecutarSlider();


// Responsive Nav

function mostrar() {
    let nav = document.querySelector('#nav');
    nav.classList.toggle("activo");
}