export function createReviews() {
    const reviews = document.createElement("section");
    reviews.classList.add("product-review");
    reviews.innerHTML = `
  
      
      <div class="container">
        <div class="product-review__tabs">
          <button class="product-review__tab product-review__tab--active">Overview</button>
          <button class="product-review__tab">Product Ratings & Reviews</button>
        </div>

        <div class="product-review__content">
          <div class="product-review__left">
            <h3 class="product-review__title">Product Overview</h3>
            <p class="product-review__paragraph">
              Tarte Shape Tape Concealer is your best choice for achieving flawless coverage.
              Tarte concealer offers full coverage with a lightweight formula that glides effortlessly onto the skin, making it easy to blend and build.
              Tarte Shape Tape helps you conceal fine lines, wrinkles, dark circles, and signs of fatigue, leaving your skin flawless. </br>
              It nourishes your skin with its mango seed and shea butter ingredients.Tarte Shape Tape Concealer is your best choice for achieving flawless coverage. </br>
              Tarte concealer offers full coverage with a lightweight formula that glides effortlessly onto the skin, making it easy to blend and build. </br>
              Tarte Shape Tape helps you conceal fine lines, wrinkles, dark circles, and signs of fatigue, leaving your skin flawless. </br>
              It nourishes your skin with its mango seed and shea butter ingredients.
            </p>
          </div>

          <div class="product-review__right">
            <div class="product-review__accordion">
              <button class="product-review__accordion-item">Product specification</button>
              <button class="product-review__accordion-item">Product Ingredients:</button>
              <button class="product-review__accordion-item">Usage Instructions:</button>
              <button class="product-review__accordion-item">Warnings and Precautions:</button>
            </div>
          </div>
        </div>
      </div>
      `;
  
    return reviews;
  }