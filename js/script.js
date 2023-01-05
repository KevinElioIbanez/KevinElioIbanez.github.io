/* Menu Mobile */

const menu = document.getElementById("menu");
const sidebar = document.getElementById("sideBar");

menu.addEventListener("click", () => {

    menu.classList.toggle("bx-x");
    sidebar.classList.toggle("sideBar--show");

})

/* Menu Escritorio */

const navItems = document.querySelectorAll("nav .nav-item")
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

navItems.forEach(item => {
    item.addEventListener("click", () => {

        navItems.forEach(navItems => {
            navItems.classList.remove("active")
        })

        item.classList.add("active")

    })
})

/* Scrolls Sections */

const enlaces = document.querySelectorAll('a');

enlaces.forEach(enlace => {

  enlace.addEventListener('click', function(e) {

    e.preventDefault();
    const href = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      selector: enlace
    });

  });

});

/* Efecto de aparicion de elementos */

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

const hiddenElement = document.querySelectorAll(".hidden")

hiddenElement.forEach((e) => sectionShow.observe(e))
