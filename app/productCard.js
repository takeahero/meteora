import { apiConnect } from "../showcase.js"
import { showProductModal } from "./productModal.js";

const productsArr = document.querySelector('[data-products-ul]')

export function productsCard(imgDesktop, imgTablet, imgMobile, title, description, price, supplier) {
    const productsItem = document.createElement("li")
    productsItem.className = "products__item"
    productsItem.innerHTML += `
    <div class="featured__card">
    <picture>
        <source srcset=${imgDesktop} media="(min-width:1040px)">
        <source srcset=${imgTablet} media="(min-width:640px)">
        <img class="featured__card--img" src=${imgMobile} alt=${title}>
    </picture>
    <p class="featured__card--title">${title}</p>
    <p class="featured__card--description">${description}</p>
    <p class="featured__card--price">${price}</p>
    <button class="featured__card--btn modal-toggle" type="button">Ver mais</button>
    </div>
    
`
    const productDetailBtn = productsItem.querySelector(".featured__card--btn");
    productDetailBtn.addEventListener("click", () => {
        showProductModal({ imgDesktop, imgTablet, imgMobile, title, description, price, supplier});
    });

    return productsItem
}

export async function showProducts() {
    try {
        const showcaseRequest = await apiConnect();
        showcaseRequest.forEach(product => productsArr.appendChild(productsCard(product.imgDesktop, product.imgTablet, product.imgMobile, product.title, product.description, product.price, product.supplier, product.size)))
    }
    catch (e) {
        alert("error")
    }
}

showProducts()
