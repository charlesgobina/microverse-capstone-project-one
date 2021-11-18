const menuIcon = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-container');
const closeButton = document.querySelector('.closeIcon');

menuIcon.addEventListener('click', () => {
  menuContainer.classList.toggle('isActive');
});

closeButton.addEventListener('click', () => {
  menuContainer.classList.remove('isActive');
});