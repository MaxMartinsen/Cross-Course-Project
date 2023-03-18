const detailsContainer = document.querySelector(".details-container");
detailsContainer.innerHTML = "";

detailsContainer.classList.add("loader");

const queryString = document.location.search;
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

setTimeout(() => {
  detailsContainer.classList.remove("loader");

  try {
    const product = products.find(product => product.id === id);

    detailsContainer.innerHTML = `
    <div class="details-image" style="background-image: url(${product.img});"></div>
    <div class="details">
      <h2>${product.game}</h2>
      <p>Brand: ${product.brand}</p>
      <h3>Description:</h3>
      <p>${product.description}</p>
      <h4>Price: ${product.price} $</h4>
      <a href="/checkout.html?id=${product.id}" class="btn btn--buy">Buy now</a>
    </div>
  `;

  } catch (error) {

    detailsContainer.innerHTML = "An error occurred while loading the content.";
  }
}, 1000);
