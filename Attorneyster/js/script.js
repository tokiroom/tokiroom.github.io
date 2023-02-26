// Navbar Start
const navbar = document.getElementById("navbar");
const navbarToggler = document.getElementById("toggler_btn");
const navbarLinks = document.querySelectorAll(".nav__link");

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
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

const maxWidthContaent = window.screen.availWidth;
let options = {
  threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animate-elem');

if (maxWidthContaent > 768.98) {
  for (let elm of elements) {
    observer.observe(elm);
  }
} else {
  for (let elm of elements) {
    elm.classList.add('element-show');
  }
}

// -----------------------------------------------------------
