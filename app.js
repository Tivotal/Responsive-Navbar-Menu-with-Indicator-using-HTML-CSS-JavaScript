/* Created by Tivotal */

let links = document.querySelectorAll(".menu li");
let indicator = document.querySelector(".indicator");
let menuBtn = document.querySelector(".btns");
let header = document.querySelector(".header");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    header.classList.toggle("nav-open");

    link.classList.add("active");

    indicator.style.left = `${index * 20}%`;
  });
});

menuBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
