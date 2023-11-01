"use strict";
const navToggler = document.querySelector(".hamburger"),
	nav = document.querySelector("nav");

let isNavOpen = false;

navToggler.addEventListener("click", () => {
	nav.classList.toggle("open");

	if (nav.classList.contains("open")) {
		console.log("hey");
		navToggler.setAttribute("class", "hamburger fa-solid fa-x");
	} else {
		navToggler.setAttribute("class", "fa-solid fa-bars hamburger");
		console.log("haa");
	}
	// if (!isNavOpen) {
	// 	isNavOpen = true;
	// }
	// else {
	// 	nav.classList.toggle("open");
	// 	isNavOpen = false;
	// }
});
