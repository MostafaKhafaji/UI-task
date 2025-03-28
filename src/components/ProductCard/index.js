export function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
  
    <div class="product-card__labels">
      ${
        product.premium
          ? `<span
        class="product-card__label product-card__label--premium"
      ></span
      >`
          : ""
      } ${
    product.discount
      ? `<span
        class="product-card__label product-card__label--discount"
      ></span
      >`
      : ""
  }
    </div>

    <img
      src="${product.image}"
      alt="${product.title}"
      class="product-card__image"
    />

    <button class="product-card__wishlist">
      <img src="/src/assets/icons/heart.svg" alt="Wishlist" />
    </button>

    <h3 class="product-card__title">${product.title}</h3>

    <div class="product-card__rating">
      <img src="/src/assets/icons/star.svg" alt="Star" />
      <img src="/src/assets/icons/star.svg" alt="Star" />
      <img src="/src/assets/icons/star.svg" alt="Star" />
      <img src="/src/assets/icons/star.svg" alt="Star" />
      <img src="/src/assets/icons/star-disabled.svg" alt="Star" />
      <span>(${product.ratings} ratings)</span>
    </div>

    <div class="product-card__price-box">
      <span class="product-card__price">${product.price}</span>
      <span class="product-card__old-price">${product.oldPrice}</span>
    </div>
    <div class="product-card__footer">
      <div class="product-card__quantity">
        <button class="quantity__button quantity__button--disabled">-</button>
        <span>1</span>
        <button class="quantity__button">+</button>
      </div>
      <button class="btn btn--primary product-card__add">
        <img src="/src/assets/icons/cart.svg" alt="cart" /> Add to cart
      </button>
    </div> 
  `;

  return card;
}
