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