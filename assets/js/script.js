"use strict";

const __navbar__ = document.querySelector("[data-nav]");
const __navToggle__ = document.querySelector("[data-nav-toggle]");

__navToggle__.addEventListener("click", () => {
    __navToggle__.classList.add("click")
    __navbar__.classList.toggle("active");
})

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
    header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
})