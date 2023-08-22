import { displayProducts } from "./filterProducts.js";
import { apiConnect } from "../showcase.js"

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search');
    const searchInput = document.querySelector('.search__input');

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        apiConnect().then(products => {
            const filteredProducts = products.filter(product =>
                product.title.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.supplier.toLowerCase().includes(searchTerm)
            );

            displayProducts(filteredProducts);

            searchInput.value = ''; 
        });
    }

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        performSearch();
    });

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    displayProducts();

});

