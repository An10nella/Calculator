

const outputEl = document.getElementById("output");
const btnCEl = document.getElementById("btnC");
const btn_deleteEl = document.getElementById("btn_delete");
const btn_plusEl = document.getElementById("btn_plus");
const btn1El = document.getElementById("btn1");
const btn2El = document.getElementById("btn2");
const btn3El = document.getElementById("btn3");
const minusEl = document.getElementById("minus");
const btn4El = document.getElementById("btn4");
const btn5El = document.getElementById("btn5");
const btn6El = document.getElementById("btn6");
const multipleEl = document.getElementById("multiple");
const btn7El = document.getElementById("btn7");
const btn8El = document.getElementById("btn8");
const btn9El = document.getElementById("btn9");
const equalEl = document.getElementById("equal");
const btn0El = document.getElementById("btn0");
const powerEl = document.getElementById("power");
const divisionEl = document.getElementById("division");

let calculatorOn = false;
let expression = '';

// Function to update the calculator display
function updateDisplay() {
    outputEl.value = expression;
}

// Function to evaluate the expression safely
function evaluateExpression() {
    try {
        const result = eval(expression);
        if (isNaN(result)) {
            expression = 'Error';
        } else {
            expression = result.toString();
        }
    } catch (error) {
        expression = 'Error';
    }
    updateDisplay();
}

// Event listener for the "On/Off" button

const btnOnOff = document.getElementById("btnOnOff"); // Get the button element by its id
btnOnOff.addEventListener("click", function () {
    calculatorOn = !calculatorOn;
    if (calculatorOn) {
        btnOnOff.textContent = "Off";
        expression = '';
        updateDisplay();
    } else {
        btnOnOff.textContent = "On";
        expression = '';
        updateDisplay();
    }
});

// Event listener for numeric buttons (0-9)
function handleNumericButtonClick(number) {
    if (calculatorOn) {
        expression += number;
        updateDisplay();

    }
}

btn0El.addEventListener("click", () => handleNumericButtonClick("0"));
btn1El.addEventListener("click", () => handleNumericButtonClick("1"));
btn2El.addEventListener("click", () => handleNumericButtonClick("2"));
btn3El.addEventListener("click", () => handleNumericButtonClick("3"));
btn4El.addEventListener("click", () => handleNumericButtonClick("4"));
btn5El.addEventListener("click", () => handleNumericButtonClick("5"));
btn6El.addEventListener("click", () => handleNumericButtonClick("6"));
btn7El.addEventListener("click", () => handleNumericButtonClick("7"));
btn8El.addEventListener("click", () => handleNumericButtonClick("8"));
btn9El.addEventListener("click", () => handleNumericButtonClick("9"));

// Event listener for operator buttons
function handleOperatorButtonClick(operator) {
    if (calculatorOn) {
        expression += operator;
        updateDisplay();
    }
}

btn_plusEl.addEventListener("click", () => handleOperatorButtonClick("+"));
minusEl.addEventListener("click", () => handleOperatorButtonClick("-"));
multipleEl.addEventListener("click", () => handleOperatorButtonClick("*"));
powerEl.addEventListener("click", () => handleOperatorButtonClick("**"));
divisionEl.addEventListener("click", () => handleOperatorButtonClick("/"));

// Event listener for the "CE" (Clear Entry) button

btnCEl.addEventListener("click", function () {
    if (calculatorOn) {
        expression = '';
        updateDisplay();
    }
});

// Event listener for the "=" button
equalEl.addEventListener("click", function () {
    if (calculatorOn) {
        evaluateExpression();
    }
});