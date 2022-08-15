const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.close');
const toggleNav = document.querySelector('#toggle-nav');

toggleButton.addEventListener('click', () => {
  toggleNav.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  toggleNav.classList.remove('active');
});
