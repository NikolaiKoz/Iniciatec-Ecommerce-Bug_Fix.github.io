// Camila Heredia
const searchProducts = () => {
    const searchBar = document.getElementById("searchBar");

    const productCards = document.querySelectorAll(".card__Container");

    searchBar.addEventListener("keyup", () => {
        const userSearch = searchBar.value.toLowerCase().replaceAll(" ", "-");
       
        productCards.forEach((productCard) => {
            const idCard = productCard.id;

            if (idCard.includes(userSearch)) {
                productCard.classList.remove("delete");
            } else {
                productCard.classList.add("delete");
            }

        })

    })
}