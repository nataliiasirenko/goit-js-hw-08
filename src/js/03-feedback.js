import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onFormInput, 1000));
form.addEventListener('submit', onFormSubmit);

onFormLoading();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  console.log('Storage:', JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function onFormLoading() {
  const loadData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (loadData) {
    email.value = loadData.email;
    message.value = loadData.message;
  }
}
