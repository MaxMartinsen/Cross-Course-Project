document.addEventListener("DOMContentLoaded", () => {
    const successContainer = document.querySelector(".success-container");
  
    successContainer.classList.add("loader");
  
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
  
    const orderNumber = Math.floor(1000000 + Math.random() * 9000000);

    setTimeout(() => {
      successContainer.classList.remove("loader");
  
      try {
        const product = products.find((product) => product.id === id);
  
        successContainer.innerHTML = `
          <div class="checkout-product">
            <div class="checkout-image" style="background-image: url(${product.img});"></div>
            <div class="details"></div>
          </div>
          <div class="success__colums__item">
            <h2 class="game">${product.game}</h2>
            <p>Your order number: ${orderNumber} We will send you an order confirmation email with details and tracking information.</p>
            <button class="btn btn--buy" type="button" id="back-to-home">Success</button>
          </div>
        `;
  
        const backButton = document.getElementById("back-to-home");
        backButton.addEventListener("click", () => {
          window.location.href = "/index.html";
        });
      } catch (error) {
        successContainer.innerHTML = "An error occurred while loading the content.";
      }
    }, 1000);
  });
  