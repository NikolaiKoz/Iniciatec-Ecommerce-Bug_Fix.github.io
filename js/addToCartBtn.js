const addEventCartBtn = ()=>{
    const addToCartBtn = document.querySelectorAll(".btn__card")

    addToCartBtn.forEach((cartBtn)=>{
        cartBtn.addEventListener('click', ()=>{
            console.log('lo logramos!')
        })
    })
}
