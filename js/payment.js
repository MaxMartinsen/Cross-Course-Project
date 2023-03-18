const checkoutContainer = document.querySelector(".payment-container");

checkoutContainer.classList.add("loader");

const queryString = document.location.search;
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

let inputFields;
let submitBtn;

setTimeout(() => {
  checkoutContainer.classList.remove("loader");

  try {
    const product = products.find((product) => product.id === id);

    checkoutContainer.innerHTML = `
      <div class="checkout-product">
        <div class="checkout-image" style="background-image: url(${product.img});"></div>
        <div class="details">
        </div>
      </div>
      <div class="payment__colums__item">
      <h2 class="game">${product.game}</h2>
      <h3>Enter Payment Details</h3>
    <form>
      <fieldset class="number">
        <label for="number">Card Number</label>
        <input id="number" type="num" maxlength="4"/>
        <input type="num" maxlength="4"/>
        <input type="num" maxlength="4"/>
        <input type="num" maxlength="4"/>
      </fieldset>
      <fieldset class="name">
        <label for="name">Cardholder Name</label>
        <input id="name" type="text"/>
      </fieldset>
      <fieldset class="exp">
        <label for="exp">Expiration</label>
        <select id="exp">
          <option>...</option>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <select>
          <option>...</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </select>
      </fieldset>
      <fieldset class="ccv">
        <label for="ccv">CCV</label>
        <input id="ccv" type="num" maxlength="3"/>
      </fieldset>
      <button class="btn btn--buy" type="submit" id="submit-btn" disabled>Pay ${product.price} $</button>
    </form>
      </div>
    `;

    inputFields = document.querySelectorAll("input");
    submitBtn = document.getElementById("submit-btn");

    inputFields.forEach((input) => {
      input.addEventListener("input", checkFormCompletion);
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm()) {
        window.location.href = `/success.html?id=${product.id}`;
      }
    });
  } catch (error) {
    checkoutContainer.innerHTML = "An error occurred while loading the content.";
  }
}, 1000);

function checkFormCompletion() {
  let allFilled = true;

  inputFields.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  submitBtn.disabled = !allFilled;
}

function validateForm() {
    const cardNumberInputs = document.querySelectorAll(".number input[type='num']");
    const cardNumber = Array.from(cardNumberInputs).map(input => input.value).join("");
    const cardHolderName = document.getElementById("name").value;
    const expMonth = document.getElementById("exp").value;
    const expYear = document.querySelector(".exp select:nth-child(2)").value;
    const ccv = document.getElementById("ccv").value;
  
    const cardNumberRegex = /^\d{16}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const ccvRegex = /^\d{3}$/;
  
    if (!cardNumberRegex.test(cardNumber)) {
      alert("Please enter a valid card number.");
      return false;
    }
  
    if (!nameRegex.test(cardHolderName)) {
      alert("Please enter a valid cardholder name.");
      return false;
    }
  
    if (expMonth === "..." || expYear === "...") {
      alert("Please select a valid expiration date.");
      return false;
    }
  
    if (!ccvRegex.test(ccv)) {
      alert("Please enter a valid CCV.");
      return false;
    }
  
    return true;
  }
