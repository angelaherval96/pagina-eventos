const slidesFut = document.querySelectorAll(".videosFut");
console.log(slidesFut[3]);
var indexFut = 0;

function siguienteVideoFut() {
    slidesFut[indexFut].classList.remove("active");
    indexFut = (indexFut + 1) % slidesFut.length;
    slidesFut[indexFut].classList.add("active");
}

function previoVideoFut() {
    slidesFut[indexFut].classList.remove("active");
    indexFut = (indexFut + 2) % slidesFut.length;
    slidesFut[indexFut].classList.add("active");
}

const slidesBask = document.querySelectorAll(".videosBask");
console.log(slidesBask[3]);
var indexBask = 0;

function siguienteVideoBask() {
    slidesBask[indexBask].classList.remove("active");
    indexBask = (indexBask + 1) % slidesBask.length;
    slidesBask[indexBask].classList.add("active");
}

function previoVideoBask() {
    slidesBask[indexBask].classList.remove("active");
    indexBask = (indexBask + 2) % slidesBask.length;
    slidesBask[indexBask].classList.add("active");
}

const slidesF1 = document.querySelectorAll(".videosF1");
console.log(slidesF1[3]);
var indexF1 = 0;

function siguienteVideoF1() {
    slidesF1[indexF1].classList.remove("active");
    indexF1 = (indexF1 + 1) % slidesF1.length;
    slidesF1[indexF1].classList.add("active");
}

function previoVideoF1() {
    slidesF1[indexF1].classList.remove("active");
    indexF1 = (indexF1 + 2) % slidesF1.length;
    slidesF1[indexF1].classList.add("active");
}

function mostrar() {
    let nav = document.querySelector('#nav');
    nav.classList.toggle("activo");
}