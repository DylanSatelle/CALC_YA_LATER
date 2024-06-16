//Pseudo code


let num1 = 0;
let num2 = 0;
let operand = "";

function add (num1, num2) {

    let total = num1+num2;

    return (total)
}

function subtract (num1, num2) {
    let total = num1-num2;

    return (total)
}

function multiply (num1, num2) {
    let total = num1 * num2;

    return (total)
}

function divide (num1, num2) {
    let total = num1 / num2;

    return (total);
}

function operate (num1, operand, num2) {
    if (operand === "+") {
        return (add(num1, num2));
    }
    else if (operand === "-") {
        return(subtract(num1, num2));
    }
    else if (operand === "/") {
        return(divide(num1, num2));
    }
    else if (operand === "*") {
        return (divide(num1, num2));
    }

    else {
        return ("ERROR!!");
    }
}

console.log(operate (15, "/", 5));

