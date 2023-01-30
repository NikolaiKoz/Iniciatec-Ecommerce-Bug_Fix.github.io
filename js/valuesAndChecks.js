const regExp = {
    nameExp: /^[A-Z a-z]+$/,
    numberExp: /[^\d]/g,
    numberExpInp: /\d{1,4}/g,
    month: /^(0[0-9]|1[1-2]){2}$/,
    year: /^[0-9][0-2]{4}$/,
    cvc: /^[0-9]{3}$/,
};

// const data = {
//   cardName: /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/,
//   cardNumber: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/,
//   expMm: /0[1-9]|1[012]/,
//   expYy: /[2-3][0-9]/,
//   cvc: /^[0-9]{1,3}$/
// }




/*
function inputName(){
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = `Thank you ${cardholder.value}`;
    if(cardholder.value == ""){
        nameOnCard.innerHTML = cardholder.placeholder;
    }
}

  function validateName() {
      let cardholderExp = /^[A-Z a-z]+$/;
      let errorMsg = document.getElementById("errorMsg");
      if (cardholder.value.match(cardholderExp)) {
        errorMsg.textContent = "";
      } else {
        errorMsg.innerHTML = "Please enter cardholder name!";
      }
    }


*/
const cardName = document.getElementById('card_name');
const cardNameInput = document.getElementById('cardNameInput');

const cardNumber = document.getElementById('card_number');
const cardNumberInput = document.getElementById('cardNumberInput');

const cardMonth = document.getElementById('card_month');
const cardMonthInput = document.getElementById('cardMonthInput');

const cardYear = document.getElementById('card_year');
const cardYearInput = document.getElementById('cardYearInput');

const cardCvc = document.getElementById('card_cvc');
const cardCvcInput = document.getElementById('cardCvcInput');

const submitBtn = document.getElementById('submit_btn');

const complete = document.getElementById('thank');

const form = document.querySelector('form');

const continueBtn = document.getElementById('continue_btn');


function setCardNumber(e){
  cardNumber.innerText = format(e.target.value);
}

function setCardName(e){
  cardName.innerText = e.target.value;
}

function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
  cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
  cardCvc.innerText = e.target.value;
}

function handleSubmit(e){
  e.preventDefault();

  if(!cardNameInput.value){
    cardNameInput.classList.add('error');
    cardNameInput.parentElement.classList.add('error__messege');
  }else{
    cardNameInput.classList.remove('error');
    cardNameInput.parentElement.classList.remove('error__messege');
  }

  if(!cardNumberInput.value){
    cardNumberInput.classList.add('error');
    cardNumberInput.parentElement.classList.add('error__messege');
  }else{
    cardNumberInput.classList.remove('error');
    cardNumberInput.parentElement.classList.remove('error__messege');
  }

  if(!cardMonthInput.value){
    cardMonthInput.classList.add('error');
    cardMonthInput.parentElement.classList.add('error__messege');
  }else{
    cardMonthInput.classList.remove('error');
    cardMonthInput.parentElement.classList.remove('error__messege');
  }

  if(!cardYearInput.value){
    cardYearInput.classList.add('error');
    cardYearInput.parentElement.classList.add('error__messege');
  }else{
    cardYearInput.classList.remove('error');
    cardYearInput.parentElement.classList.remove('error__messege');
  }

  if(!cardCvcInput.value){
    cardCvcInput.classList.add('error');
    cardCvcInput.parentElement.classList.add('error__messege');
  }else{
    cardCvcInput.classList.remove('error');
    cardCvcInput.parentElement.classList.remove('error__messege');
  }

  if(cardNameInput.value && cardNameInput && cardMonthInput && cardYearInput && cardCvcInput){
    complete.classList.remove('hidden');
    form.classList.add('hidden');
  }
}


function format(s){
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}



cardNumberInput.addEventListener('keyup', setCardNumber);
cardNameInput.addEventListener('keyup', setCardName);
cardMonthInput.addEventListener('keyup', setCardMonth);
cardYearInput.addEventListener('keyup', setCardYear);
cardCvcInput.addEventListener('keyup', setCardCvc);

submitBtn.addEventListener('click', handleSubmit);

continueBtn.addEventListener('click', () => {
  localStorage.removeItem("Products in Cart");
  localStorage.removeItem("Total in Cart");
})