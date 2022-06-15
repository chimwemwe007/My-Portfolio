const navToggle = document.querySelector('.nav-toggle');
const ul = document.querySelector('.links');
const close = document.querySelector('.close');

navToggle.addEventListener('click', () => {
  ul.classList.add('d-block');
});

close.addEventListener('click', () => {
  ul.classList.remove('d-block');
});