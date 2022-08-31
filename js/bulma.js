/* Hamburger menu code */
const burgerIco = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

burgerIco.addEventListener("click", () => {
	navbarMenu.classList.toggle("is-active");
	burgerIco.classList.toggle("is-active");
});

/* Hamburger menu code END */

/* Form modal code */
const addcatBtn = document.querySelector("#addcat-btn");
const modalBg = document.querySelector(".modal-background");
const xCat = document.querySelector("#x-cat");
const cancelCat = document.querySelector("#cancel-cat");
const modal = document.querySelector(".modal");

addcatBtn.addEventListener("click", () => {
	modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
	modal.classList.remove("is-active");
});

xCat.addEventListener("click", () => {
	modal.classList.remove("is-active");
});

cancelCat.addEventListener("click", () => {
	modal.classList.remove("is-active");
});

/* Form modal code end */
