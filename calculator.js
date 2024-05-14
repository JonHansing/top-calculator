//Variables for the caculator operations
let operator = undefined;
let holdVal = '';

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
    num1 = Number(num1);
    num2 = Number(num2);
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
screenText.textContent = 0;

numButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (screenText.textContent == '0' || operator != undefined) {
            screenText.textContent = btn.textContent;
        } else {
            screenText.textContent += btn.textContent;
        };
    });
});

opButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (operator == undefined) {
            holdVal = screenText.textContent
            operator = btn.textContent;
        } else {
            screenText.textContent = holdVal = operate(holdVal, screenText.textContent, operator);
            operator = btn.textContent;
        };

        if (btn.textContent == '=') operator = undefined;
        if (btn.textContent == 'AC') {
            screenText.textContent = 0;
            operator = undefined;
            holdVal = '';
        };
        if (btn.textContent == '.' && !screenText.textContent.includes('.'))
            screenText.textContent += '.';
    });
});