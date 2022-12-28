/**
 * Delete product on resume
 * @Description: Delete product on resume cart.
 * @argument: none
 * @returns: void
 * @Author: Vallejos, Jose Luis
 */
const deleteProductOnResume = () => {

    /**
     * @description: All delete product buttons.
     * @type {NodeList}
     * @example: <img class="deleteProduct-btn" src="./assets/img/icons/delete.png" alt="delete icon">
     */
    const deleteProductBtn = document.querySelectorAll(".deleteProduct-btn");

    deleteProductBtn.forEach(btn => {

        btn.addEventListener("click", () => {

            /**
             * @description: Product title.
             * @type {string}
             * @example: "Teclado"
             */
            let productTitle = btn.parentElement.parentElement.children[0].children[0].textContent;

            /**
             * @description: All products in cart.
             * @type {array}
             */
            const productsInCart = JSON.parse(localStorage.getItem("Products in Cart"));

            /**
             * @description: New products in cart, without the product that was deleted.
             * @type {array}
             * @example: [{title: "Teclado", price: 100, quantity: 1, totalToPay: 100, image: "https://..."}, {title: "Mouse", price: 50, quantity: 1, totalToPay: 50, image: "https://..."}]
             */
            const newProductsInCart = productsInCart.filter(product => product.title !== productTitle);

            /**
             * @description: Total to pay.
             * @type {number}
             * @example: 150
             * @note: The total to pay is the sum of the total to pay of each product.
             */
            document.querySelector(".totalToPay").textContent = `Total: $${newProductsInCart.reduce((acc, product) => acc + product.totalToPay, 0)}`;

            /**
             * @description: New products in cart.
             * @type {object}
             */
            localStorage.setItem("Products in Cart", JSON.stringify(newProductsInCart));

            /**
             * @description: Delete product from DOM.
             */
            btn.parentElement.parentElement.parentElement.remove();
        });

    });


};

/**
 * @description: Call to function.
 * @type {function}
 * @returns: void
 * @note: This function is called when the user clicks on the resume cart button.
 */
const callToFunction = () => {

    /**
     * @description: Resume cart button.
     * @type {HTMLElement}
     */
    const resumeCartBtn = document.querySelector('.container-iconCart');

    resumeCartBtn.addEventListener('click', () => {
        deleteProductOnResume();
    });


};
callToFunction();
