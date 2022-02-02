//For a Floating Sticky Navbar
const navbar = document.querySelector(".navbar-wrapper")
const stick = navbar.offsetTop

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= stick) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
})
//End of sticky Navbar
