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

// SELECT ALL NUMBERS AND ASSIGN ONCLICK

const numberButtons = document.querySelectorAll(".num-btn");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const num = button.textContent;
        display(num);
    });
});

// SELECT ALL OPERATORS AND ASSIGN ONCLICK

const opButtons = document.querySelectorAll(".op-btn");
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const screenText = document.querySelector(".screen-text");
        if (number1 === null && number2 === null) {
            if (displayNumber) {
                number1 = displayNumber;
            }
            if (!operatorArray.includes(screenText.textContent) && screenText.textContent != null) {
                number1 = screenText.textContent;
            }
            clearDisplay();
            operator = button.textContent;
            display(operator);
        }
    });
});

// ASSIGN EQUALS FUNCTION TO = BUTTON

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    const screenText = document.querySelector(".screen-text");
    console.log("equals pressed");
    if (number1 != null && operator != null) {
        number2 = displayNumber;
        screenText.textContent = operate(+number1, operator, +number2);
    }
    clear();


});

// ASSIGN CLEAR FUNCTION TO CLEAR BUTTON

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clear();
    const screenText = document.querySelector(".screen-text");
    screenText.textContent = "0";
});

function clear() {
    const screenText = document.querySelector(".screen-text");
    number1 = null;
    number2 = null;
    operator = null;
    displayNumber = null;
}


// DISPLAY THE VALUE ON SCREEN

function display(input) {
    const screenText = document.querySelector(".screen-text");
    if (operatorArray.includes(input)) {
        screenText.textContent = input;
        clearDisplay();
    } else {
        if (displayNumber === null) {
        displayNumber = input;
        } else {
            displayNumber = displayNumber + input;
        }
        screenText.textContent = displayNumber;
    }

}

function clearDisplay() {
    displayNumber = null;
}


// PROGRAM

let number1;
let number2;
let operator;
let displayNumber;
let operatorArray = ["+", '-', '/', '*'];


clear();



