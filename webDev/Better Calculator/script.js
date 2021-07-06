const calc = {

    displayValue: '0',
    firstOp: null,
    secondOp: null,
    waitForSecOp: true,
    operator: null,

};

var background = document.body;

function updateDisplay() {

    const display = document.getElementById("value");
    display.innerHTML = calc.displayValue;
}

function inputDigit(digit) {

    const displayValue = calc.displayValue;

    calc.displayValue = displayValue === '0' ? digit : displayValue + digit;

    if (calc.waitForSecOp == false) {
        calc.secondOp = calc.displayValue;
    }

}

function addDecimal(dot) {

    if (!calc.displayValue.includes(dot)) {
        calc.displayValue += dot;
    }

    if (calc.waitForSecOp == false) {
        calc.secondOp = calc.displayValue;
    }
}

function clear() {
    calc.displayValue = '0';

    if (calc.waitForSecOp == false) {
        calc.waitForSecOp = true;
        calc.operator = null;
        calc.firstOp = null;
    }
}

function operator(operation) {

    if (calc.waitForSecOp == false) {
        return;
    }
    else {
        calc.operator = operation;
        calc.firstOp = calc.displayValue;
        clear();
        calc.waitForSecOp = false;
    }
}

function equals() {

    if (calc.displayValue == "50519") {
        background.style.background = "black";
    }

    if (calc.displayValue == "505")
        background.style.background = "";

    if (calc.waitForSecOp == true) {
        return;
    }

    switch (calc.operator) {

        case '+':
            calc.displayValue = parseFloat(calc.firstOp) + parseFloat(calc.secondOp);
            break;
        case '-':
            calc.displayValue = parseFloat(calc.firstOp) - parseFloat(calc.secondOp);
            break;
        case 'x':
            calc.displayValue = parseFloat(calc.firstOp) * parseFloat(calc.secondOp);
            break;
        case '/':
            calc.displayValue = parseFloat(calc.firstOp) / parseFloat(calc.secondOp);
            break;
        case '%':
            calc.displayValue = parseFloat(calc.firstOp) % parseFloat(calc.secondOp);
            break;
        default:
            return;
    }
    return;
}

const keys = document.querySelector('.buttons');
keys.addEventListener("click", (event) => {

    const target = event.target;

    if (!target.matches("button")) {
        return;
    }

    if (target.classList.contains('operator')) {
        operator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        clear();
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        addDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('equals')) {
        equals();
        updateDisplay();
        clear();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

