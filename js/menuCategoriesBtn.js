const obtainCategories = (data)=>{
    const productCategories = data.map(product => {
        return product.category
    })
    const listCategories = productCategories.reduce((array, categorie) => {
        if(!array.find(cat => cat == categorie))
            array.push(categorie)
        
        return array
    },[]);

    return listCategories
}

const renderCategories = (categories)=>{
    const containerCategories = document.getElementsByClassName('category_container')[0]
    categories.forEach(categorie => {
        containerCategories.innerHTML += `
        <li class="category_item">${categorie}</li>
        `
    });
}

const showCategories = ()=>{
    const menuBtn = document.getElementById('menu_icon')
    const categoriesContainer = document.getElementsByClassName('category_container')[0]
    menuBtn.addEventListener('click', ()=>{
        if(categoriesContainer.classList.contains('hidden'))
            categoriesContainer.classList.remove('hidden')
        else    
            categoriesContainer.classList.add('hidden')
    })        
}    



showCategories()