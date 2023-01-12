/* Menu Mobile */

const menu = document.getElementById("menu");
const sidebar = document.getElementById("sideBar");

menu.addEventListener("click", () => {

    menu.classList.toggle("bx-x");
    sidebar.classList.toggle("sideBar--show");

})

/* Menu Escritorio */

const toggle = document.getElementById("toggle");
const sections = document.querySelectorAll("section");


toggle.addEventListener("click", () => {

    sections.forEach(section => {

        if (sidebar.className == "sideBar") {
            section.classList.add("section--move")
        } else {
            section.classList.remove("section--move")
        }

    })

    if (sidebar.className == "sideBar") {
        sidebar.classList.add("open")
    }
    else {
        sidebar.classList.remove("open")
    }

})


/* Scrolls Sections */

const navItems = document.querySelectorAll('nav .nav-item');
const enlaces = document.querySelectorAll('a');

function handleClick(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const seccion = document.querySelector(href);
    seccion.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
}

navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        this.classList.add('active');
    });
});

enlaces.forEach(enlace => enlace.addEventListener('click', handleClick));


/* Efecto de aparicion de elementos */

const hiddenElement = document.querySelectorAll(".hidden");
const hiddenLateralLeft = document.querySelectorAll(".hiddenLateralLeft");

const sectionShow = new IntersectionObserver(vista => {
    vista.forEach(item => {
        console.log(item);
        if (item.isIntersecting) {
            item.target.classList.add("show")
        } else {
            item.target.classList.remove("show")
        }
    })
})

const sectionLeft = new IntersectionObserver(vista => {
    vista.forEach(item => {
        console.log(item);
        if (item.isIntersecting) {
            item.target.classList.add("show")
        } else {
            item.target.classList.remove("show")
        }
    })
})

hiddenElement.forEach((e) => sectionShow.observe(e))
hiddenLateralLeft.forEach((e) => sectionLeft.observe(e))

/* Cambio de ancho cuando el sidebar se agranda */

const aboutMi = document.querySelector(".about__mi h3"),
      aboutMiP = document.querySelector(".about__mi p"),
      aboutMih4 = document.querySelectorAll(".about__details h4"),
      aboutMiUl = document.querySelector(".datos-intereses ul"),
      aboutMiLi = document.querySelectorAll(".datos-intereses ul li"),
      portfolioAltura = document.querySelector(".portfolio-container")

const observer = new ResizeObserver(() => {

    if (sidebar.offsetWidth <= 360 && sidebar.offsetWidth > 120 && window.innerWidth >= 768 && window.innerWidth < 900 || window.innerWidth >= 1024) {

        aboutMi.classList.add("titulo")
        aboutMiP.classList.add("parrafo")
        aboutMih4.forEach( h4 => {
            h4.classList.add("detalles")
        })
        aboutMiUl.classList.add("intereses")
        aboutMiLi.forEach(li => {
            li.classList.add("interes")
        })
        portfolioAltura.classList.add("portfolio-altura")

    } else {

        aboutMi.classList.remove("titulo");
        aboutMiP.classList.remove("parrafo")
        aboutMih4.forEach( h4 => {
            h4.classList.remove("detalles")
        })
        aboutMiUl.classList.remove("intereses")
        aboutMiLi.forEach(li => {
            li.classList.remove("interes")
        })
        portfolioAltura.classList.remove("portfolio-altura")

    }

    /* if() */

});

observer.observe(sidebar);





