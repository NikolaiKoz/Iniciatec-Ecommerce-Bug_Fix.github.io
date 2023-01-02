// Camila Heredia
const sendBtn = document.getElementById("send-Btn");
const form = document.getElementById("contact-form");

const successMessage = document.getElementById("success-message");
const loader = document.getElementById("loader");

const msgName = document.getElementById("msg-name");
const msgEmail = document.getElementById("msg-email");
const msgEmptyFields = document.getElementById("msg-emptyFields");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // capturo valores en los campos del formulario
    let userName = document.getElementById("user-name").value;
    let userEmail = document.getElementById("user-email").value;
    let userSubject = document.getElementById("user-subject").value;
    let userMessage = document.getElementById("user-message").value;
    
    console.log("User name: ", userName);
    console.log("User email: ", userEmail);
    console.log("Subject: ", userSubject);
    console.log("Message: ", userMessage);

    
    const regexOnlyLetters = /[0-9$%&|<>#+-/@{}()!¿?]/g;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    const nameIsValid = !(regexOnlyLetters.test(userName)); 
    const emailIsValid = regexEmail.test(userEmail); 
    
    if (userName == "" || userEmail == "" || userMessage == "") {
        // si cualquier campo obligatorio esta vacío :
        msgEmptyFields.classList.remove("delete");
    }
    
    if (nameIsValid === true && emailIsValid === true && userName != "" && userEmail != "" && userMessage != "") {
        // si nombre y mail son válidos :
        loader.classList.remove("delete");
        msgName.classList.add("delete");
        msgEmail.classList.add("delete");
        msgEmptyFields.classList.add("delete");

        setTimeout(() => {
            loader.classList.add("delete");
            successMessage.classList.remove("delete");
            form.reset();
        }, 1000)
    }
    
    if (nameIsValid === false) {
        // si el nombre no es válido :
        msgName.classList.remove("delete");
    }
    
    if (emailIsValid === false) {
        // si el email no es válido :
        msgEmail.classList.remove("delete");
    }
})