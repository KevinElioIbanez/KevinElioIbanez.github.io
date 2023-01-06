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
  item.addEventListener('click', function() {
    navItems.forEach(navItem => navItem.classList.remove('active'));
    this.classList.add('active');
  });
});

enlaces.forEach(enlace => enlace.addEventListener('click', handleClick));


/* Efecto de aparicion de elementos */

const hiddenElement = document.querySelectorAll(".hidden")

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


hiddenElement.forEach((e) => sectionShow.observe(e))
