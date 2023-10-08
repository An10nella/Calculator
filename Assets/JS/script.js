let calculatorOn = false;
let expression = '';
let lastOperator = ''; // Track the last operator used
let evaluated = false; // Track whether the expression was evaluated

const outputEl = document.getElementById("output");
const btnOnOff = document.getElementById("btnOnOff");
const btnCE = document.getElementById("btnCE");
const btnDel = document.getElementById("btnDel");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnPlus = document.getElementById("btnPlus");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btnMinus = document.getElementById("btnMinus");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnMultiply = document.getElementById("btnMultiply");
const btn0 = document.getElementById("btn0");
const btnDivide = document.getElementById("btnDivide");
const btnEquals = document.getElementById("btnEquals");

// Function to update the display
function updateDisplay() {
    outputEl.value = expression;
}

// Function to evaluate the expression safely
function evaluateExpression() {
    try {
        const result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            expression = 'Error';
        } else {
            expression = result.toString();
        }
    } catch (error) {
        expression = 'Error';
    }
    updateDisplay();
    evaluated = true;
}

// Event listener for the On/Off button
btnOnOff.addEventListener("click", function () {
    calculatorOn = !calculatorOn;
    if (calculatorOn) {
        btnOnOff.textContent = "Off";
        expression = '';
        lastOperator = '';
        updateDisplay();
    } else {
        btnOnOff.textContent = "On";
        expression = '';
        lastOperator = '';
        updateDisplay();
    }
});

// Event listener for numeric buttons (0-9)
function handleNumericButtonClick(number) {
    if (calculatorOn) {
        if (evaluated) {
            // Reset the expression after an evaluation
            expression = '';
            evaluated = false;
        }
        expression += number;
        updateDisplay();
    }
}

btn0.addEventListener("click", () => handleNumericButtonClick("0"));
btn1.addEventListener("click", () => handleNumericButtonClick("1"));
btn2.addEventListener("click", () => handleNumericButtonClick("2"));
btn3.addEventListener("click", () => handleNumericButtonClick("3"));
btn4.addEventListener("click", () => handleNumericButtonClick("4"));
btn5.addEventListener("click", () => handleNumericButtonClick("5"));
btn6.addEventListener("click", () => handleNumericButtonClick("6"));
btn7.addEventListener("click", () => handleNumericButtonClick("7"));
btn8.addEventListener("click", () => handleNumericButtonClick("8"));
btn9.addEventListener("click", () => handleNumericButtonClick("9"));

// Event listener for operator buttons
function handleOperatorButtonClick(operator) {
    if (calculatorOn) {
        if (lastOperator !== operator) {
            // Only add the operator if it's different from the last one
            expression += operator;
            lastOperator = operator;
            updateDisplay();
            evaluated = false;
        }
    }
}

btnPlus.addEventListener("click", () => handleOperatorButtonClick("+"));
btnMinus.addEventListener("click", () => handleOperatorButtonClick("-"));
btnMultiply.addEventListener("click", () => handleOperatorButtonClick("*"));
btnDivide.addEventListener("click", () => handleOperatorButtonClick("/"));

// Event listener for the "CE" (Clear Entry) button
btnCE.addEventListener("click", function () {
    if (calculatorOn) {
        expression = '';
        lastOperator = '';
        updateDisplay();
        evaluated = false;
    }
});

// Event listener for the "Del" (Delete) button
btnDel.addEventListener("click", function () {
    if (calculatorOn) {
        expression = expression.slice(0, -1);
        updateDisplay();
    }
});

// Event listener for the "=" button
btnEquals.addEventListener("click", function () {
    if (calculatorOn) {
        evaluateExpression();
    }
});