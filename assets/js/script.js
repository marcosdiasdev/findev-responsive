let hamburger = document.querySelector('.hamburger ion-icon')
let nav = document.querySelector('.top-container nav')

hamburger.addEventListener('click', function() {
  nav.classList.toggle('show-nav');
})