const resultsContainer = document.querySelector(".results-container");
resultsContainer.innerHTML = "";


resultsContainer.classList.add("loader");

setTimeout(() => {

  resultsContainer.classList.remove("loader");

  products.forEach(product => {
    const card = document.createElement("a");
    card.href = `details.html?id=${product.id}`;
    card.classList.add("card");
    card.innerHTML = `
      <div class="image" style="background-image: url(${product.img});"></div>
      <div class="details">
        <h2 class="game">${product.game}</h2>
        <p class="price">Price: ${product.price} $</p>
      </div>
    `;
    resultsContainer.appendChild(card);
  });
}, 1000);