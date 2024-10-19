const buttonOne = document.querySelector(".btn1");
const buttonTwo = document.querySelector(".btn2");

function toggleColor1(){
    if(buttonOne.style.backgroundColor == 'red'){
        buttonOne.style.backgroundColor = 'green';
        buttonOne.textContent ="Turn Red";
    } else {
        buttonOne.style.backgroundColor = 'red';
        buttonOne.textContent = "Turn Green" ;
    }
    
}

function toggleColor2() {
    if(buttonTwo.style.backgroundColor == 'red'){
        buttonTwo.style.backgroundColor = 'green';
        buttonTwo.textContent ="Turn Red";
    } else {
        buttonTwo.style.backgroundColor = 'red';
        buttonTwo.textContent = "Turn Green" ;
    }
}