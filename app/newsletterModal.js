const modal = document.querySelector(".newsletter-modal__container");
const openModalBtn = document.querySelector(".newsletter__btn");
const closeModalBtn = document.querySelector(".newsletter-modal__close-btn");

openModalBtn.addEventListener("click", () => modal.showModal());
closeModalBtn.addEventListener("click", () => modal.close());
