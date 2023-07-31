const menuicon = document.getElementById('menu');
const navlinks = document.getElementById('nav-links');
const desktop = document.querySelector('.desktop');
const menuclose = document.getElementById('menu-close');

function menuOverlay() {
  if (menuicon.style.display === 'flex') {
    menuicon.style.display = 'none';
  } else {
    menuicon.style.display = 'none';
    menuclose.style.display = 'block';
    navlinks.style.display = 'flex';
  }
}
menuicon.addEventListener('click', menuOverlay);

function closeMenuOverlay() {
  navlinks.style.display = 'none';
  menuicon.style.display = 'flex';
  menuclose.style.display = 'none';
}

menuclose.addEventListener('click', closeMenuOverlay);
