const alertCart = () => {

    const cartAlert = document.querySelector('.alertCart');

    if( localStorage.getItem('Products in Cart') !== null ) {
        cartAlert.classList.remove('hide');
        let cartAlertText = 0;
        const productsInCart = JSON.parse(localStorage.getItem('Products in Cart'));
        productsInCart.forEach(element => {
            cartAlertText += element.quantity;
            cartAlert.innerHTML = cartAlertText;
        });
    } else {
        cartAlert.classList.add('hide');
    }

};
alertCart();