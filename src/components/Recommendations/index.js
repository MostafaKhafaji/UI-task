import { createProductCard } from "../ProductCard";

export function createRecommendations() {
  const recommendations = document.createElement("section");
  recommendations.classList.add("recommendations");

  recommendations.innerHTML = `
    <div class="container">
      <h2 class="recommendations__title">
        <span class="recommendations__icon">|</span>
        Similar products <span class="recommendations__emoji">🛍️</span>
      </h2>
      <div class="recommendations__list"></div>

      <div class="recommendations__benefits">
        <div class="recommendations__benefit">
          <span class="recommendations__benefit-icon">
            <img src="/src/assets/icons/message1.svg" alt="Customer Support" />
          </span>
          <div class="recommendations__benefit-text">
            <span>24/7 Customer Support</span>
            <span>Get help whenever you need it.</span>
          </div>
        </div>

        <div class="recommendations__benefit">
          <span class="recommendations__benefit-icon">
            <img src="/src/assets/icons/secure-payment.svg" alt="Secure Payment" />
          </span>
          <div class="recommendations__benefit-text">
            <span>Secure Payment Options</span>
            <span>Secure payments for each transaction.</span>
          </div>
        </div>

        <div class="recommendations__benefit">
          <span class="recommendations__benefit-icon">
            <img src="/src/assets/icons/shopping-bag.svg" alt="Order Tracking" />
          </span>
          <div class="recommendations__benefit-text">
            <span>Order Tracking</span>
            <span>Track your orders in real time, anytime.</span>
          </div>
        </div>

        <div class="recommendations__benefit">
          <span class="recommendations__benefit-icon">
            <img src="/src/assets/icons/delivery-truck.svg" alt="Returns" />
          </span>
          <div class="recommendations__benefit-text">
            <span>Easy Returns and Exchanges</span>
            <span>Returns made easy, no questions asked.</span>
          </div>
        </div>
      </div>
    </div>
  `;

  const list = recommendations.querySelector(".recommendations__list");

  const mockProduct = {
    title: "Skinova Image Whitening Roll On 60ml Berries Sent",
    image: "/src/assets/images/product-card.png",
    premium: true,
    discount: true,
    ratings: 400,
    price: "11 LE",
    oldPrice: "15 LE"
  };

  for (let i = 0; i < 4; i++) {
    list.appendChild(createProductCard(mockProduct));
  }

  return recommendations;
}
