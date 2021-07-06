///cLEAN cODE LATER


var option = document.getElementById("operation");
var numOne = document.getElementById("numOne");
var numTwo = document.getElementById("numTwo");
var symbol = document.getElementById("symbol");
var output = document.getElementById("output");
var operation = ["add", "subtract", "division", "multiplication"];



option.addEventListener("input", setOperation); ///Gets function going

function setOperation() {

    if (option.value == operation[0]) {
        add(); //execute add
        option.addEventListener("input", setOperation); //when input is changed on scroll down restart
    } 

    if (option.value == operation[1]) {
        subtract();
        option.addEventListener("input", setOperation);
    }

    if (option.value == operation[2]) {
        divide();
        option.addEventListener("input", setOperation);
    }

    if (option.value == operation[3]) {
        multiply();
        option.addEventListener("input", setOperation);
    }

    return;
}


function add() {
    symbol.innerHTML = "+";
    numOne.addEventListener("input",add); //whenever add numpers are entered keep adding
    numTwo.addEventListener("input",add);
    let one = parseFloat(numOne.value) || 0;
    let two = parseFloat(numTwo.value) || 0;
    output.innerHTML = one + two;
}

function subtract() {
    symbol.innerHTML = "-";
    numOne.addEventListener("input",subtract);
    numTwo.addEventListener("input",subtract);
    let one = parseFloat(numOne.value) || 0;
    let two = parseFloat(numTwo.value) || 0;
    output.innerHTML = one - two;
}

function divide() {
    symbol.innerHTML = "/";
    numOne.addEventListener("input",divide);
    numTwo.addEventListener("input",divide);
    let one = parseFloat(numOne.value) || 0;
    let two = parseFloat(numTwo.value) || 0;
    output.innerHTML = one / two;
}

function multiply() {
    symbol.innerHTML = "x";
    numOne.addEventListener("input",multiply);
    numTwo.addEventListener("input",multiply);
    let one = parseFloat(numOne.value) || 0;
    let two = parseFloat(numTwo.value) || 0;
    output.innerHTML = one * two;
}