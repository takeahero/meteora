export function showProductModal(productData) {
	const productModal = document.getElementById("productModal");
	const closeProductModalBtn = document.querySelector(".product-modal__close-icon");

	document.getElementById("productModalImg").src = productData.imgMobile;
	document.getElementById("productModalTitle").textContent = productData.title;
	document.getElementById("productModalDescription").textContent = productData.description;
	document.getElementById("productModalPrice").textContent = `Preço: ${productData.price}`;
	document.getElementById("productModalSupplier").textContent = productData.supplier;

	productModal.showModal();

	closeProductModalBtn.addEventListener("click", () => productModal.close());
}
