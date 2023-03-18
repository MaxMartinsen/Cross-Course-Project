const checkoutContainer = document.querySelector(".checkout-container");

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
          <h2 class="game">${product.game}</h2>
          <p class="price">Price: ${product.price} $</p>
        </div>
      </div>
      <div class="contact__colums__item">
      <form action="submit-form.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      
        <label for="surname">Surname:</label>
        <input type="text" id="surname" name="surname" required>
      
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      
        <label for="address">Address / Street / Number:</label>
        <input type="text" id="address" name="address" required>

        <label for="index">Index:</label>
        <input type="text" id="index" name="index" required>
      
        <label for="city">City:</label>
        <input type="text" id="city" name="city" required>
      
        <label for="country">Country:</label>
        <input type="text" id="country" name="country" required>
      
        <button class="btn btn--buy" type="submit" id="submit-btn" disabled>Place order</button>
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
        window.location.href = `/payment.html?id=${product.id}`;
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
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const index = document.getElementById("index").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!nameRegex.test(name)) {
    alert("Please enter a valid name.");
    return false;
  }
  if (!nameRegex.test(surname)) {
    alert("Please enter a valid surname.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }

  if (!address) {
    alert("Please enter a valid address.");
    return false;
  }

  if (!index) {
    alert("Please enter a valid index.");
    return false;
  }

  if (!nameRegex.test(city)) {
    alert("Please enter a valid city.");
    return false;
  }

  if (!nameRegex.test(country)) {
    alert("Please enter a valid country.");
    return false;
  }

  return true;
}
