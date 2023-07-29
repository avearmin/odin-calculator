class ArithmeticCalculator {
    constructor() {
        this.arithmeticOperation = new ArithmeticOperation();
        this.calculatorUI = new CalculatorUI();
    }

    start() {
        this.clearLogicOnClearAllClick();
        this.setOperatorOnClick();
        this.setOperandOnClick();
        this.addDecimalToOperandOnClick();
        this.toggleNegativeOnClick();
        this.removeCharFromOperation();
        this.readyNextOperationLogic();
        this.updateDisplay();
    }

    clearLogicOnClearAllClick() {
        this.calculatorUI.getClearAll().addEventListener("click", () => {
            this.arithmeticOperation.clearAll();
        });
    }

    setOperatorOnClick() {
        const operators = this.calculatorUI.getAllOperators().filter(operator => operator !== this.calculatorUI.getEquals());
        operators.forEach(operator => {
            operator.addEventListener("click", () => {
                if (this.arithmeticOperation.hasOperand1() && !this.arithmeticOperation.hasOperator()) {
                    this.arithmeticOperation.setOperator(this.calculatorUI.getValueById(operator));
                }
            });
        });
    }

    setOperandOnClick() {
        const nums = this.calculatorUI.getAllNumbers().filter(num => num !== this.calculatorUI.getDecimal());
        nums.forEach(num => {
            num.addEventListener("click", () => {
                if (!this.arithmeticOperation.hasOperator()) {
                    this.arithmeticOperation.addCharToOperand1(this.calculatorUI.getValueById(num));
                } else {
                    this.arithmeticOperation.addCharToOperand2(this.calculatorUI.getValueById(num));
                }
            });
        });
    }

    addDecimalToOperandOnClick() {
        this.calculatorUI.getDecimal().addEventListener("click", () => {
            if (this.arithmeticOperation.hasOperator() && this.arithmeticOperation.isOperand2DecimalFree()) {
                this.arithmeticOperation.addCharToOperand2(".");
            } else if (!this.arithmeticOperation.hasOperand2() && this.arithmeticOperation.isOperand1DecimalFree()) {
                this.arithmeticOperation.addCharToOperand1(".");
            }
        });
    }

    toggleNegativeOnClick() {
        this.calculatorUI.getPositiveNegative().addEventListener("click", () => {
            if (this.arithmeticOperation.hasOperand2()) {
                this.arithmeticOperation.toggleNegativeOperand2();
            } else if (this.arithmeticOperation.hasOperand1()) {
                this.arithmeticOperation.toggleNegativeOperand1();
            }
        });
    }

    removeCharFromOperation() {
        this.calculatorUI.getClear().addEventListener("click", () => {
            if (this.arithmeticOperation.hasOperand2()) {
                this.arithmeticOperation.removeCharFromOperand2();
            } else if (this.arithmeticOperation.hasOperator()) {
                this.arithmeticOperation.setOperator("");
            } else {
                this.arithmeticOperation.removeCharFromOperand1();
            }
        });
    }

    readyNextOperationLogic() {
        const operators = this.calculatorUI.getAllOperators();
        operators.forEach(operator => {
            operator.addEventListener("click", () => {
                if (this.arithmeticOperation.hasAll() && !this.arithmeticOperation.hasDivideByZeroError()) {
                    let result = this.arithmeticOperation.operate().toString();
                    this.arithmeticOperation.clearAll();
                    this.arithmeticOperation.setOperand1(result);
                    if (['+', '-', '*', '/'].includes(this.calculatorUI.getValueById(operator))) {
                        this.arithmeticOperation.setOperator(this.calculatorUI.getValueById(operator));
                    }
                }
            });
        });
    }

    updateDisplay() {
        this.updateDisplayOnOperatorClick();
        this.updateDisplayOnNumberClick();
        this.updateDisplayOnUtilityClick();
    }

    updateDisplayOnOperatorClick() {
        const operators = this.calculatorUI.getAllOperators();
        operators.forEach(operator => {
            operator.addEventListener("click", () => {
                if (this.arithmeticOperation.hasAll() && this.arithmeticOperation.hasDivideByZeroError()) {
                    this.calculatorUI.getDisplay().textContent = "You just tried to do something very silly!";
                } else {
                    this.calculatorUI.getDisplay().textContent = this.arithmeticOperation.getOperationString();
                }
            });
        });
    }

    updateDisplayOnNumberClick() {
        const nums = this.calculatorUI.getAllNumbers();
        nums.forEach(num => {
            num.addEventListener("click", () => {
                this.calculatorUI.getDisplay().textContent = this.arithmeticOperation.getOperationString();
            });
        });
    }

    updateDisplayOnUtilityClick() {
        const utility = this.calculatorUI.getAllUtility();
        utility.forEach(util => {
            util.addEventListener("click", () => {
                this.calculatorUI.getDisplay().textContent = this.arithmeticOperation.getOperationString();
            });
        });
    }
}