// Navbar Start
const navbar = document.getElementById("navbar");
const navbarToggler = document.getElementById("toggler_btn");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", openBar);
navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function openBar() {
  navbar.classList.toggle("open");
}

function navbarLinkClick() {
  if(navbar.classList.contains("open")) {
    navbarToggler.click();
  }
}
// -----------------------------------------------------------
// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
// -----------------------------------------------------------