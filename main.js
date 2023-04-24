function main() {
    let arithmeticOperation = {
        operator:null,
        operand1:"",
        operand2:"",
        setOperator: function(value) {
	    this.operator = value;
	},
	setOperand1: function(value) {
	    this.operand1 = value;
	},
	setOperand2: function(value) {
	    this.operand2 = value;
	},
	addCharToOperand: function(char) {
	    if (this.operator === null) {
		this.operand1 += char;
	    }
	    else {
		this.operand2 += char;
	    }
	},
	clearAll: function() {
	    this.setOperator(null);
	    this.setOperand1("");
	    this.setOperand2("");
	}
    };

    const elementIds = {
        display: document.getElementById("display"),
        buttons: {
            numbers: {
                zero: {id: document.getElementById("zero"), value: "0"},
                one: {id: document.getElementById("one"), value: "1"},
                two: {id: document.getElementById("two"), value: "2"},
                three: {id: document.getElementById("three"), value: "3"},
                four: {id: document.getElementById("four"), value: "4"},
                five: {id: document.getElementById("five"), value: "5"},
                six: {id: document.getElementById("six"), value: "6"},
                seven: {id: document.getElementById("seven"), value: "7"},
                eight: {id: document.getElementById("eight"), value: "8"},
                nine: {id: document.getElementById("nine"), value: "9"},
                decimal: {id: document.getElementById("decimal"), value: "."}
            },
            utility: {
                clearAll: document.getElementById("clear-all"),
                clear: document.getElementById("clear"),
                positiveNegative: document.getElementById("positive-negative")
            },
            operators: {
                equals: {id: document.getElementById("equals"), value: "="},
                add: {id: document.getElementById("add"), value: "+"},
                subtract: {id: document.getElementById("subtract"), value: "-"},
                multiply: {id: document.getElementById("multiply"), value: "*"},
                divide: {id: document.getElementById("divide"), value: "/"}
            }
        }
    };
    clearDisplayOnOperatorClick(elementIds, arithmeticOperation);
    addNumbersToDisplay(elementIds);
    addOperatorToDisplay(elementIds, arithmeticOperation);
    setOperatorOnClick(elementIds, arithmeticOperation);
    setOperandOnClick(elementIds, arithmeticOperation);
    readyNextOperationDisplay(elementIds, arithmeticOperation);
    readyNextOperationLogic(elementIds, arithmeticOperation);
}

function clearDisplayOnOperatorClick(elementIds, arithmeticOperation) {
    const operators = Object.values(elementIds.buttons.operators);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
	    if (arithmeticOperation.operator != null) {
		elementIds.display.textContent = "";
	    }
        });
    });
}

function addNumbersToDisplay(elementIds) {
    const numbers = Object.values(elementIds.buttons.numbers);
    numbers.forEach(number => {
        number.id.addEventListener("click", () => {
	    elementIds.display.textContent += number.value;
        });
    });
}

function addOperatorToDisplay(elementIds, arithmeticOperation) {
    operators = Object.values(elementIds.buttons.operators).filter(item => item !== elementIds.buttons.operators.equals);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
	    if (arithmeticOperation.operand1 != "" && arithmeticOperation.operator === null) {
	        elementIds.display.textContent += operator.value;
	    }
        });
    });
}

function setOperatorOnClick(elementIds, arithmeticOperation) {
    const operators = Object.values(elementIds.buttons.operators).filter(item => item.id !== elementIds.buttons.operators.equals.id);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
	    if (arithmeticOperation.operand1 != "" && arithmeticOperation.operator === null) {
		arithmeticOperation.setOperator(operator.value);
	    }
	});
    });
}

function setOperandOnClick(elementIds, arithmeticOperation) {
    const nums = Object.values(elementIds.buttons.numbers);
    nums.forEach(num => {
	num.id.addEventListener("click", () => {
	    arithmeticOperation.addCharToOperand(num.value);
        });
    });
}

function readyNextOperationDisplay(elementIds, arithmeticOperation) {
    const operators = Object.values(elementIds.buttons.operators);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
            if (arithmeticOperation.operator != null && arithmeticOperation.operand1 != "" && arithmeticOperation.operand2 != "") {
	        elementIds.display.textContent = operate(arithmeticOperation.operator, +arithmeticOperation.operand1, +arithmeticOperation.operand2);
		if (['+','-','*','/'].includes(operator.value)) {
		    elementIds.display.textContent += operator.value;
		}
	    }
        });
    });    
}

function readyNextOperationLogic(elementIds, arithmeticOperation) {
    let result;
    const operators = Object.values(elementIds.buttons.operators);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
            if (arithmeticOperation.operator != null && arithmeticOperation.operand1 != "" && arithmeticOperation.operand2 != "") {
	        result = operate(arithmeticOperation.operator, +arithmeticOperation.operand1, +arithmeticOperation.operand2).toString();
		arithmeticOperation.clearAll();
		arithmeticOperation.setOperand1(result);
		if (['+','-','*','/'].includes(operator.value)) {
		    arithmeticOperation.setOperator(operator.value);
		}
	    }
        });
    });    
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

main();