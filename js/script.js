const menu = document.getElementById("menu");
const sidebar = document.getElementById("sideBar");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    sidebar.classList.toggle("sideBar--show");
})