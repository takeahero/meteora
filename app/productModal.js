export function showProductModal(productData) {
	const productModal = document.getElementById("productModal");
	const closeProductModalBtn = document.querySelector(".product-modal__close-icon");
	const productImg = document.getElementById("productModalImg");

	productImg.srcset = `${productData.imgMobile} 375w, ${productData.imgTablet} 640w, ${productData.imgDesktop} 1040w`;
	document.getElementById("productModalTitle").textContent = productData.title;
	document.getElementById("productModalDescription").textContent = productData.description;
	document.getElementById("productModalPrice").textContent = `Preço: ${productData.price}`;
	document.getElementById("productModalSupplier").textContent = productData.supplier;

	productModal.showModal();

	closeProductModalBtn.addEventListener("click", () => productModal.close());
}

//criar função que adicionar as opções de cores de forma dinâmica.
