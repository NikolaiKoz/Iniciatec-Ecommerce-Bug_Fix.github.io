const bannerImages = [
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/74.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/117.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/126.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/135.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/136.png'
    }
]


const bannerImagesMobile = [
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/74-mob.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/117-mob.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/126-mob.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/135-mob.png'
    },
    {
        'imgUrl': 'https://www.fullh4rd.com.ar/adminrgb/img/banner/136-mob.png'
    }
]


const renderBanner = (images)=>{
    const carouselImagesContainer = document.getElementById("carousel_img_container")
    const dotsCotainer = document.getElementById("dots_container")
    const fragmentImg = document.createDocumentFragment()
    const fragmentDots = document.createDocumentFragment()

    images.forEach((image, i)=>{
        const imageContainer = document.createElement("figure")
        const dot = document.createElement("li")
        imageContainer.classList.add("carouselImgContainer")
        imageContainer.innerHTML = `
            <img
            class="carouselImgContainer__img"
            src=${image.imgUrl}
            alt="Banners off"
            />
        `
        fragmentImg.appendChild(imageContainer)
        if (i===0){
            dot.classList.add("carousel_dot","activ")
        }else{
            dot.classList.add("carousel_dot")
        }
        fragmentDots.appendChild(dot)
    })
    carouselImagesContainer.appendChild(fragmentImg)
    dotsCotainer.appendChild(fragmentDots)
}

const resizeBanner = ()=>{
    const images = document.querySelectorAll(".carouselImgContainer__img")
    console.log(images)
    if (screen.width<768){
        images.forEach((image,i) => {
            image.src = bannerImagesMobile[i].imgUrl
        });
    }
    else{
        images.forEach((image,i) => {
            image.src = bannerImages[i].imgUrl
        });
    }
}


let count = 1

const addEventCarouselDots = ()=>{
    const carouselBox    = document.querySelector('.carousel_box')
    const carouselDots     = document.querySelectorAll('.carousel_dot')

    carouselDots.forEach( ( dot , i )=> {
        carouselDots[i].addEventListener('click',()=>{

            count = i+1
            let position  = i
            let move = position * - (100/5)

            carouselBox.style.transform = `translateX(${ move }%)`

            carouselDots.forEach( ( dot , j )=>{
                carouselDots[j].classList.remove('activ')
            })
            carouselDots[i].classList.add('activ')
            if(i === carouselDots.length-1){
                count = 0
            }

        })
    })
}

const carouselTransition = ()=>{
    const carouselBox = document.querySelector('.carousel_box')
    const carouselItem = document.querySelectorAll('.carouselImgContainer')
    const carouselDots = document.querySelectorAll('.carousel_dot')
    const interval = 3000;

    setInterval(function(){
        let move = count * - (100/5)
        carouselBox.style.transform = `translateX(${ move }%)`
        count++
        if(count == carouselItem.length){
            setTimeout(function(){
                carouselBox.style.transform = "translate(0%)";
                carouselBox.style.transition = "transform 0s";
                count=1;
                carouselDots.forEach( ( dot , i )=>{
                    carouselDots[i].classList.remove('activ')
                })
                carouselDots[count - 1].classList.add('activ')
            },3000)
        }
        carouselDots.forEach( ( dot , i )=>{
            carouselDots[i].classList.remove('activ')
        })
        carouselDots[count - 1].classList.add('activ')
    }, interval)
}

if (screen.width<768)
    renderBanner(bannerImagesMobile)
else
    renderBanner(bannerImages)

carouselTransition()
addEventCarouselDots()
window.addEventListener('resize', resizeBanner)
