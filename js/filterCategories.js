/**
 * Adds the event click that filter the products by the selected categories
 * @author: Rocio Morales
 */
const addEventFilterCategories = ()=>{
    const categoryItems = document.querySelectorAll(".category_item")
    categoryItems.forEach(category => {
    category.addEventListener('click', ()=>{
        const activeCategories = [] 
        const products = document.querySelectorAll(".product__type")
        if (category.classList.contains("active_category")){
            category.classList.remove("active_category")
        }else{
            category.classList.add("active_category")
        }
        categoryItems.forEach(categoryItem => {
            if(categoryItem.classList.contains("active_category"))
                activeCategories.push(categoryItem.textContent.toLowerCase())
        })

        products.forEach(product =>{
            if(!activeCategories.includes(product.textContent.toLowerCase()))
                product.parentElement.parentElement.parentElement.classList.add("hidden")
            else
                product.parentElement.parentElement.parentElement.classList.remove("hidden")
            
        })

        products.forEach(product=>{
            if(activeCategories.length === 0)
                product.parentElement.parentElement.parentElement.classList.remove("hidden")
        })
    })
    });
}
