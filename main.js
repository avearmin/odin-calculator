function main() {
    let arithmeticOperation = {
        operator:null,
        operand1:null,
        operand2:null
    };

    const elementIds = {
        display: document.getElementById("display"),
        buttons: {
            numbers: {
                zero: document.getElementById("zero"),
                one: document.getElementById("one"),
                two: document.getElementById("two"),
                three: document.getElementById("three"),
                four: document.getElementById("four"),
                five: document.getElementById("five"),
                six: document.getElementById("six"),
                seven: document.getElementById("seven"),
                eight: document.getElementById("eight"),
                nine: document.getElementById("nine"),
                decimal: document.getElementById("decimal")
            },
            utility: {
                clearAll: document.getElementById("clear-all"),
                clear: document.getElementById("clear"),
                positiveNegative: document.getElementById("positive-negative")
            },
            operators: {
                equals: document.getElementById("equals"),
                add: document.getElementById("add"),
                subtract: document.getElementById("subtract"),
                multiply: document.getElementById("multiply"),
                divide: document.getElementById("divide")
            }
        }
    };
}

function operate(operator, operand1, operand2) {
    if (operator === '+') {
        return add(operand1, operand2);
    }
    else if (operator === '-') {
        return subtract(operand1, operand2);
    }
    else if (operator === '*') {
        return multiply(operand1, operand2);
    }
    else if (operator === '/') {
        return divide(operand1, operand2);
    }
}

function add(operator1, operator2){
    return operator1 + operator2;
}

function subtract(operator1, operator2){
    return operator1 - operator2;
}

function multiply(operator1, operator2){
    return operator1 * operator2;
}

function divide(operator1, operator2){
    return operator1 / operator2;
}