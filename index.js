const hamburger = document.querySelector('.hamburgers');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav');
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
}
