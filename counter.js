let minus = document.querySelector('.minus');
let number = document.querySelector('.number');
let plus = document.querySelector('.plus');
let displayedNumber = 0;

function updateNumber(){
    number.innerHTML = displayedNumber;
};

updateNumber();

minus.addEventListener("click",()=>{
    displayedNumber--;
    updateNumber();
}); 

plus.addEventListener("click", function(){
    displayedNumber++;
    updateNumber();
}) ;





