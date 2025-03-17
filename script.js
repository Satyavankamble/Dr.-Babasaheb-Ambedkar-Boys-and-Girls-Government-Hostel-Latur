function toggleMenu() {
  var nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

function closeMenu() {
  var nav = document.getElementById("navLinks");
  nav.classList.remove("show");
}

// Gallery

function openLightbox(imageSrc, captionText) {
  document.getElementById('lightbox-img').src = imageSrc;
  document.getElementById('lightbox-caption').textContent = captionText;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

//Imporant Link


function openLink(link) {
  window.open(link, '_blank');
}