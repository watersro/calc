const screen = document.getElementById("screen")

// Stored values
let twoOrDisplay = 0;
let currentOperator = 0;
let oneOrStored = 0;
let result = 0;
let newPress = false;
let isPoint = false;

// mathematical operations
function add(num1, num2) {
    let result = num1 + num2;
    return result.toFixed(2);
}

function sub(num1, num2) {
    let result = num1 - num2;
    return result.toFixed(2);
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result.toFixed(2);
}

function divide(num1, num2) {
    let result = num1 / num2;
    return result.toFixed(2);
}

// evaulator function
function operator(num1, method, num2) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if (method === "add") {
        result = add(a, b);
    } else if (method === "sub") {
        result = sub(a, b);
    } else if (method === "multiply") {
        result = multiply(a, b);
    } else if (method === "divide") {
        if (a === 0 && b === 0) {
            result = 0;
            oneOrStored = 0;
            twoOrDisplay = 0;
            
        } else {
            result = divide(a, b);
        }
    };
    return result;
};

// clear the screen
function clearScreen() {
    screen.innerHTML = ('<p class="numbers"></P>');
};

// append a number to the screen
function appendNum(buttonId) {
    let screenPara = screen.querySelector(".numbers");
    let text = document.createTextNode(`${buttonId}`);
    screenPara.appendChild(text);
};

// reset using button click
const buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", () => {
    clearScreen();
    twoOrDisplay = 0;
    currentOperator = 0;
    oneOrStored = 0;
    result = 0;
    isPoint = false;
});

const buttonPoint = document.getElementById("point");
buttonPoint.addEventListener("click", () => {
    if (isPoint === false && newPress === false) { 
    appendNum(".");
    twoOrDisplay += ".";
    isPoint = true;
    } else if ( isPoint === false && newPress === true) {
        clearScreen();
        newPress = false;
        appendNum(".");
        twoOrDisplay += "."
        isPoint = true;
    }
})

// number buttons
const numButtons = document.querySelectorAll(".num-button");
numButtons.forEach((button) => {
	
	button.addEventListener("click", () => {
        let buttonId = parseInt(button.id);
        if (newPress === false) {
            appendNum(buttonId);
            if (twoOrDisplay === 0) {
                twoOrDisplay = buttonId.toString();
            } else {
                twoOrDisplay += buttonId.toString();
            }
        } else if (newPress === true) {
            clearScreen();
            newPress = false;
            appendNum(buttonId);
            if (twoOrDisplay === 0) {
                twoOrDisplay = buttonId.toString();
            } else {
                twoOrDisplay += buttonId.toString();
            }
        }
    });
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    if (typeof(currentOperator) !== "string") {
        clearScreen();
        currentOperator = "add";
        oneOrStored = twoOrDisplay;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
    } else if (typeof(currentOperator) === "string") {
        clearScreen();
        operator(oneOrStored, currentOperator, twoOrDisplay);
        appendNum(result);
        oneOrStored = result;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
        currentOperator = "add";
    }
});

const subButton = document.getElementById("sub");
subButton.addEventListener("click", () => {
    if (typeof(currentOperator) !== "string") {
        clearScreen();
        currentOperator = "sub";
        oneOrStored = twoOrDisplay;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
    } else if (typeof(currentOperator) === "string") {
        clearScreen();
        operator(oneOrStored, currentOperator, twoOrDisplay);
        appendNum(result);
        oneOrStored = result;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
        currentOperator = "sub";
    }
});

const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", () => {
    if (typeof(currentOperator) !== "string") {
        clearScreen();
        currentOperator = "multiply";
        oneOrStored = twoOrDisplay;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
    } else if (typeof(currentOperator) === "string") {
        clearScreen();
        operator(oneOrStored, currentOperator, twoOrDisplay);
        appendNum(result);
        oneOrStored = result;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
        currentOperator = "multiply";
    }
});

const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", () => {
    if (typeof(currentOperator) !== "string") {
        clearScreen();
        currentOperator = "divide";
        oneOrStored = twoOrDisplay;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
    } else if (typeof(currentOperator) === "string") {
        clearScreen();
        operator(oneOrStored, currentOperator, twoOrDisplay);
        appendNum(result);
        oneOrStored = result;
        twoOrDisplay = 0;
        newPress = true;
        isPoint = false;
        currentOperator = "divide";
    }
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
    clearScreen();
    operator(oneOrStored, currentOperator, twoOrDisplay);
    appendNum(result);
    isPoint = false;
});