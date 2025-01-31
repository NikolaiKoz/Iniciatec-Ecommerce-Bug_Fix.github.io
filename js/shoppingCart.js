//se crea un objeto de la data guardada en local storage
const data = JSON.parse(localStorage.getItem('Products in Cart'));
//se captura el div donde va a ir pintada la informacion de la cart
const cart = document.getElementById("cart");

/** 
 * 
 * @param objeto recorre el objeto segun los comprados
 * @returns un articulo en la cart
 * 
**/
const addCart = data => {
    
    const template = document.querySelector("#templateCartItem").content;

        const fragment = document.createDocumentFragment();
    if(data.length == 0) {
        cart.appendChild(template);
    }else if(data.length === null) {
        cart.appendChild(template);
    }else{
    data.forEach(item => {
        template.querySelector('img').src = item.image;
        template.querySelector('.descriptionItem').textContent = item.title;
        template.querySelector('.price').textContent = "$" +item.price;
        template.querySelector('.stock').textContent = "Stock " +item.stock + "uds";
        template.querySelector('.quantity').textContent = item.quantity;
        template.querySelector('.allValue').textContent = "$" +(item.price * item.quantity)
        template.querySelector('.addItem').setAttribute("id", item.id);
        template.querySelector('.subtractItem').setAttribute("id", item.id);
        //se le agrega un id con el id del producto para usarlo en los botones
        template.querySelector('.delet').setAttribute("id", item.id);

    const clone = template.cloneNode(true);
            fragment.appendChild(clone);
    });
    cart.appendChild(fragment);
}
}
addCart(data);    


const cartNumber = document.getElementById("cartNumber")
const fullShipment = document.getElementById("fullShipment")



