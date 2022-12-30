const showUserMenu = ()=>{
    const userMenuContainer = document.querySelector(".user_menu_container")
    const userMenuIcon = document.querySelector("#user_menu")

    userMenuIcon.addEventListener('click', ()=>{
        console.log('click!')
        if(userMenuContainer.classList.contains('hidden')){
            userMenuContainer.classList.remove('hidden')
        }else{
            userMenuContainer.classList.add('hidden')
        }
    })
}

showUserMenu()