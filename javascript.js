//Pseudo code


let num1 = 0;
let num2 = 0;
let operand = "";
let displayValue = "";

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

//add event listeners to all buttons

const test = document.querySelectorAll("button");
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function(e) {updateDisplay(this.value);});
}

//function updateDisplay (clickedNumber) {
    //const mainDisplay = document.getElementsByClassName("calculator-display");
  //  mainDisplay.innerHTML = "33";
//}

function updateDisplay (clickedValue) {
const mainDisplay = document.getElementById("calc-display");
mainDisplay.innerHTML = clickedValue;

}