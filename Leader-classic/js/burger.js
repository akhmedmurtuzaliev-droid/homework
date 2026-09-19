const burgerBtn = document.querySelector(".burger__btn");
const menu = document.querySelector("#nav__menu");
const burgerIcon = document.querySelector(".burger__icon");
const crossIcon = document.querySelector(".burger__icon-close");
const page = document.querySelector(".page");
const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll("#nav__menu a");

const BREAKPOINT = 992;

let isOpen = false;

function toggleMenu() {
	isOpen = !isOpen;

	burgerIcon.style.display = isOpen ? "none" : "";
	crossIcon.style.display = isOpen ? "block" : "none";

	menu.classList.toggle("nav__menu--open", isOpen);
	page.classList.toggle("page-body--no-scroll", isOpen);
	header.classList.toggle("header--menu-open", isOpen);

	burgerBtn.setAttribute("aria-expanded", isOpen);
	burgerBtn.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
}

function closeMenu() {
	if (!isOpen) return;
	isOpen = false;

	burgerIcon.style.display = "";
	crossIcon.style.display = "none";

	menu.classList.remove("nav__menu--open");
	page.classList.remove("page-body--no-scroll");
	header.classList.remove("header--menu-open");

	burgerBtn.setAttribute("aria-expanded", false);
	burgerBtn.setAttribute("aria-label", "Открыть меню");
}

burgerBtn.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
	link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
	if (!isOpen) return;
	const clickedInsideMenu = e.target.closest("#nav__menu");
	const clickedBurger = e.target.closest(".burger__btn");
	if (!clickedInsideMenu && !clickedBurger) {
		closeMenu();
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth > BREAKPOINT) {
		closeMenu();
	}
});
