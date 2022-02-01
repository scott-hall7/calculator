let lastNumber = "";
let currentNumber = "";
let lastOperator;
let currentOperator;
let opClicks = 0;
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");
let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let screen = document.getElementById("screen");
const displayButtons = document.getElementsByClassName("displaybtn");
const opButtons = document.getElementsByClassName("opbtn");

//Changes screen when number clicked
function screenChange()  {
    let display = this.getAttribute("data-id");
    if (screen.textContent === "0"){
        screen.textContent = `${display}`;
    } else if (screen.textContent.includes(".") && display === ".") {
        return
    } else {
        screen.textContent += `${display}`; 
    };
    console.log(display);
};
for (let i = 0; i < displayButtons.length; i++) {
    displayButtons[i].addEventListener('click', screenChange, false);
};

let operationChange = function()    {
    let operator = this.getAttribute("data-id");
    opClicks = opClicks + 1;
    if (opClicks <= 1)  {
        lastNumber = screen.textContent;
        lastOperator = operator;
        screen.textContent = "0";
    }
    else {
        currentNumber = screen.textContent;
        currentOperator = operator;
        lastNumber = operate(lastOperator, lastNumber, currentNumber);
        screen.textContent = lastNumber;
        lastOperator = currentOperator;
        console.log(lastNumber);
    }
}

for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', operationChange, false);
};

equals.addEventListener('click', evaluate);

function evaluate() {
    currentNumber = screen.textContent;
    let result = operate(lastOperator, lastNumber, currentNumber);
    screen.textContent = result;
}
 

function resetScreen()  {
    screen.textContent = "";
}

//Clears screen when button clicked.
function clearScreen()    {
    screen.textContent = 0;
    lastNumber = 0;
    currentNumber = 0;
    lastOperator = 0;
    currentOperator = 0;
    opClicks = 0;
};
clearButton.addEventListener('click', clearScreen);

function add(a, b)  {
    return a + b;
};

function subtract(a, b)  {
    return a - b;
};

function multiply(a, b)  {
    return a * b;
};

function divide(a, b)   {
    return a / b;
};

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator)   {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '÷':
            if (b === 0)    {
                alert("You can't do that here.");
                clearScreen();
            } else return divide(a, b);
    };
};


/*
//Backspaces when delete button clicked.
function deleteNumber() {
    screen.textContent = screen.textContent
    .toString()
    .slice(0, -1)
}
deleteButton.addEventListener('click', deleteNumber);
*/


/*if (lastNumber === "") {
    lastNumber = screen.textContent;
    lastOperator = operator;
    screen.textContent = "0";
} else if (lastNumber !== "" && currentNumber === "")   {
    currentNumber = screen.textContent;
    currentOperator = operator;
    lastNumber = operate(lastOperator, lastNumber, currentNumber);
    screen.textContent = lastNumber;
    lastOperator = currentOperator;
} else {
    currentNumber = screen.textContent;
    currentOperator = operator;
    lastNumber = operate(lastOperator, lastNumber, currentNumber);
    screen.textContent = lastNumber;
    lastOperator = currentOperator;
}
*/