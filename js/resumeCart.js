// renderizar productos en el carrito
const resumeCart = () => {

    const resumeCartBtn = document.querySelector('.container-iconCart');
    const containerResumeCart = document.querySelector(".resumeContainer");

    resumeCartBtn.addEventListener('click', () => {

        containerResumeCart.innerHTML = "";

        const localStorageData = JSON.parse(localStorage.getItem('Products in Cart'));

        noProductsInCart();

        localStorageData.forEach(product => {
            const productCart = document.createElement("div");
            productCart.classList.add("productCart");

            productCart.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="resumeImg">
            <div class="container-productData">
              <div class="container-productData_up">
                <h3 class="resumeTitle">${product.title}</h3>
                <p class="resumePrice">$${product.totalToPay}</p>
              </div>

              <div class="container-productData_down">
                <div class="quantity-box">
                  <span class="quantity">${product.quantity}</span>
                </div>
                <img class="deleteProduct-btn" src="./assets/img/icons/delete.png" alt="delete icon">

               </div>
            </div>
            `
            containerResumeCart.appendChild(productCart);
        })

        const footerCart = document.querySelector(".container-footerCart");

        footerCart.innerHTML = `
            <p class="totalToPay">Total: $${localStorage.getItem("Total in Cart")}</p>
            <button class="goToCart-btn">Go to my cart</button>
        `
    })
}
resumeCart();

// mostrar / ocultar carrito de compras
const resumeCartContainer = document.getElementById('resumeCart');

function showResumeCart() {
    resumeCartContainer.classList.remove("delete");
}

function hideResumeCart() {
    resumeCartContainer.classList.add("delete");
}