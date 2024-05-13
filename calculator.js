//Variables for the caculator operations
let firstNum = undefined;
let secondNum = undefined;
let operator = undefined;

let holdVal = '';
let screenVal = 0;

//Functions for basic math operations
function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

function operate(num1, num2, op) {
    switch (op) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply (num1, num2);
        case '/': return divide (num1, num2);
        break;
    }; 
};

//DOM Manipulation
const screenText = document.querySelector('.screen-text');
const numButtons = document.querySelectorAll('.num-button');
const opButtons = document.querySelectorAll('.op-button');
const equalsButton = document.querySelector('.equals-button');
screenText.textContent = '0';

numButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        holdVal += btn.textContent;
        if (operator == undefined) {
            firstNum = Number(holdVal);
        } else {
            secondNum = Number(holdVal);
        };
        screenText.textContent = holdVal;
    });
});

opButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operator != undefined) {
            firstNum = holdVal = operate(firstNum, secondNum, operator);
        };
        operator = btn.textContent;
        holdVal = '';
    });
});

equalsButton.addEventListener("click", () => {
    if (firstNum == undefined) {
        console.log('Error - first number is undefined.')
    } else {
        firstNum = holdVal = operate(firstNum, secondNum, operator);
        screenText.textContent = holdVal;
    };
});
