import navigateToUrl, { CATALOG_URL } from './routing.js'

const catalog = document.querySelector('.catalog');
export default function clickRouting() {
    catalog.addEventListener('click', () => {
        navigateToUrl(CATALOG_URL);
    })
}