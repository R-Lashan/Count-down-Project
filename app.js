let number_div = document.querySelector(".num");
let number = 0;
let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
const value = document.querySelector(".value");
let _heading = document.querySelector(".heading");

decrease.addEventListener('click',  decreaseNum)
increase.addEventListener('click', increaseNum)
_heading.addEventListener('click', equalNUm);


function decreaseNum(){
      number--;
      number_div.innerHTML = number;
}

function increaseNum(){
    number++;
    number_div.innerHTML = number;
}

function equalNUm(){
    number = 0;
    number_div.innerHTML = number;
}

