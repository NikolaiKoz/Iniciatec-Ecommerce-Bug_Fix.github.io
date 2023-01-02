//console.log("js cart");
//se crea un objeto de la data guardada en local storage
const data = JSON.parse(localStorage.getItem('Products in Cart'));
//console.log(data);
//se captura el div donde va a ir pintada la informacion de la cart
const cart = document.getElementById("cart");
//console.log(cart);

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
    }else{
    data.forEach(item => {
        //console.log(item.category);
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
    p.innerHTML = "$" + allPriceCart
    p.className = "allPriceCart"
    fullShipment.appendChild(p)
}
addDatesCart(data)

//funcion para borrar el producto seleccionado
const deleteButtoms = data => {
const deleteCartItems = document.querySelectorAll(".delet");
//console.log("deleteCartItems", deleteCartItems)

//botones para borrar el producto
deleteCartItems.forEach((cartBtn)=>{
    cartBtn.addEventListener('click', ()=>{
        //console.log(cartBtn.id)
        data = data.filter(element => element.id !== cartBtn.id)
        //console.log(data)
        localStorage.removeItem("Products in Cart");
        localStorage.setItem('Products in Cart', JSON.stringify(data))
        cart.textContent = ''
        location. reload()
        addCart(data);  
    })
})
}
deleteButtoms(data)

//funcion para restar 1 articulo
const lessButtom = data => {
    const lessButtomCartItems = document.querySelectorAll(".subtractItem");
    //console.log("lessButtomCartItems", lessButtomCartItems)
    
    // botones de eliminar 1 unidad
    lessButtomCartItems.forEach((cartBtn)=>{
        cartBtn.addEventListener('click', ()=>{
            console.log(cartBtn.id)
            console.log(data)
                data.forEach(item => {
                if(item.quantity > 0){
                    if(item.id === cartBtn.id){
                        item.quantity = item.quantity-1
                        console.log(item.quantity)
                    console.log(data)
                    localStorage.removeItem("Products in Cart");
                    localStorage.setItem('Products in Cart', JSON.stringify(data))
                    cart.textContent = ''
                    location. reload()
                    addCart(data);
                    }
                    }else{
                data = data.filter(element => element.id !== cartBtn.id)
                    //console.log(data)
                    localStorage.removeItem("Products in Cart");
                    localStorage.setItem('Products in Cart', JSON.stringify(data))
                    cart.textContent = ''
                    location. reload()
                    addCart(data);
            }
                })
            
        })
    })
    }
    lessButtom(data)

    //funcion para aggregar 1 articulo
    const addButtom = data => {
        const addButtomCartItems = document.querySelectorAll(".addItem");
        //console.log("addButtomCartItems", addButtomCartItems)
        
        //botones de agregar otra unidad
        addButtomCartItems.forEach((cartBtn)=>{
            cartBtn.addEventListener('click', ()=>{
                console.log(cartBtn.id)
                console.log(data)
                data.forEach(item => {
                        if(item.id === cartBtn.id){
                            if(item.quantity < item.stock){
                                item.quantity = item.quantity+1
                            //console.log(item.quantity)
                            }
                        }
                        console.log(data)
                        localStorage.removeItem("Products in Cart");
                        localStorage.setItem('Products in Cart', JSON.stringify(data))
                        cart.textContent = ''
                        location. reload()
                        addCart(data); 
                })
                
                /* localStorage.removeItem("Products in Cart");
                localStorage.setItem('Products in Cart', JSON.stringify(data))
                location. reload() */
            })
        })
        }
        addButtom(data)

        //botones de comprar
        const purchaseButtom = (data) => {
            const purchaseBTN = document.getElementById("buttomPurchase")
            //console.log(purchaseBTN)

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