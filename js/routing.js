import renderRegistration from './render/render-registation.js'
import renderLogin from './render/render-login.js'
import renderCatalog from './render/render-catalog.js'
import renderProductPage from './render/render-product-page.js'
import currentUser from './current-user.js'
import logRegHeader from './templates/header/link.js'
import renderCart from './render/render-cart.js'
import renderCartQuantity from './render/render-cart-quantity.js'
import renderCartFullPrice from './render/render-cart-full-price.js'
import cartModalPage from './products-cart-page.js'
import logOutHeader from './render/render-header-user.js'
import renderLinkFilter from './render/render-link-filter.js'


const productRoutePattern = /^\/catalog\/product\/\d+$/;

export const INDEX_URL = ['https://nostalgic-poincare-47660c.netlify.app/'];

export const INDEX_URLS = ['/', 'https://nostalgic-poincare-47660c.netlify.app/'];

export const REGISTRATTION_URL = '/registration';

export const LOGIN_URL = '/login';

export const CATALOG_URL = '/catalog';

export const PRODUCT_URL = '/product';

export const { pathname: currentUrl } = window.location;

export function renderPage() {

  renderLinkFilter();

  const { pathname: currentUrl } = window.location;

  const header = document.querySelector('header .header__auth');

  if (!currentUser.userData) {
    header.innerHTML = logRegHeader;
  } else {
    logOutHeader();
  }

  if (currentUrl === CATALOG_URL) {
    renderCatalog();

    return;
  }

  if (productRoutePattern.test(currentUrl)) {
    renderProductPage();

    return;
  }


  if (currentUrl === REGISTRATTION_URL) {
    renderRegistration();

    return;
  }

  if (currentUrl === LOGIN_URL) {
    renderLogin();

    return;
  }

  if (INDEX_URLS.includes(currentUrl)) {
    cartModalPage.render();
    renderCart();
    renderCartFullPrice();
    renderCartQuantity();

    return;
  }
}

export function navigateToUrl(url) {
  window.history.pushState({}, url, window.location.origin + url);

  renderPage();
}
