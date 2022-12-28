/**
 * @file noProductsInCart.js
 * @description This file shows an image if the cart is displayed and there are no products.
 * @author: Jose Luis Vallejos
 * @version: 1.0
 * @date: 2021-05-17
 */
const noProductsInCart = () => {
    /**
     * @description: Container resume cart.
     * @type {HTMLElement}
     * @example: <div class="resumeContainer"></div>
     */
    const containerResumeCart = document.querySelector(".resumeContainer");
    /**
     * @description: Products in cart on LocalStorage.
     * @type {object}
     */
    const localStorageData = JSON.parse(localStorage.getItem('Products in Cart'));

    /**
     * @description: If there are no products in cart, the image is displayed.
     * @type {function}
     * @returns: void
     * @note: If there are products in cart, the image is not displayed.
     * @note: The image is displayed in the resume cart.
     * @note: The image is displayed in the cart.
     */
    if (localStorageData.length === 0) {
        containerResumeCart.innerHTML = `
        <img src="./assets/img/alerts/169899708,width=178,height=178.webp" alt="empty cart icon" class="emptyCartImg">
        <p>Your cart is empty</p>
        <p>Come back to buy</p>
        `
    }


};