const headerNav = document.querySelector (".header_nav");
const toggleMenu = document.querySelector (".toggle_menu");

toggleMenu.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleMenu.classList.toggle("open");   
});