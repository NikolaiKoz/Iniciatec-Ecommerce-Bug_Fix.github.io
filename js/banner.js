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


let count = 1

const addEventCarouselDots = ()=>{
    const carouselBox    = document.querySelector('.carousel_box')
    const carouselDots     = document.querySelectorAll('.carousel_dot')

    carouselDots.forEach( ( dot , i )=> {
        carouselDots[i].addEventListener('click',()=>{
            count = i+1
            let position  = i
            let move = position * - (100/4)

            carouselBox.style.transform = `translateX(${ move }%)`

            carouselDots.forEach( ( dot , i )=>{
                carouselDots[i].classList.remove('activ')
            })
            carouselDots[i].classList.add('activ')

        })
    })
}


const carouselTransition = ()=>{
    const carouselBox = document.querySelector('.carousel_box')
    const carouselItem = document.querySelectorAll('.carouselImgContainer')
    const carouselDots = document.querySelectorAll('.carousel_dot')
    const interval = 3000;

    setInterval(function(){
        let move = count * - (100/4)
        carouselBox.style.transform = `translateX(${ move }%)`
        count++
        if(count == carouselItem.length){
            console.log('entró')
            setTimeout(function(){
                carouselBox.style.transform = "translate(0%)";
                carouselBox.style.transition = "transform 0s";
                count=1;
                carouselDots.forEach( ( dot , i )=>{
                    carouselDots[i].classList.remove('activ')
                })
                carouselDots[count - 1].classList.add('activ')
            },1500)
        }
        carouselDots.forEach( ( dot , i )=>{
            carouselDots[i].classList.remove('activ')
        })
        carouselDots[count - 1].classList.add('activ')
    }, interval)
}

carouselTransition()
addEventCarouselDots()
