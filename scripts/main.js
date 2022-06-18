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

//Preserve data in browser
const nameInput = document.getElementById('name')
const mail = document.getElementById('mail')
const messageInput = document.getElementById('msg')
const form = document.getElementById('form')

const inputFields = document.forms['form']
const formElts = inputFields.querySelectorAll('input, textarea');

// Local storage 

const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const formData = getFromLocalStorage('formData');
if (formData !== null) {
  nameInput.value = formData.name;
  mail.value = formData.email;
  messageInput.value = formData.message;
}
formElts.forEach((fe) => {
  fe.addEventListener('input', () => {
    // errorMessage.style.display = 'none';
    const objectForLocalStorage = {
      name: nameInput.value,
      email: mail.value,
      message: messageInput.value,
    };
    saveToLocalStorage('formData', objectForLocalStorage);
  });
});