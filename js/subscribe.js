// Subscribe
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function submitForm(event) {
  event.preventDefault();
  if (validateEmail(emailInput.value)) {
    window.location.href = 'thanks.html';
  } else {
    emailError.style.display = 'block';
  }
}

const subscribeButton = document.querySelector('.btn--subscribe');
subscribeButton.addEventListener('click', submitForm);


emailInput.addEventListener("input", validateEmail);