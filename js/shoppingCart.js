console.log("js cart");
const data = JSON.parse(localStorage.getItem('Products in Cart'));
console.log(data);

const cart = document.getElementById("cart");
//console.log(cart);

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

const lessButtom = data => {
    const lessButtomCartItems = document.querySelectorAll(".subtractItem");
    //console.log("lessButtomCartItems", lessButtomCartItems)
    
    // botones de eliminar
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

    //botones de agregar otra unidad
    const addButtom = data => {
        const addButtomCartItems = document.querySelectorAll(".addItem");
        //console.log("addButtomCartItems", addButtomCartItems)
        
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
            console.log(purchaseBTN)

            purchaseBTN.addEventListener('click', ()=>{
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
            })
        }
        purchaseButtom(data)