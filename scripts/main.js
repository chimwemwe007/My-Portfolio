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

// form validation

const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
const form = document.querySelector('#contact-form');
// console.log(getForm)
const email = document.querySelector('#mail');
const errorHolder = document.querySelector('.emailError');

email.addEventListener('click', () => {
  errorHolder.classList.remove('d-flex');
});

// EMAIL VALIDATION

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emaill = email.value;
  if (!isLowerCase(emaill)) {
    errorHolder.classList.add('d-flex');
  } else {
    errorHolder.style.display = 'none';
    form.submit();
  }
});