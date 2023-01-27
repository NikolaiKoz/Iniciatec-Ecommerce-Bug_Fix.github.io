const body = document.getElementById("body");
const check = document.querySelector('#checkbox');
const label = document.querySelectorAll('.label');
const btn = document.querySelectorAll('.btn');
const inputs = document.querySelectorAll('.inputs');

check.addEventListener('change', function(){
    body.classList.toggle('dark');
    console.log(label);
    for (let index = 0; index < label.length; index++) {
        label[index].classList.toggle('ligth');

    }
    for (let index = 0; index < btn.length; index++) {
        btn[index].classList.toggle('shadow');

    }
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].classList.toggle('shadow');

    }
})