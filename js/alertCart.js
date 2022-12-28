const alertCart = () => {

    const cartAlert = document.querySelector('.alertCart');
    const ProductsInCart = JSON.parse(localStorage.getItem('Products in Cart'));

    if (ProductsInCart.length === 0) {
        cartAlert.classList.add('delete');
    } else {
        cartAlert.classList.remove('delete');
        let totalProductsInCart = ProductsInCart.reduce((acc, product) => acc + product.quantity, 0);
        cartAlert.textContent = totalProductsInCart;
    }
}
alertCart();