/* Menu de navegacion */

document.querySelector(".navegador__menu").addEventListener("click", animacionMenu);

let linea1 = document.querySelector(".line1__bars-menu");
let linea2 = document.querySelector(".line2__bars-menu");
let linea3 = document.querySelector(".line3__bars-menu");
let menu__nav = document.querySelector(".navegador__nav");

function animacionMenu(){
    linea1.classList.toggle("activeline1__bars-menu");
    linea2.classList.toggle("activeline2__bars-menu");
    linea3.classList.toggle("activeline3__bars-menu");
    menu__nav.classList.toggle("active__nav")
}