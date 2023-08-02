const menuicon = document.getElementById('menu');
const navlinks = document.getElementById('nav-links');
const menuclose = document.getElementById('menu-close');
const logo = document.getElementById('logo');

function menuOverlay() {
  if (menuicon.style.display === 'flex') {
    menuicon.style.display = 'none';
  } else {
    menuicon.style.display = 'none';
    menuclose.style.display = 'block';
    logo.style.display = 'none';
    navlinks.style.display = 'flex';
  }
}
menuicon.addEventListener('click', menuOverlay);

function closeMenuOverlay() {
  navlinks.style.display = 'none';
  menuicon.style.display = 'flex';
  menuclose.style.display = 'none';
  logo.style.display = 'flex';
}

menuclose.addEventListener('click', closeMenuOverlay);
