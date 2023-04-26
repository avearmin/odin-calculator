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

    addCharToOperand(char) {
	    if (this.#operator === "") {
		    this.#operand1 += char;
	    }
	    else {
		    this.#operand2 += char;
	    }
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