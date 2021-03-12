import { filter } from '../sorted-catalog.js'
import { navigateToUrl, CATALOG_URL, LOGIN_URL, REGISTRATTION_URL, currentUrl } from '../routing.js'


export default function navigateToLink() {
    const productBtn = document.querySelectorAll('.product-btn')
    productBtn.forEach((button) => {
        button.onclick = (event) => {
            event.preventDefault();
            navigateToUrl(CATALOG_URL);
            const currentBtn = button.dataset.filter;
            const products = document.querySelectorAll('.product-grid__item');
            filter(currentBtn, products);
        }
    })

    const catalog = document.querySelector('.catalog'); {
        catalog.onclick = (event) => {
            event.preventDefault();
            navigateToUrl(CATALOG_URL);
        }
    }

    const login = document.querySelector('.login'); {
        login.onclick = (event) => {
            event.preventDefault();
            navigateToUrl(LOGIN_URL);
        }
    }

    const registration = document.querySelector('.registration'); {
        console.log(registration)
        registration.onclick = (event) => {
            event.preventDefault();
            navigateToUrl(REGISTRATTION_URL);
        }
    }

    if (currentUrl === CATALOG_URL) {
        const CatalogRegistration = document.querySelector('.catalog-registation'); {
            CatalogRegistration.onclick = (event) => {
                event.preventDefault();
                navigateToUrl(REGISTRATTION_URL);
            }
        }
    }
}
