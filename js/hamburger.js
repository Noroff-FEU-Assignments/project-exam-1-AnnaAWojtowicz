const openMenu = document.querySelector("#menu_container");
const menuList = document.querySelector("#menu");
const closeMenu = document.querySelector("#close");


function toggleMenu() {
    if (openMenu.style.display === "block") {
        openMenu.style.display = "none";
    } else {
        openMenu.style.display = "block";
    }
}


menuList.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);