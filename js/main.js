function main() {
    const arithmeticOperation = new ArithmeticOperation();
    const calculatorUI = new CalculatorUI();

    clearLogicOnClearAllClick(calculatorUI, arithmeticOperation);
    setOperatorOnClick(calculatorUI, arithmeticOperation);
    setOperandOnClick(calculatorUI, arithmeticOperation);
    addDecimalToOperandOnClick(calculatorUI, arithmeticOperation)
    toggleNegativeOnClick(calculatorUI, arithmeticOperation)
    removeCharFromOperation(calculatorUI, arithmeticOperation);
    readyNextOperationLogic(calculatorUI, arithmeticOperation);
    updateDisplay(calculatorUI, arithmeticOperation);
}

function clearLogicOnClearAllClick(calculatorUI, arithmeticOperation) {
    calculatorUI.getClearAll().addEventListener("click", () => {
        arithmeticOperation.clearAll();
    });
}

function setOperatorOnClick(calculatorUI, arithmeticOperation) {
    const operators = calculatorUI.getAllOperators().filter(operator => operator !== calculatorUI.getEquals());
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
	        if (arithmeticOperation.hasOperand1() && !arithmeticOperation.hasOperator()) {
		        arithmeticOperation.setOperator(calculatorUI.getValueById(operator));
	        }
	    });
    });
}

function setOperandOnClick(calculatorUI, arithmeticOperation) {
    const nums = calculatorUI.getAllNumbers().filter(num => num !== calculatorUI.getDecimal());
    nums.forEach(num => {
	    num.addEventListener("click", () => {
	        if (!arithmeticOperation.hasOperator()) {
                arithmeticOperation.addCharToOperand1(calculatorUI.getValueById(num));
            }
            else {
                arithmeticOperation.addCharToOperand2(calculatorUI.getValueById(num));
            }
        });
    });
}

function addDecimalToOperandOnClick(calculatorUI, arithmeticOperation) {
    calculatorUI.getDecimal().addEventListener("click", () => {
        if (arithmeticOperation.hasOperator() && arithmeticOperation.isOperand2DecimalFree()) {
            arithmeticOperation.addCharToOperand2(".");
        }
        else if (!arithmeticOperation.hasOperand2() && arithmeticOperation.isOperand1DecimalFree()) {
            arithmeticOperation.addCharToOperand1(".");
        }
    });
}

function toggleNegativeOnClick(calculatorUI, arithmeticOperation) {
    calculatorUI.getPositiveNegative().addEventListener("click", () => {
        if (arithmeticOperation.hasOperand2()) {
            arithmeticOperation.toggleNegativeOperand2();
        }
        else if (arithmeticOperation.hasOperand1()) {
            arithmeticOperation.toggleNegativeOperand1();
        }
    });
}

function removeCharFromOperation(calculatorUI, arithmeticOperation) {
    calculatorUI.getClear().addEventListener("click", () => {
        if (arithmeticOperation.hasOperand2()) {
            arithmeticOperation.removeCharFromOperand2();
        }
        else if (arithmeticOperation.hasOperator()) {
            arithmeticOperation.setOperator("");
        }
        else {
            arithmeticOperation.removeCharFromOperand1();
        }
    });
}

function readyNextOperationLogic(calculatorUI, arithmeticOperation) {
    const operators = calculatorUI.getAllOperators();
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            if (arithmeticOperation.hasAll() && !arithmeticOperation.hasDivideByZeroError()) {
	        let result = arithmeticOperation.operate().toString();
		arithmeticOperation.clearAll();
		arithmeticOperation.setOperand1(result);
		if (['+','-','*','/'].includes(calculatorUI.getValueById(operator))) {
		    arithmeticOperation.setOperator(calculatorUI.getValueById(operator));
		}
	    }
        });
    });    
}

function updateDisplay(calculatorUI, arithmeticOperation) {
    updateDisplayOnOperatorClick(calculatorUI, arithmeticOperation);
    updateDisplayOnNumberClick(calculatorUI, arithmeticOperation);
    updateDisplayOnUtilityClick(calculatorUI, arithmeticOperation);
}

function updateDisplayOnOperatorClick(calculatorUI, arithmeticOperation) {
    const operators = calculatorUI.getAllOperators();
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
	    if (arithmeticOperation.hasAll() && arithmeticOperation.hasDivideByZeroError()) {
		calculatorUI.getDisplay().textContent = "You just tried to do something very silly!";
	    }
	    else {
		calculatorUI.getDisplay().textContent = arithmeticOperation.getOperationString();
	    }
        });
    });    
}

function updateDisplayOnNumberClick(calculatorUI, arithmeticOperation) {
    const nums = calculatorUI.getAllNumbers();
    nums.forEach(num => {
        num.addEventListener("click", () => {
            calculatorUI.getDisplay().textContent = arithmeticOperation.getOperationString();
        });
    });    
}

function updateDisplayOnUtilityClick(calculatorUI, arithmeticOperation) {
    const utility = calculatorUI.getAllUtility();
    utility.forEach(util => {
        util.addEventListener("click", () => {
            calculatorUI.getDisplay().textContent = arithmeticOperation.getOperationString();
        });
    });
}

main();