// Footer component
export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  
  
  footer.innerHTML = `
    <div class="container footer__wrapper">
    <div class="footer__column">
      <h4 class="footer__title">Helpful Pages</h4>
      <ul class="footer__list">
        <li><a href="#" class="footer__link">Home</a></li>
        <li><a href="#" class="footer__link">Help center</a></li>
        <li><a href="#" class="footer__link">About Us</a></li>
        <li><a href="#" class="footer__link">Contact Us</a></li>
      </ul>
    </div>

    <div class="footer__column">
      <h4 class="footer__title">Your Account</h4>
      <ul class="footer__list">
        <li><a href="#" class="footer__link">My account</a></li>
        <li><a href="#" class="footer__link">My orders</a></li>
        <li><a href="#" class="footer__link">Track orders</a></li>
        <li><a href="#" class="footer__link">My Favourite</a></li>
      </ul>
    </div>

    <div class="footer__column">
      <h4 class="footer__title">Our Policies</h4>
      <ul class="footer__list">
        <li>
          <a href="#" class="footer__link footer__link--external"
            >Privacy Policy</a
          >
        </li>
        <li>
          <a href="#" class="footer__link footer__link--external"
            >Terms & Conditions</a
          >
        </li>
        <li>
          <a href="#" class="footer__link footer__link--external"
            >Shipping & Delivery Policy</a
          >
        </li>
        <li>
          <a href="#" class="footer__link footer__link--external"
            >Return & Exchange Policy</a
          >
        </li>
      </ul>
    </div>

    <div class="footer__column">
      <h4 class="footer__title">Join Tallah Community</h4>
      <div class="footer__newsletter">
        <label class="footer__label">Our newsletter</label>
        <div class="footer__subscribe">
          <input
            type="email"
            class="footer__input"
            placeholder="Enter your email address here..."
          />
          <button class="footer__submit">
            <img src="/src/assets/icons/arrow-right.svg" alt="Submit" />
          </button>
        </div>
      </div>

      <div class="footer__social">
        <a href="#" class="footer__social-icon"
          ><img src="/src/assets/icons/facebook.svg" alt="Facebook"
        /></a>
        <a href="#" class="footer__social-icon"
          ><img src="/src/assets/icons/x.svg" alt="X"
        /></a>
        <a href="#" class="footer__social-icon"
          ><img src="/src/assets/icons/youtube.svg" alt="YouTube"
        /></a>
        <a href="#" class="footer__social-icon"
          ><img src="/src/assets/icons/instagram.svg" alt="Instagram"
        /></a>
        <a href="#" class="footer__social-icon"
          ><img src="/src/assets/icons/tiktok.svg" alt="TikTok"
        /></a>
      </div>
    </div>
  </div>

  <div class="footer__bottom container">
    <img
      src="/src/assets/images/logo-footer.svg"
      alt="Tallah Logo"
      class="footer__logo"
    />
    <p class="footer__copyright">All rights reserved to Tallah Platform ©2025.</p>
  </div>
  `;


  return footer;
}
