const hideBanner = ()=>{
    const serchBar = document.querySelector("#searchBar")
    const banner = document.querySelector(".bannerCarousel")
    const menuCategories = document.querySelector(".menu_container")

    serchBar.addEventListener("change", ()=>{
        if(screen.width > 875){
            if (serchBar.value.length != 0){
                banner.classList.add("animationBannerOut")
                setTimeout(()=>{
                    banner.classList.add("hidden")
                },1000)
                menuCategories.style.margin ="0"
            }else{
                banner.classList.remove("animationBannerOut")
                banner.classList.remove("hidden")
                banner.classList.add("animationBannerin")
                setTimeout(() => {
                    banner.classList.remove("animationBannerin")
                }, 1000);
            }
        }
        
    })
}

hideBanner()