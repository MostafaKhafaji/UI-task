export function createProduct() {
    const product = document.createElement("section");
    product.classList.add("product");
    product.innerHTML = `
  
      <div class="container">
        <div class="product__wrapper">
          <!-- Left Column -->
          <div class="product__media">
            <div class="product__labels">
              <span class="product__label product__label--premium"></span>
              <span class="product__label product__label--discount"></span>
            </div>
            <img
              src="/src/assets/images/product-1.png"
              alt="Product Image"
              class="product__image"
            />

            <div class="product__thumbnails">
              <img
                src="/src/assets/images/thump-1.png"
                class="product__thumbnail is-active"
              />
              <img src="/src/assets/images/thump-2.png" class="product__thumbnail" />
              <img src="/src/assets/images/thump-2.png" class="product__thumbnail" />
            </div>
          </div>

          <div class="product__details">
            <h1 class="product__title">Lip Therapy Rosy Lip Balm 17 grams</h1>

            <div class="product__rating">
              <img src="/src/assets/icons/star.svg" alt="Star" />
              <img src="/src/assets/icons/star.svg" alt="Star" />
              <img src="/src/assets/icons/star.svg" alt="Star" />
              <img src="/src/assets/icons/star.svg" alt="Star" />
              <img src="/src/assets/icons/star.svg" alt="Star" />
              <span class="product__reviews">Customer Reviews (87)</span>
            </div>

            <div class="product__pricing">
              <div class="product__sale-price">
                <span class="product__price">8889 LE</span>
                <span class="product__vat">(Inclusive of VAT)</span>
              </div>
              <div class="product__price">
                <span class="product__old-price">17800 LE</span>
                <span class="product__discount">Save 12%</span>
              </div>
            </div>

            <div class="product__brand"><strong>Brand:</strong> Amanda</div>

            <div class="product__colors">
              <strong>Colors:</strong>
              <ul class="product__color-list">
                <li class="product__color product__color--black"></li>
                <li class="product__color product__color--red"></li>
                <li class="product__color product__color--gray"></li>
                <li class="product__color product__color--white"></li>
                <li class="product__color product__color--green"></li>
                <li class="product__color product__color--blue"></li>
              </ul>
            </div>

            <div class="product__badges">
              <span>100% Guarantee Safe Checkout:</span>
              <img src="/src/assets/images/payment.png" alt="payment" />
            </div>

            <div class="product__trust">
              <div class="product__trust-item">
                <img src="/src/assets/icons/shopping-bag.svg" />Trusted Delivery
              </div>
              <div class="product__trust-item">
                <img src="/src/assets/icons/secure-payment.svg" />Secure Payment
              </div>
              <div class="product__trust-item">
                <img src="/src/assets/icons/delivery-truck.svg" />Easy Returns &
                Exchanges
              </div>
            </div>

            <div class="product__actions">
              <div class="product__quantity">
                <button class="quantity__button quantity__button--disabled">-</button>
                <span>1</span>
                <button class="quantity__button">+</button>
              </div>

              <button class="btn btn--primary">Buy Now</button>
              <button class="btn btn--secondary-outline">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    return product;
  }