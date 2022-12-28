# BugFix

BugFix is an e-commerce project for the Inciatec - Accenture bootcamp. The team members chose the theme of a computer store, this page is inspired by e-sports and the gamer theme.

In this project we had to use HTML, CSS and vanilla JavaScript, but our educators gave us freedom to use any framework or library we wanted.

- The projects are carried out with hundreds of tools, languages and hours of work, but the most important thing for us is the passion for web development.

#

## Authors

|<img src="https://avatars.githubusercontent.com/u/113448691?v=4" width=200>|<img src="https://avatars.githubusercontent.com/u/107807752?v=4" width=200>|<img src="https://avatars.githubusercontent.com/u/99517293?v=4" width=200>|<img src="https://avatars.githubusercontent.com/u/98178495?v=4" width=200>|
|:-:|:-:|:-:|:-:|
|Gartner, Maximiliano|Heredia Valverde, Camila Solange|Morales, Maria del Rocío|Vallejos, Jose Luis|
|Frontend Developer|Frontend Developer|Frontend Developer|Scrum Master|
|[<img src="./assets/img/logo/Logo-Linkedin.png" width=100>](https://www.linkedin.com/in/maxi-gartner/)|[<img src="./assets/img/logo/Logo-Linkedin.png" width=100>](https://www.linkedin.com/in/camila-herediav/)|[<img src="./assets/img/logo/Logo-Linkedin.png" width=100>](https://www.linkedin.com/in/mar%C3%ADa-del-roc%C3%ADo-morales-72389011b/)|[<img src="./assets/img/logo/Logo-Linkedin.png" width=100>](https://www.linkedin.com/in/vallejosjoseluis/)|
|[<img src="./assets/img/logo/GitHub-Emblem.png" width=100>](https://github.com/maxi-gartner)|[<img src="./assets/img/logo/GitHub-Emblem.png" width=100>](https://github.com/camilaheredia9)|[<img src="./assets/img/logo/GitHub-Emblem.png" width=100>](https://github.com/Rochius)|[<img src="./assets/img/logo/GitHub-Emblem.png" width=100>](https://github.com/NikolaiKoz)|


#

## Technologies

- HTML
- CSS
- JavaScript


## Tools

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

## Libraries

- [JSDoc](https://jsdoc.app/)
- [SweetAlert2](https://sweetalert2.github.io/)

## Frameworks

- [Bootstrap](https://getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)
#
## How to use

1. Copy the repository link
2. Open the terminal and type `git clone` and paste the link
3. Open the project in your code editor
4. Verify that you have the extensions installed (Live Server)
5. Open the project with Live Server

## Saw the project all documentation here
click on the logo

[<img src="./assets/img/logo/bug_fix_logo.png" width=100>](./docs/index.html)

#

## About the project

<div>
    <img src="./assets/img/docs/imgDEsktop1.png">
</div>

### Home

* On the main page we find the products rendered in rendercards.js, in said file we find an asynchronous function that makes the request to a backend, from here we obtain the data of the products.

* The shearch bar is a filter that allows us to search for a product by name.

* The filter by category is a filter that allows us to filter the products by category.

 * The cards show an image, description, price and category, but also have hidden elements with a display none with the class name "delete", which are the product id and the stock. these elements are then used to manipulate the local Storage

 * The footer is rendered in the renderFooter.js file, in this file we find a function that makes the request to the authors.json file, from here we obtain the data of the authors and render it in the footer.

 * All the elements of the page are responsive, the page is adapted to mobile devices.

 ### Add to cart Button

- The add to cart button is a function that is called when the user clicks on the add to cart button, this function takes the data of the product and adds it to the local storage.

### Icon Cart

 - The icon cart is a function that is called when the user clicks on the icon cart, this function takes the data of the local storage.
    Shows an alert of the number of products in the cart.
    When the user clicks on the cart, a summary of the added products is rendered, showing the image, the title and the price for the number of products of the same type.

### Cart resume

- The cart resume is a function that is called when the user clicks on the icon cart, this function takes the data of the local storage.
    When the user clicks on the cart, a summary of the added products is rendered, showing the image, the title and the price for the number of products of the same type.
    From here you can modify the quantities of the products.

### Cart resume button

 - This button redirects the user to the purchase page.