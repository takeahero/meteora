import { productsCard } from "./productCard.js"
import { showcase } from "../api/showcase.js"
import { showProducts } from "./productCard.js"

const categoryCards = document.querySelectorAll('.category__card');
const featuredCardContainer = document.querySelector('[data-products-ul]');

showProducts();

 export function displayProducts(products) {
    featuredCardContainer.innerHTML = '';

    products.forEach(product => {
        const {
            imgDesktop,
            imgTablet,
            imgMobile,
            title,
            description,
            price,
            supplier,
        } = product;

        const productItem = productsCard(imgDesktop, imgTablet, imgMobile, title, description, price, supplier);

        featuredCardContainer.appendChild(productItem);
    });
}

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedCategory = card.querySelector('.category__card--title').textContent;

        showcase().then(products => {
            const filteredProducts = products.filter(product => product.category === selectedCategory);
            displayProducts(filteredProducts);
        });
    });
});
