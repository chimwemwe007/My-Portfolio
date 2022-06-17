const navToggle = document.querySelector('.nav-toggle');
const ul = document.querySelector('.links');
const close = document.querySelector('.close');
const closeItems = document.querySelector('.desktop-nav');

navToggle.addEventListener('click', () => {
  ul.classList.add('d-block');
});

close.addEventListener('click', () => {
  ul.classList.remove('d-block');
});

closeItems.addEventListener('click', () => {
  ul.classList.remove('d-block');
});

/* form validation*/

const form = document.querySelector('#contact_form');
const name = form.elements['name'];
const email = form.element['email'];
