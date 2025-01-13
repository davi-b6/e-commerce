const navbar = document.querySelector(".navbar");
const menuButtom = document.querySelector(".menu-button");

menuButtom.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});