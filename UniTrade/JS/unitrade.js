
function toggleComments(id) {
  const elem = document.getElementById(id);
  elem.style.display = elem.style.display === "block" ? "none" : "block";
}

function likeFunction(button) {
  button.style.fontWeight = "bold";
  button.innerHTML = "✓ Liked";
}

function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ====================
// Carrusel automático
// ====================
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-carousel .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Cambia cada 5 segundos, SI DESEAN CAMBIAR EL TIEMPO, MODIFIQUEN EL 5000 (5 SEGUNDOS)//
setInterval(nextSlide, 3000);

// Muestra la primera slide al cargar
showSlide(currentSlide);