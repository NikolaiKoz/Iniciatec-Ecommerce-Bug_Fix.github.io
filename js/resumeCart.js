const resumeCart = () => {

    const resumeCartBtn = document.querySelector('.alertCartContainer');

    resumeCartBtn.addEventListener('click', () => {

        const resumeCartContainer = document.querySelector('.resumeCart');
        console.log(resumeCartContainer);
        const fragment = document.createDocumentFragment();

        const localStorageData = JSON.parse(localStorage.getItem('Products in Cart'));
        console.log(localStorageData);

        localStorageData.forEach(product => {

            let productCart = `
            <figure class="resumeContainer">
              <img src="${product.image}" alt="${product.title}" class="resumeImg">
              <figcaption class="resumeText">
                <h3 class="resumeTitle">${product.title}</h3>
                <p class="resumePrice">(${product.quantity}) - $${product.totalToPay}</p>
            </figure>
            `;

            fragment.appendChild(productCart);
            console.log(fragment);
        });




    });




};
resumeCart();