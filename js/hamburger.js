const openMenu = document.querySelector("#menu_container");
const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close");


function toggleMenu() {
    if (openMenu.style.display === "block") {
        openMenu.style.display = "none";
    } else {
        openMenu.style.display = "block";
    }
}


menu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);