const slides = document.querySelectorAll(".videos");
console.log(slides[3]);
var index = 0;

function siguienteVideo() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function previoVideo() {
    slides[index].classList.remove("active");
    index = (index + 2) % slides.length;
    slides[index].classList.add("active");
}