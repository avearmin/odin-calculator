class CalculatorUI {
    #display = document.getElementById("display");
    #zero = document.getElementById("zero");
    #one = document.getElementById("one");
    #two = document.getElementById("two");
    #three = document.getElementById("three");
    #four = document.getElementById("four");
    #five = document.getElementById("five");
    #six = document.getElementById("six");
    #seven = document.getElementById("seven");
    #eight = document.getElementById("eight");
    #nine = document.getElementById("nine");
    #decimal = document.getElementById("decimal");
    #equals = document.getElementById("equals");
    #add = document.getElementById("add");
    #subtract = document.getElementById("subtract");
    #multiply = document.getElementById("multiply");
    #divide = document.getElementById("divide");
    #clearAll = document.getElementById("clear-all");
    #clear = document.getElementById("clear");
    #positiveNegative = document.getElementById("positive-negative");
    #allNumbers = document.querySelectorAll(".number");
    #allOperators = document.querySelectorAll(".operator");
    #allUtility = document.querySelectorAll(".utility");

    getDisplay() {
        return this.#display;
    }
    
    getZero() {
        return this.#zero;
    }

    getOne() {
        return this.#one;
    }

    getTwo() {
        return this.#two;
    }

    getThree() {
        return this.#three;
    }

    getFour() {
        return this.#four;
    }

    getFive() {
        return this.#five;
    }

    getSix() {
        return this.#six;
    }

    getSeven() {
        return this.#seven;
    }

    getEight() {
        return this.#eight;
    }

    getNine() {
        return this.#nine;
    }

    getDecimal() {
        return this.#decimal;
    }

    getEquals() {
        return this.#equals;
    }

    getAdd() {
        return this.#add;
    }

    getSubtract() {
        return this.#subtract;
    }

    getMultiply() {
        return this.#multiply;
    }

    getDivide() {
        return this.#divide;
    }

    getClearAll() {
        return this.#clearAll;
    }

    getClear() {
        return this.#clear;
    }

    getPositiveNegative() {
        return this.#positiveNegative;
    }

    getAllNumbers() {
        return Array.from(this.#allNumbers);
    }

    getAllOperators() {
        return Array.from(this.#allOperators);
    }

    getAllUtility() {
        return Array.from(this.#allUtility);
    }

    getValueById(id) {
        switch (id) {
            case this.getZero():
                return "0";
            case this.getOne():
                return "1";
            case this.getTwo():
                return "2";
            case this.getThree():
                return "3";
            case this.getFour():
                return "4";
            case this.getFive():
                return "5";
            case this.getSix():
                return "6";
            case this.getSeven():
                return "7";
            case this.getEight():
                return "8";
            case this.getNine():
                return "9";
            case this.getDecimal():
                return ".";
            case this.getEquals():
                return "=";
            case this.getAdd():
                return "+";
            case this.getSubtract():
                return "-";
            case this.getMultiply():
                return "*";
            case this.getDivide():
                return "/";
            default:
                return "";
            
        }

    }
}