const newTotalCartPrice = (newValue) => {
    let totalLS = JSON.parse(localStorage.getItem("Total in Cart"))
    totalLS = Number(newValue)
    localStorage.setItem("Total in Cart", JSON.stringify(totalLS));
}
/** 
 * 
 * @param objeto recorre el objeto y busca los que estan en el carrito
 * @returns el valor total de la compra
 * 
**/
const addDatesCart = data => {
    let div = document.createElement("div");
    div.innerHTML = `Cart(${data.length})`
    cartNumber.appendChild(div)

    //sumo el total de los productos a comprar
    let allPriceCart = data.reduce((acc, item) =>  acc + (item.price * item.quantity) , 0)
    // let allPriceCart = JSON.parse(localStorage.getItem("Total in Cart"))

    let p = document.createElement("p");
    p.innerHTML = "$" + allPriceCart
    p.className = "allPriceCart"
    fullShipment.appendChild(p)
    let newValue = fullShipment.textContent.split("$")
    newTotalCartPrice(newValue[newValue.length - 1])
}
addDatesCart(data)

        //botones de comprar
        const purchaseButtom = (data) => {
            const purchaseBTN = document.getElementById("buttomPurchase")

            purchaseBTN.addEventListener('click', ()=>{
                if(data.length > 0){
                    Swal.fire({
                        html: '<h2 class="modal-title">Are you sure?</h2><h3 class="modal-subtitle">Do you want to buy the cart?</h3>',
                        icon: 'question',
                        iconColor: '#0d6dfd',
                        showCancelButton: true,
                        buttonsStyling: false,
                        confirmButtonText: 'Yes, purchase!',
                        background: '#000',
                        backdrop: 'rgba(0,0,123,0.4)',
                        allowOutsideClick: false,
                        
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        },
                        customClass: {
                            confirmButton: 'modal-Confirmbtn',
                            cancelButton: 'modal-Cancelbtn',
                            title: 'modal-title',
                        },

                        }).then((result) => {
                            if (result.isConfirmed) {
                            // Swal.fire(
                            //     'Purchase!',
                            //     'success'
                            // )
                            // setTimeout(function(){
                            //     localStorage.removeItem("Products in Cart");
                            //     localStorage.removeItem("Total in Cart");
                            //     location.href ="../index.html";
                            // }, 1000);
                            Swal.fire({
                                html: '<h2 class="modal-title">Great!</h2><h3 class="modal-subtitle">Do you want to buy with cash or credit card?</h3>',
                                icon: 'success',
                                iconColor: '#0d6dfd',
                                showCancelButton: true,
                                buttonsStyling: false,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#3085d3',
                                confirmButtonText: 'Cash',
                                cancelButtonText: 'Credit Card',
                                background: '#000',
                                backdrop: 'rgba(0,0,123,0.4)',
                                allowOutsideClick: false,


                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                    },
                                    customClass: {
                                        confirmButton: 'modal-Confirmbtn',
                                        cancelButton: 'modal-Cardbtn',
                                    },
                            }).then((result) => {
                                if (result.isConfirmed) { // EFECTIVO
                                    Swal.fire({
                                        // iconHtml: '<i class="fa-solid fa-thumbs-up"></i>',
                                        icon: 'success',
                                        iconColor: '#0d6dfd',
                                        showConfirmButton: true,

                                        html: '<h2 class="modal-title">Thank you for your purchase!</h2><p class="modal-subtitle">We will have your order ready within two hours.</p><p class="modal-sub-subtitle">We are waiting for you at our location at Avenue Pringston 458</p>',
                                        showCancelButton: false,
                                        buttonsStyling: false,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#3085d3',
                                        confirmButtonText: 'OK!',
                                        background: '#000',
                                        backdrop: 'rgba(0,0,123,0.4)',
                                        allowOutsideClick: true,


                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                    },
                                    customClass: {
                                        confirmButton: 'modal-Confirmbtn',
                                    },
                                    }).then((result) => {
                                        if(result.isConfirmed) {
                                            localStorage.removeItem("Products in Cart");
                                            localStorage.removeItem("Total in Cart");
                                            location.href = "../index.html";
                                        }
                                    })
                                } else if (result.isDismissed){ // TARJETA DE CRÉDITO
                                    setTimeout(() => {
                                        location.href = "../html/creditCart.html";
                                    }, 600)
                                }
                            })
                            }
                        })
                }else{
                    Swal.fire({
                        title: 'Not products in Cart',
                        text: "Impossible to make the purchase",
                        icon: 'error',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'More products'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                location.href ="../index.html";
                            }
                        })
                }
            })
        }
        purchaseButtom(data)

        cart.addEventListener('click', e => {
            btnAction(e)
        })

        const btnAction = (e) => {
            const data = JSON.parse(localStorage.getItem('Products in Cart'));
            //aumentar cantidad de producto
            if(e.target.classList.contains('addItem')){
                e.preventDefault()
                data.forEach(item => {
                    if(item.id === e.target.id){
                        if(item.quantity < item.stock){
                            item.quantity++;
                        }
                    }
                    localStorage.removeItem("Products in Cart");
                    localStorage.setItem('Products in Cart', JSON.stringify(data))
                        cart.textContent = ''
                        cartNumber.textContent = ''
                        fullShipment.textContent = ''
                        addDatesCart(data)
                        addCart(data);
                })
            }
            // disminuir cantidad de producto
            if(e.target.classList.contains('subtractItem')){
                e.preventDefault()
                data.forEach(item => {
                        if(item.id === e.target.id){
                            item.quantity--;
                        localStorage.removeItem("Products in Cart");
                        localStorage.setItem('Products in Cart', JSON.stringify(data))
                        cart.textContent = ''
                        cartNumber.textContent = ''
                        fullShipment.textContent = ''
                        addDatesCart(data)
                        addCart(data); 
                    }else if(item.id === e.target.id && item.quantity == 1){
                        const data = JSON.parse(localStorage.getItem('Products in Cart'));
                        e.preventDefault()
                        const dataFilter = data.filter(element => element.id !== (e.target.id))
                        localStorage.removeItem("Products in Cart");
                        localStorage.setItem('Products in Cart', JSON.stringify(dataFilter))
                        cart.textContent = ''
                        cartNumber.textContent = ''
                        fullShipment.textContent = ''
                        addDatesCart(dataFilter)
                        addCart(dataFilter); 
                        if(dataFilter.length == 0){
                            cart.textContent = ''
        
                cart.innerHTML = `
                            <div class="item">
                            <div class="imgDiv">
                                <img src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png">
                            </div>
                            <div class="dataItem">
                                <p class="descriptionItem">Nothing around here? <br>Add products to cart.</p>
                                <p class="price"></p>
                                <div class="buttomsItem">
                                    <a class="btn btn-primary delet" role="button" data-bs-toggle="button">Delete</a>
                                    <a href="../index.html" class="btn btn-primary" role="button" data-bs-toggle="button">More products</a>
                                </div>
                            </div>
                            <div class="counterItem">
                                <a href="#" class="btn btn-primary subtractItem" role="button" data-bs-toggle="button">-</a>
                                <p class="quantity">N°</p>
                                <a href="#" class="btn btn-primary addItem" role="button" data-bs-toggle="button">+</a>
                                <div class="stock">
                                <b>Stock</b>
                            </div>
                            </div>
                            <div>
                                <p class="allValue" ></p>
                            </div>
                        </div>
                            `
                            purchaseButtom(dataFilter)
                    }
                    }
                })
            }
            //borrar el articulo
            if(e.target.classList.contains('delet')){
                e.preventDefault()
                const dataFilter = data.filter(element => element.id !== (e.target.id))
                cart.textContent = ''
                cartNumber.textContent = ''
                fullShipment.textContent = ''
                addDatesCart(dataFilter)
                addCart(dataFilter); 
                if(dataFilter.length == 0){
                    cart.textContent = ''

                    const template = document.querySelector("#templateCartItem").content;
        cart.innerHTML = `
                    <div class="item">
                    <div class="imgDiv">
                        <img src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png">
                    </div>
                    <div class="dataItem">
                        <p class="descriptionItem">Nothing around here? <br>Add products to cart.</p>
                        <p class="price"></p>
                        <div class="buttomsItem">
                            <a class="btn btn-primary delet" role="button" data-bs-toggle="button">Delete</a>
                            <a href="../index.html" class="btn btn-primary" role="button" data-bs-toggle="button">More products</a>
                        </div>
                    </div>
                    <div class="counterItem">
                        <a href="#" class="btn btn-primary subtractItem" role="button" data-bs-toggle="button">-</a>
                        <p class="quantity">N°</p>
                        <a href="#" class="btn btn-primary addItem" role="button" data-bs-toggle="button">+</a>
                        <div class="stock">
                        <b>Stock</b>
                    </div>
                    </div>
                    <div>
                        <p class="allValue" ></p>
                    </div>
                </div>
                    `
            }
            localStorage.removeItem("Products in Cart");
            localStorage.setItem('Products in Cart', JSON.stringify(dataFilter))
            
            purchaseButtom(dataFilter)
        }
    }
