// Camila Heredia
// cantidad total de productos agregados al carrito
let productsInCart = 0;

const addEventCartBtn = ()=>{
    const addToCartBtn = document.querySelectorAll(".btn__card")

    // creo array de productos vacío
    let allProducts;
    // monto total a pagar
    let totalInCart;

    if( localStorage.getItem('Products in Cart') == null) {
        allProducts = [];
        totalInCart = 0;
    } else {
        allProducts = JSON.parse(localStorage.getItem("Products in Cart"));
        totalInCart = Number(localStorage.getItem("Total in Cart"));
    }

    // recorro todos los botones "agregar al carrito"
    addToCartBtn.forEach((cartBtn)=>{
        // le asigno un addEventListener a cada botón
        cartBtn.addEventListener('click', ()=>{
            // aumento una unidad al total de productos en el carrito
            productsInCart++;

            const modal = document.querySelector(".modal");
            modal.classList.remove("delete");

            hideModal(modal);

            // capturo la card del producto
            const cardProduct = cartBtn.parentElement.parentElement.parentElement;

            // creo un objeto con toda la informacion del producto seleccionado
            let productInfo = {
                id: cardProduct.querySelector(".product__id").textContent,
                title: cardProduct.querySelector(".product__name").textContent,
                category: cardProduct.querySelector(".product__type").textContent,
                description: cardProduct.querySelector(".product__description").textContent,
                price: Number(cardProduct.querySelector(".product__price").textContent.slice(1)),
                image: cardProduct.querySelector(".product__img").getAttribute("src"),
                stock: Number(cardProduct.querySelector(".product__stock").textContent),
                quantity: 1,
                totalToPay: Number(cardProduct.querySelector(".product__price").textContent.slice(1))
            }

            // utilizo el método some para recorrer el array de productos seleccionados y averiguar si el producto ya existe comparando los id del array con el id del producto seleccionado. Output = true/false
            const productExists = allProducts.some((product) => product.id === productInfo.id)

            if (productExists) {
                // si el producto seleccionado ya existe en el array, lo recorro para ubicar cuál es y modificar su cantidad, stock y total a pagar
                allProducts = allProducts.map((product) => {
                    if (product.id === productInfo.id) {
                        product.quantity++;
                        product.stock--;
                        product.totalToPay = product.price * product.quantity;

                        totalInCart += product.price;

                        return product; // si es, retorno el producto modificado
                    } else {
                        return product; // si no es, retorno el producto sin modificaciones
                    }
                })
                setProductsInLocalStorage(allProducts, totalInCart);
            } else {
                // si no existe, modifico stock y utilizo el spread operator para agregar el nuevo producto al final del array
                productInfo.stock--;

                totalInCart += productInfo.price;

                allProducts = [...allProducts, productInfo];

                setProductsInLocalStorage(allProducts, totalInCart);
            }

        alertCart();


        })
    })
}

// crear un objeto key value idéntico al json, crear la clase cantidad, cantidad=1, que aumente una unidad cuando se agregue más de uno, pushear a un array y guardarlo en el localStorage, actualizar localStorage


//***********************************************
//************** LOCAL STORAGE ******************
//***********************************************

const setProductsInLocalStorage = (allProducts, totalInCart) => {
    localStorage.setItem("Products in Cart", JSON.stringify(allProducts));
    localStorage.setItem("Total in Cart", totalInCart);
}


const hideModal = (modal) => {
    setTimeout(() => {
        modal.classList.add("delete");
    }, 2500)
}