export function createReviews() {
  const reviews = document.createElement("section");
  reviews.classList.add("product-review");

  reviews.innerHTML = `
    <div class="container">
      <!-- Tabs -->
      <div class="product-review__tabs">
        <button class="product-review__tab product-review__tab--active" data-tab="overview">Overview</button>
        <button class="product-review__tab" data-tab="ratings">Product Ratings & Reviews</button>
      </div>

      <!-- Panels Wrapper -->
      <div class="product-review__body">
        <!-- Overview Panel -->
        <div class="product-review__panel product-review__panel--active" data-content="overview">
          <div class="product-review__content">
            <div class="product-review__left">
              <h3 class="product-review__title">Product Overview</h3>
              <p class="product-review__paragraph">
                Tarte Shape Tape Concealer is your best choice for achieving flawless coverage.<br />
                Tarte concealer offers full coverage with a lightweight formula that glides effortlessly onto the skin, making it easy to blend and build.<br />
                Tarte Shape Tape helps you conceal fine lines, wrinkles, dark circles, and signs of fatigue, leaving your skin flawless.<br />
                It nourishes your skin with its mango seed and shea butter ingredients.<br />
                Tarte concealer offers full coverage with a lightweight formula that glides effortlessly onto the skin.<br />
                Plus, the quantity is great and will last a long time.
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

        <!-- Ratings Panel -->
        <div class="product-review__panel" data-content="ratings">
          <div class="product-review__ratings-summary">
            <div class="product-review__score-box">
              <div class="product-review__score">4.7</div>
              <div class="product-review__stars">
                <img src="/src/assets/icons/star.svg" alt="Star" />
                <img src="/src/assets/icons/star.svg" alt="Star" />
                <img src="/src/assets/icons/star.svg" alt="Star" />
                <img src="/src/assets/icons/star.svg" alt="Star" />
                <img src="/src/assets/icons/star.svg" alt="Star" />
              </div>
              <div class="product-review__reviews-count">Customer Reviews (87)</div>
            </div>

            <div class="product-review__distribution">
              ${[5, 4, 3, 2, 1].map(star => `
                <div class="product-review__distribution-row">
                  <span class="product-review__distribution-stars">${'★'.repeat(star)}</span>
                  <div class="product-review__bar-container">
                    <div class="product-review__bar" style="width: ${[80, 5, 2, 0, 13][5 - star]}%"></div>
                  </div>
                  <span class="product-review__percent">${[80, 5, 2, 0, 13][5 - star]}%</span>
                </div>
              `).join("")}
            </div>

            <button class="btn btn--primary product-review__leave-review">Leave a Review</button>
          </div>

          <div class="product-review__list">
            ${Array.from({ length: 2 }).map(() => `
              <div class="product-review__item">
                <div class="product-review__avatar">AA</div>
                <div class="product-review__info">
                  <strong class="product-review__name">Amir Amir</strong>
                  <div class="product-review__date">Since 1-5-2024</div>
                  <div class="product-review__stars">
                    <img src="/src/assets/icons/star.svg" alt="Star" />
                    <img src="/src/assets/icons/star.svg" alt="Star" />
                    <img src="/src/assets/icons/star.svg" alt="Star" />
                    <img src="/src/assets/icons/star.svg" alt="Star" />
                    <img src="/src/assets/icons/star.svg" alt="Star" />
                  </div>
                  <p class="product-review__text">
                    Honestly, after about a week of using it, this product is amazing! It doesn't just moisturize; it leaves your lips super soft and not dry at all.
                    It’s so lightweight and really hydrating. If you’re hesitating to get it, just go for it—you won’t need any other lip balm!
                  </p>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="product-review__show-more">
            <button class="btn btn--secondary-outline">Show More</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const tabs = reviews.querySelectorAll(".product-review__tab");
  const panels = reviews.querySelectorAll(".product-review__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("product-review__tab--active"));
      panels.forEach((p) => p.classList.remove("product-review__panel--active"));

      tab.classList.add("product-review__tab--active");
      const target = tab.dataset.tab;
      reviews
        .querySelector(`[data-content="${target}"]`)
        .classList.add("product-review__panel--active");
    });
  });

  return reviews;
}
