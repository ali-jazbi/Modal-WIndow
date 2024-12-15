"use strict";
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let openModel = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden-bg");
};
let closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden-bg");
};
document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
document.querySelector(".show-modal").addEventListener("click", openModel);
document.querySelector(".close-modal").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
