
const paintDOM = (data) => {
  const containerCards = document.getElementById("products__Container");
  const fragment = document.createDocumentFragment()
  data.forEach(product => {
    const cardArticle = document.createElement("article")
    cardArticle.classList.add("card__Container")
    cardArticle.innerHTML = `
    <section class="glass">
      <figure class="header__card">
        <img class="product__img" src=${product.imageProduct} alt="Product img">
      </figure>
      <figcaption>
        <p class="product__type">${product.category}</p>
        <h2 class="product__name">${product.titleProduct}</h2>
      </figcaption>
    </section>
    <footer class="footer__card">
      <p class="product__description">${product.descriptionProduct}</p>
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
  console.log("hello");
  try {
    const getFetch = await fetch("products.json");
    const getData = await getFetch.json();
    paintDOM(getData);
    addEventCartBtn()
  } catch (error) {
    console.log(error);
  }
};

getData();
