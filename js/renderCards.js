/**
 *
 * @param {Array} data Array of objects that contains the information of each product
 */
const paintDOM = (data) => {
  const containerCards = document.getElementById("products__Container");
  const fragment = document.createDocumentFragment()
  data.forEach(product => {
    const cardArticle = document.createElement("article")
    cardArticle.classList.add("card__Container")

    const idCard = deleteDiacritics(product.titleProduct);
    cardArticle.id = idCard.toLowerCase().replaceAll(" ", "-");

    cardArticle.innerHTML = `
    <section class="glass">
      <figure class="header__card">
        <img class="product__img" src=${product.imageProduct} alt="Product img">
      </figure>
      <figcaption>
        <p class="product__type">${product.category}</p>
        </figcaption>
        
    </section>
    <footer class="footer__card">
      <p class="product__stock delete">${product.stock}</p>
      <p class="product__id delete">${product.idProduct}</p>
      <div class="info_card">
        <h2 class="product__name">${product.titleProduct}</h2>
        <p class="product__description">${product.descriptionProduct}</p>
      </div>
      <div class="container__PriceAndBtn">
        <h2 class="product__price">$${product.price}</h2>
        <button class="btn__card">Add to cart</button>
      </div>
    </footer>`

    fragment.appendChild(cardArticle)
  });

  containerCards.appendChild(fragment)
};

const getData = async () => {
  try {
    const getFetch = await fetch("products.json");
    const getData = await getFetch.json();
    paintDOM(getData);
    addEventCartBtn();
    searchProducts();
    renderCategories(obtainCategories(getData))
    addEventFilterCategories()
  } catch (error) {
    console.log(error);
  }
};

getData();


// función que elimina los acentos y diéresis
const deleteDiacritics = (text) => {
  return text.toLowerCase().normalize('NFD')
   .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
   .normalize();
}