class ArithmeticOperation {
    #operator;
    #operand1;
    #operand2;
    constructor(operator = "", operand1 = "", operand2 = "") {
        this.#operator = operator;
        this.#operand1 = operand1;
        this.#operand2 = operand2;
    }

    setOperator(operator) {
	    this.#operator = operator;
	}

    setOperand1(operand) {
	    this.#operand1 = operand;
	}

    setOperand2(operand) {
	    this.#operand2 = operand;
	}

    addCharToOperand1(char) {
		this.#operand1 += char;
	}

    addCharToOperand2(char) {
		this.#operand2 += char;
	}

    removeCharFromOperand1() {
        this.#operand1 = this.#operand1.slice(0, -1);
    }

    removeCharFromOperand2() {
        this.#operand2 = this.#operand2.slice(0, -1);
    }

    toggleNegativeOperand1() {
        if (this.#operand1.charAt(0) === "-") {
            this.#operand1 = this.#operand1.slice(1);
        }
        else {
            this.#operand1 = "-" + this.#operand1;
        }
    }

    toggleNegativeOperand2() {
        if (this.#operand2.charAt(0) === "-") {
            this.#operand2 = this.#operand2.slice(1);
        }
        else {
            this.#operand2 = "-" + this.#operand2;
        }
    }

    getOperator() {
        return this.#operator;
    }

    getOperand1() {
        return this.#operand1;
    }

    getOperand2() {
        return this.#operand2;
    }

    getOperationString() {
        return `${this.getOperand1()} ${this.getOperator()} ${this.getOperand2()}`;
    }

    hasOperator() {
        return this.getOperator() != "";
    }

    hasOperand1() {
        return this.getOperand1() != "" && this.getOperand1() != "-";
    }

    hasOperand2() {
        return this.getOperand2() != "" && this.getOperand2() != "-";
    }

    hasAll() {
        return this.hasOperator() && this.hasOperand1() && this.hasOperand2();
    }

    isOperand1DecimalFree() {
        return !this.getOperand1().includes(".");
    }

    isOperand2DecimalFree() {
        return !this.getOperand2().includes(".");
    }

    hasDivideByZeroError() {
	return this.getOperator() === '/' && +this.getOperand2() == 0;
    }

	clearAll() {
	    this.setOperator("");
	    this.setOperand1("");
	    this.setOperand2("");
	}

    operate() {
        if (this.#operator === '+') {
            return this.add();
        }
        else if (this.#operator === '-') {
            return this.subtract();
        }
        else if (this.#operator === '*') {
            return this.multiply();
        }
        else if (this.#operator === '/') {
            return this.divide();
        }
    }
    
    add(){
        return +this.#operand1 + +this.#operand2;
    }
    
    subtract(){
        return +this.#operand1 - +this.#operand2;
    }
    
    multiply(){
        return +this.#operand1 * +this.#operand2;
    }
    
    divide(){
        return +this.#operand1 / +this.#operand2;
    }
}