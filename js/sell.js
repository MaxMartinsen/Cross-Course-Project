// Sell

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const sellBtn = document.querySelector(".btn--sell");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(event) {
  event.preventDefault();
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add("input-error");
    emailError.style.display = "block";
    sellBtn.innerText = "Mail not sent";
  } else {
    emailInput.classList.remove("input-error");
    emailError.style.display = "none";
    sellBtn.innerText = "Check Mail";
  }
}

sellBtn.addEventListener("click", validateEmail);
