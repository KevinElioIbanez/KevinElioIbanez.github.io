/* Menu bars */

const bars = document.getElementById("menu");
const menu = document.getElementById("sidebar");

bars.addEventListener("click", () => {
  menu.classList.add("sidebar--show")
  bars.classList.remove("bx-menu")
  bars.classList.add("bx-x")
})

