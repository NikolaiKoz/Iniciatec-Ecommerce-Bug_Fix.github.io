/**
 * @fileoverview This file contains the function that alerts the user of the number of products in the cart.
 * @author: Jose Luis Vallejos
 */
const alertCart = () => {

    /**
     * @description: Alert cart.
     * @type {HTMLElement}
     * @example: <span class="alertCart">2</span>
     */
    const cartAlert = document.querySelector('.alertCart');
    /**
     * @description: Products in cart.
     * @type {object}
     * @example: [{id: 1, name: "Taza", price: 150, quantity: 1, totalToPay: 150}, {id: 2, name: "Cuaderno", price: 200, quantity: 1, totalToPay: 200}]
     */
    const ProductsInCart = JSON.parse(localStorage.getItem('Products in Cart'));
    /**
     * @description: If there are no products in cart, the alert cart is deleted.
     * @type {function}
     * @returns: void
     * @note: If there are products in cart, the alert cart is shown.
     * @note: The alert cart shows the total number of products in cart.
     * @note: The alert cart is shown in the cart button.
     * @note: The alert cart is shown in the resume cart button.
     * @note: The alert cart is shown in the delete product button.
     */
    if (ProductsInCart === null || ProductsInCart.length === 0) {
        cartAlert.classList.add('delete');
    } else {
        cartAlert.classList.remove('delete');
        /**
         * @description: Total products in cart.
         * @type {number}
         * @example: 2
         * @note: The total products in cart is the sum of the quantity of each product.
         */
        let totalProductsInCart = ProductsInCart.reduce((acc, product) => acc + product.quantity, 0);
        cartAlert.textContent = totalProductsInCart;
    }
}
alertCart();