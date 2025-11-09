const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.getElementById("goToForm").addEventListener("click", function(event) {
  event.preventDefault();
  const seccion = document.querySelector(".Form-Section");
  seccion.scrollIntoView({ behavior: "smooth" });
});