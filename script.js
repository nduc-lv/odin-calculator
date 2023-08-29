//create basic math operators
function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber){
    if (secondNumber == 0){
        return "Error";
    }
    return firstNumber / secondNumber;
}

//create variables to store value
let firstNumber = 0;
let secondNumber = 0;
//create a varible to store operator
let operator = '+';

//create a function that take an operator and two numbers, return the result
function operate(firstNumber, secondNumber, operator){
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-': 
            return subtract(firstNumber, secondNumber);
        case 'x':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            return firstNumber;
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

//DO THE OPERATION
//if there has been an operation
let operatorExist = 0;

const operators = Array.from(document.querySelectorAll(".operators button"));
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", () => {
        if (operatorExist){
            //ready for the new input
            numberDisplay = "";
            //store second number
            secondNumber = +displayArea.textContent;
            //calculate the privous operations and display the result
            firstNumber = operate(firstNumber, secondNumber, operator);
            firstNumber = parseFloat(firstNumber.toFixed(4));
            displayArea.textContent = firstNumber;
            //update operator
            operator = operators[i].textContent;
        }
        else{
            operatorExist = 1;
            //store first number
            firstNumber = +displayArea.textContent;
            numberDisplay = "";
            //update operator
            operator = operators[i].textContent;
        }
    })
}

//add equal function
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (operatorExist){
        //store second number
        secondNumber = +displayArea.textContent;
        //ready for new input
        numberDisplay = "";
        //calculate the result
        firstNumber = operate(firstNumber, secondNumber, operator);
        firstNumber = parseFloat(firstNumber.toFixed(4));
        //display the result
        displayArea.textContent = firstNumber;
        //clear the previous operation
        operatorExist = 0;
    }
    else{
        firstNumber = +displayArea.textContent;
        numberDisplay = "";
    }
})
//add clear function
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    firstNumber = 0;
    secondNumber = 0;
    operatorExist = 0;
    numberDisplay = "";
    displayArea.textContent = 0;
})
