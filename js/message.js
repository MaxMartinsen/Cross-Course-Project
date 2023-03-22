// Messaage

const form = document.querySelector('.message-form');
const firstNameInput = document.querySelector('#name');
const surNameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const sendButton = document.querySelector('.btn--send');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;
  
  // validate first name
  if (firstNameInput.value.trim() === '') {
    document.querySelector('#firstNameError').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('#firstNameError').style.display = 'none';
  }

  // validate surname
  if (surNameInput.value.trim() === '') {
    document.querySelector('#surNameError').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('#surNameError').style.display = 'none';
  }

  // validate email
  if (!isValidEmail(emailInput.value)) {
    document.querySelector('#emailError').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('#emailError').style.display = 'none';
  }

  // validate message
  if (messageInput.value.trim() === '') {
    document.querySelector('#messageError').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('#messageError').style.display = 'none';
  }

  if (isValid) {
    sendButton.innerText = 'Thank you for the message';
  }
});

function isValidEmail(email) {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
}
