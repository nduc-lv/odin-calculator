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
let operator = '+'

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
