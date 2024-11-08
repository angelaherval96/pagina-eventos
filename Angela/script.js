const artistas = document.querySelectorAll(".slider");
let index = 0;


function mostrarArtistas(){
    artistas[index].classList.remove('active');

    index = (index + 1) % artistas.length;
   
    artistas[index].classList.add("active");
}

function ejecutarSlider(){
    setInterval(mostrarArtistas, 3000);
}

ejecutarSlider();

const artista1 = document.querySelectorAll(".artista1");
artista1.addEventListener('mouseover', () => {
    artista1.innerHTML = 'Selena Gomez';

}
);
    


   
