// BASIC FUNCTIONS

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// OPERATORS

let number1;
let number2;
let operator;

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}


function display(number) {
    const screenText = document.querySelector(".screen-text");
    let displayText = number;
    screenText.textContent = displayText;
}

// SELECT ALL NUMBERS AND ASSIGN ONCLICK

const numberButtons = document.querySelectorAll(".num-btn");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const num = button.textContent;
        display(num);
    });
});

const opButtons = document.querySelectorAll(".op-btn");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const num = button.textContent;
        display(num);
    });
});