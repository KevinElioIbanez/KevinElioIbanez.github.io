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

toggle.addEventListener("click", () => {
    if(sidebar.className == "sideBar") {
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