//create basic math operators
function add(fisrtNumber, secondNumber){
    return fisrtNumber + secondNumber;
}
function subtract(fisrtNumber, secondNumber){
    return fisrtNumber - secondNumber;
}
function multiply(fisrtNumber, secondNumber){
    return fisrtNumber * secondNumber;
}
function divide(fisrtNumber, secondNumber){
    return fisrtNumber / secondNumber;
}

//create variables to store value
let fisrtNumber = 0;
let secondNumber = 0;
//create a varible to store operator
let operator = '+';

//create a function that take an operator and two numbers, return the result
function operate(fisrtNumber, secondNumber, operator){
    switch (operator) {
        case '+':
            return add(fisrtNumber, secondNumber);
        case '-': 
            return subtract(fisrtNumber, secondNumber);
        case '*':
            return multiply(fisrtNumber, secondNumber);
        case '/':
            return divide(fisrtNumber, secondNumber);
        default:
            break;
    }
}

//POPULATE THE DISPLAY
let displayArea = document.querySelector(".output");
//variable to store the display value
let numberDisplay = "";
//create an array of digit button reference
let digits = Array.from(document.querySelectorAll(".numpad button"));
//create function that populate the display when number buttons are clicked
for (let i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', () => {
        let digit = digits[i].textContent;
        numberDisplay += digit;
        displayArea.textContent = +numberDisplay;
    })
}


