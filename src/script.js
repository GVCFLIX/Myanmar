const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mk-nav-menu");
const navLink = document.querySelectorAll(".mk-nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


$(document).ready(function () {
    $('#example').DataTable();
});
