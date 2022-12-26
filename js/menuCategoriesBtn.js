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