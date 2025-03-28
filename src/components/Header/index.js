// Header component
export function createHeader() {
  const header = document.createElement("header");

  header.innerHTML = `
 <header class="header">
  <div class="header__top">
  <div class="container">
    <div class="header__language-location">
      <span class="header__language"> <img src="/src/assets/icons/eg-flag.svg" alt="language"/>العربية</span>
      <button class="header__location"><img src="/src/assets/icons/location.svg" alt="lcoation" /> Shobra, Cairo <img src="/src/assets/icons/arrow.svg" /></button>
    </div>
    <div class="header__contact">
      <span class="header__phone"><img src="/src/assets/icons/phone.svg" alt="phone"/> 01222885514</span>
      <span class="header__email"><img src="/src/assets/icons/mail.svg" alt="mail"/> info@talah.net</span>
    </div>
  </div>

  </div>

  <div class="header__main">
  <div class="container">
      <div class="header__logo">
      <img src="/src/assets/images/logo.svg" alt="Talah Logo" />
    </div>

    <div class="header__search">
    <span class="header__search-icon">
    <img src="/src/assets/icons/search.svg" alt="search" />
    </span>
      <input type="text" placeholder="What are you looking for today?" class="header__search-input" />
    </div>

    <div class="header__actions">
      <a href="#" class="header__action"> <img src="/src/assets/icons/profile.svg" alt="login"/> Login</a>
      <a href="#" class="header__action"> <img src="/src/assets/icons/heart.svg" alt="favourite"/> Favorite</a>
      <a href="#" class="header__action"> <img src="/src/assets/icons/cart.svg" alt="cart"/> Cart</a>
    </div>
  </div>

  </div>

  <nav class="header__nav">
    <ul class="header__menu">
      <li class="header__menu-item">  <button class="header__menu-button" onclick="console.log('Skin Care clicked')"class="header__menu-button">Skin Care<img src="/src/assets/icons/arrow.svg" alt="arrow" />   </button></li>
      <li class="header__menu-item">   <button class="header__menu-button">Hair Care <img src="/src/assets/icons/arrow.svg" alt="arrow" /> </button></li>
      <li class="header__menu-item">   <button class="header__menu-button">Makeup <img src="/src/assets/icons/arrow.svg" alt="arrow" /> </button></li>
      <li class="header__menu-item">   <button class="header__menu-button">Perfumes<img src="/src/assets/icons/arrow.svg" alt="arrow" />  </button></li>
      <li class="header__menu-item">  <button class="header__menu-button"> Body Care<img src="/src/assets/icons/arrow.svg" alt="arrow" />  </button></li>
      <li class="header__menu-item">  <button class="header__menu-button">Korean Products  <img src="/src/assets/icons/arrow.svg" alt="arrow" /> </button></li>
      <li class="header__menu-item">   <button class="header__menu-button">Natural Products <img src="/src/assets/icons/arrow.svg" alt="arrow" /> </button></li>
      <li class="header__menu-item">  <button class="header__menu-button"> Top Brands<img src="/src/assets/icons/arrow.svg" alt="arrow" />  </button></li>
    </ul>
  </nav>
</header>

  `;

  return header;
}
