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

//precio total
const cartNumber = document.getElementById("cartNumber")
const fullShipment = document.getElementById("fullShipment")

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
    //console.log(reduce)
    let p = document.createElement("p");
    p.innerHTML = "Full Shipment " + "$" + allPriceCart
    p.className = "allPriceCart"
    fullShipment.appendChild(p)
}
addDatesCart(data)


const newTotalCartPrice = (newValue) => {
    let totalLS = JSON.parse(localStorage.getItem("Total in Cart"))
    totalLS = Number(newValue)
    localStorage.setItem("Total in Cart", JSON.stringify(totalLS));
}

        //botones de comprar
        const purchaseButtom = (data) => {
            const purchaseBTN = document.getElementById("buttomPurchase")

            purchaseBTN.addEventListener('click', ()=>{
                if(data.length > 0){
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Do you want to buy the cart?",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, purchase!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                            Swal.fire(
                                'Purchase!',
                                'success'
                            )
                            setTimeout(function(){
                                localStorage.removeItem("Products in Cart");
                                localStorage.removeItem("Total in Cart");
                                location.href ="../index.html";
                            }, 1000);
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

        console.log(data)
        const btnAction = (e) => {
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
                    addCart(data); 
                    addDatesCart(data)
                })
            }
            // disminuir cantidad de producto
            if(e.target.classList.contains('subtractItem')){
                e.preventDefault()
                data.forEach(item => {
                    if(item.quantity !== 0){
                        if(item.id === e.target.id){
                            item.quantity--;
                        localStorage.removeItem("Products in Cart");
                        localStorage.setItem('Products in Cart', JSON.stringify(data))
                        cart.textContent = ''
                        cartNumber.textContent = ''
                        fullShipment.textContent = ''
                        addCart(data); 
                        addDatesCart(data)
                        }
                    }else{
                        const data = JSON.parse(localStorage.getItem('Products in Cart'));
                        e.preventDefault()
                        const dataFilter = data.filter(element => element.id !== (e.target.id))
                        localStorage.removeItem("Products in Cart");
                        localStorage.setItem('Products in Cart', JSON.stringify(dataFilter))
                        cart.textContent = ''
                        cartNumber.textContent = ''
                        fullShipment.textContent = ''
                        addCart(data); 
                        addDatesCart(data)
                    }
                })
            }
            //borrar el articulo
            if(e.target.classList.contains('delet')){
                const data = JSON.parse(localStorage.getItem('Products in Cart'));
                e.preventDefault()
                const dataFilter = data.filter(element => element.id !== (e.target.id))
                localStorage.removeItem("Products in Cart");
                localStorage.setItem('Products in Cart', JSON.stringify(dataFilter))
                    cart.textContent = ''
                    cartNumber.textContent = ''
                    fullShipment.textContent = ''
                    addCart(data); 
                    addDatesCart(data)
            }
        }












        2
















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

const addCartEmply = data => {
    if(data.length == 0) {
        cart.appendChild(template);
    }
}
addCartEmply(data)


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
    console.log(newValue[newValue.length - 1])
}
addDatesCart(data)

        //botones de comprar
        const purchaseButtom = (data) => {
            const purchaseBTN = document.getElementById("buttomPurchase")

            purchaseBTN.addEventListener('click', ()=>{
                if(data.length > 0){
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Do you want to buy the cart?",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, purchase!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                            Swal.fire(
                                'Purchase!',
                                'success'
                            )
                            setTimeout(function(){
                                localStorage.removeItem("Products in Cart");
                                localStorage.removeItem("Total in Cart");
                                location.href ="../index.html";
                            }, 1000);
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
            console.log(click)
        })

        console.log(data)
        const btnAction = (e) => {
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
                    addCart(data); 
                    addDatesCart(data)
                })
            }
            // disminuir cantidad de producto
            if(e.target.classList.contains('subtractItem')){
                e.preventDefault()
                data.forEach(item => {
                    if(item.quantity !== 0){
                        if(item.id === e.target.id){
                            item.quantity--;
                        localStorage.removeItem("Products in Cart");
                        localStorage.setItem('Products in Cart', JSON.stringify(data))
                        cart.textContent = ''
                        cartNumber.textContent = ''
                        fullShipment.textContent = ''
                        addCart(data); 
                        addDatesCart(data)
                        }
                    }else{
                        const data = JSON.parse(localStorage.getItem('Products in Cart'));
                        e.preventDefault()
                        const dataFilter = data.filter(element => element.id !== (e.target.id))
                        localStorage.removeItem("Products in Cart");
                        localStorage.setItem('Products in Cart', JSON.stringify(dataFilter))
                        cart.textContent = ''
                        cartNumber.textContent = ''
                        fullShipment.textContent = ''
                        addCart(data); 
                        addDatesCart(data)
                    }
                })
            }
            //borrar el articulo
            if(e.target.classList.contains('delet')){
                e.preventDefault()
                const data = JSON.parse(localStorage.getItem('Products in Cart'));
                const dataFilter = data.filter(element => element.id !== (e.target.id))
                localStorage.removeItem("Products in Cart");
                localStorage.setItem('Products in Cart', JSON.stringify(dataFilter))
                    cart.textContent = ''
                    cartNumber.textContent = ''
                    fullShipment.textContent = ''
                    addCart(data); 
                    addDatesCart(data)
                    if(dataFilter.length == 0) {
                        document
                    }
            }
        }