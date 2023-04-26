function main() {
    let arithmeticOperation = new ArithmeticOperation();

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
    clearDisplayOnClearAllClick(elementIds);
    addNumbersToDisplay(elementIds);
    addOperatorToDisplay(elementIds, arithmeticOperation);
    clearLogicOnClearAllClick(elementIds, arithmeticOperation);
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

function clearDisplayOnClearAllClick(elementIds) {
    elementIds.buttons.utility.clearAll.addEventListener("click", () => {
        elementIds.display.textContent = "";
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

function clearLogicOnClearAllClick(elementIds, arithmeticOperation) {
    elementIds.buttons.utility.clearAll.addEventListener("click", () => {
        arithmeticOperation.clearAll();
    });
}

function addOperatorToDisplay(elementIds, arithmeticOperation) {
    operators = Object.values(elementIds.buttons.operators).filter(item => item !== elementIds.buttons.operators.equals);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
	        if (arithmeticOperation.getOperand1() != "" && arithmeticOperation.getOperator() === null) {
	            elementIds.display.textContent += operator.value;
	        }
        });
    });
}

function setOperatorOnClick(elementIds, arithmeticOperation) {
    const operators = Object.values(elementIds.buttons.operators).filter(item => item.id !== elementIds.buttons.operators.equals.id);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
	        if (arithmeticOperation.getOperand1() != "" && arithmeticOperation.getOperator() === null) {
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
            if (arithmeticOperation.getOperator() != null && arithmeticOperation.getOperand1() != "" && arithmeticOperation.getOperand2() != "") {
	            elementIds.display.textContent = arithmeticOperation.operate();
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
            if (arithmeticOperation.getOperator() != null && arithmeticOperation.getOperand1() != "" && arithmeticOperation.getOperand2() != "") {
	            result = arithmeticOperation.operate().toString();
		        arithmeticOperation.clearAll();
		        arithmeticOperation.setOperand1(result);
		        if (['+','-','*','/'].includes(operator.value)) {
		            arithmeticOperation.setOperator(operator.value);
		        }
	        }
        });
    });    
}

main();