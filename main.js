function main() {
    let arithmeticOperation = {
        operator:null,
        operand1:null,
        operand2:null,
        setOperatorOnClick: function(elementIds) {
	    operators = Object.values(elementIds.buttons.operators).filter(item => item.id !== elementIds.buttons.operators.equals.id);
            operators.forEach(operator => {
                operator.id.addEventListener("click", () => {
		    this.operator = operator.value;
        	});
    	    });
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
    arithmeticOperation.setOperatorOnClick(elementIds);
}

//function addNumbersToDisplay(elementIds) {
//    numberIds = Object.values(elementIds.buttons.numbers);
//    numberIds.forEach(numberId => {
//        numberId.addEventListener("click", () => {
//            elementIds.display.textContent += numberId.textContent;
//        });
//    });
//}

//function addOperatorToDisplay(elementIds) {
//    operatorIds = Object.values(elementIds.buttons.operators).filter(item => item !== elementIds.buttons.operators.equals);
//    operatorIds.forEach(operatorId => {
//        operatorId.addEventListener("click", () => {
//            elementIds.display.textContent += operatorId.textContent;
//        });
//    });
//}

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