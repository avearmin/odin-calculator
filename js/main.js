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
    clearLogicOnClearAllClick(elementIds, arithmeticOperation);
    setOperatorOnClick(elementIds, arithmeticOperation);
    setOperandOnClick(elementIds, arithmeticOperation);
    toggleNegativeOnClick(elementIds, arithmeticOperation)
    removeCharFromOperation(elementIds, arithmeticOperation);
    readyNextOperationLogic(elementIds, arithmeticOperation);
    updateDisplay(elementIds, arithmeticOperation);
}

function clearLogicOnClearAllClick(elementIds, arithmeticOperation) {
    elementIds.buttons.utility.clearAll.addEventListener("click", () => {
        arithmeticOperation.clearAll();
    });
}

function setOperatorOnClick(elementIds, arithmeticOperation) {
    const operators = Object.values(elementIds.buttons.operators).filter(item => item.id !== elementIds.buttons.operators.equals.id);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
	        if (arithmeticOperation.getOperand1() != "" && arithmeticOperation.getOperator() === "") {
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

function toggleNegativeOnClick(elementIds, arithmeticOperation) {
    elementIds.buttons.utility.positiveNegative.addEventListener("click", () => {
        if (arithmeticOperation.getOperand2() != "") {
            arithmeticOperation.toggleNegativeOperand2();
        }
        else if (arithmeticOperation.getOperand1() != "") {
            arithmeticOperation.toggleNegativeOperand1();
        }
    });
}

function removeCharFromOperation(elementIds, arithmeticOperation) {
    elementIds.buttons.utility.clear.addEventListener("click", () => {
        if (arithmeticOperation.getOperand2() != "") {
            arithmeticOperation.removeCharFromOperand2();
        }
        else if (arithmeticOperation.getOperator() != "") {
            arithmeticOperation.setOperator("");
        }
        else {
            arithmeticOperation.removeCharFromOperand1();
        }
    });
}

function readyNextOperationLogic(elementIds, arithmeticOperation) {
    let result;
    const operators = Object.values(elementIds.buttons.operators);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
            if (arithmeticOperation.getOperator() != "" && arithmeticOperation.getOperand1() != "" && arithmeticOperation.getOperand2() != "") {
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

function updateDisplay(elementIds, arithmeticOperation) {
    updateDisplayOnOperatorClick(elementIds, arithmeticOperation);
    updateDisplayOnNumberClick(elementIds, arithmeticOperation);
    updateDisplayOnUtilityClick(elementIds, arithmeticOperation);
}

function updateDisplayOnOperatorClick(elementIds, arithmeticOperation) {
    const operators = Object.values(elementIds.buttons.operators);
    operators.forEach(operator => {
        operator.id.addEventListener("click", () => {
           elementIds.display.textContent = `${arithmeticOperation.getOperand1()} ${arithmeticOperation.getOperator()} ${arithmeticOperation.getOperand2()}`;
        });
    });    
}

function updateDisplayOnNumberClick(elementIds, arithmeticOperation) {
    const nums = Object.values(elementIds.buttons.numbers);
    nums.forEach(num => {
        num.id.addEventListener("click", () => {
           elementIds.display.textContent = `${arithmeticOperation.getOperand1()} ${arithmeticOperation.getOperator()} ${arithmeticOperation.getOperand2()}`;
        });
    });    
}

function updateDisplayOnUtilityClick(elementIds, arithmeticOperation) {
    const utility = Object.values(elementIds.buttons.utility);
    utility.forEach(util => {
        util.addEventListener("click", () => {
           elementIds.display.textContent = `${arithmeticOperation.getOperand1()} ${arithmeticOperation.getOperator()} ${arithmeticOperation.getOperand2()}`;
        });
    });
}

main();