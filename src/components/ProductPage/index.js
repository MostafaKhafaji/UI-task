import { createProduct } from "../Product/index.js";
import { createReviews } from "../ProductReviews/index.js";
import { createRecommendations } from "../Recommendations/index.js";

export function createProductPage() {
  const productPage = document.createElement("main");
  const productSection = createProduct();
  const reviewsSection = createReviews();
  const recommendationsSection = createRecommendations();
  productPage.appendChild(productSection);
  productPage.appendChild(reviewsSection);
  productPage.appendChild(recommendationsSection);
  return productPage;
}
