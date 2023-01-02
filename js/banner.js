/**
 * Gets the data of the banner pictures from API
 * @author: Rocio Morales
 */
const getDataBanner = async () => {
  try {
    const getFetch = await fetch("../banner.json");
    const getData = await getFetch.json();

    if (screen.width < 768) renderBanner(getData.mobile);
    else renderBanner(getData.desktop);
    carouselTransition()
    addEventCarouselDots()
    resizeBanner(getData)
  } catch (error) {
    console.log(error);
  }
};

/**
 * Renders the banner under the header
 * @param {Array} images An array of objects that contains the links to the images
 */
const renderBanner = (images) => {
  const carouselImagesContainer = document.getElementById(
    "carousel_img_container"
  );
  const dotsCotainer = document.getElementById("dots_container");
  const fragmentImg = document.createDocumentFragment();
  const fragmentDots = document.createDocumentFragment();

  for (let i = 0; i < images.length; i++) {
    const imageContainer = document.createElement("figure");
    const dot = document.createElement("li");
    imageContainer.classList.add("carouselImgContainer");
    imageContainer.innerHTML = `
            <img
            class="carouselImgContainer__img"
            src=${images[i].imgUrl}
            alt="Banners off"
            />
        `;
    fragmentImg.appendChild(imageContainer);
    if (i === 0) {
      dot.classList.add("carousel_dot", "activ");
    } else {
      dot.classList.add("carousel_dot");
    }
    fragmentDots.appendChild(dot);
  }
  carouselImagesContainer.appendChild(fragmentImg);
  dotsCotainer.appendChild(fragmentDots);
};

/**
 * Changes the array of images used in the banner depending on the screen size
 * @param {object} data An object that contains the desktop and mobile images arrays
 */
const resizeBanner = (data) => {
    window.addEventListener('resize', ()=>{
        const images = document.querySelectorAll(".carouselImgContainer__img");
        if (screen.width < 768) {
            images.forEach((image, i) => {
                image.src = data.mobile[i].imgUrl;
            });
        } else {
            images.forEach((image, i) => {
                image.src = data.desktop[i].imgUrl;
            });
        }
    })
};

let count = 1;

/**
 * Add event click on banner buttons
 */
const addEventCarouselDots = () => {
  const carouselBox = document.querySelector(".carousel_box");
  const carouselDots = document.querySelectorAll(".carousel_dot");

  carouselDots.forEach((dot, i) => {
    carouselDots[i].addEventListener("click", () => {
      count = i + 1;
      let position = i;
      let move = position * -(100 / 3);

      carouselBox.style.transform = `translateX(${move}%)`;

      carouselDots.forEach((dot, j) => {
        carouselDots[j].classList.remove("activ");
      });
      carouselDots[i].classList.add("activ");
      if (i === carouselDots.length - 1) {
        count = 0;
      }
    });
  });
};

/**
 * Set the transition in the banner pictures
 */
const carouselTransition = () => {
  const carouselBox = document.querySelector(".carousel_box");
  const carouselItem = document.querySelectorAll(".carouselImgContainer");
  const carouselDots = document.querySelectorAll(".carousel_dot");
  const interval = 3000;

  setInterval(function () {
    let move = count * -(100 / 3);
    carouselBox.style.transform = `translateX(${move}%)`;
    count++;
    if (count == carouselItem.length) {
      setTimeout(function () {
        carouselBox.style.transform = "translate(0%)";
        carouselBox.style.transition = "transform 0s";
        count = 1;
        carouselDots.forEach((dot, i) => {
          carouselDots[i].classList.remove("activ");
        });
        carouselDots[count - 1].classList.add("activ");
      }, 3000);
    }
    carouselDots.forEach((dot, i) => {
      carouselDots[i].classList.remove("activ");
    });
    carouselDots[count - 1].classList.add("activ");
  }, interval);
};

getDataBanner()