
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});
