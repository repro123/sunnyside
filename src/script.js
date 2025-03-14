"use strict";

const toggleNavBtn = document.querySelector("#toggleNav");
const triangle = document.querySelector(".triangle");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector("#primaryNav");
const body = document.querySelector("body");
const navlinks = document.querySelectorAll(".navlinks");

toggleNavBtn.addEventListener("click", function () {
  const isExpanded = toggleNavBtn.getAttribute("aria-expanded") === "true";

  toggleNavBtn.setAttribute("aria-expanded", !isExpanded);
  body.classList.toggle("overflow-hidden");
});

function closeNav() {
  toggleNavBtn.setAttribute("aria-expanded", "false");
}

overlay.addEventListener("click", closeNav);

for (let link of navlinks) {
  link.addEventListener("click", closeNav);
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 768) closeNav();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeNav();
});
