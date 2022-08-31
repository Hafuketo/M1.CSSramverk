const burgerIco = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

burgerIco.addEventListener("click", () => {
	navbarMenu.classList.toggle("is-active");
	burgerIco.classList.toggle("is-active");
});
