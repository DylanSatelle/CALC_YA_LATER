//Pseudo code


let num1 = 0;
let num2 = 0;
let operand = "";
let displayValue = "";
let runningTotal = "";

btnEventListnerAssign();

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

//console.log(operate (15, "/", 5));

//reset all values to start fresh
function reset () {
    runningTotal = "";
    updateDisplay("");
    num1 = 0;
    num2 = 0;
    operand = "";
    displayValue = "";
}

function btnEventListnerAssign() {
//add event listeners to all buttons that are numbers or operators..
const test = document.querySelectorAll(".btnnumber");
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function(e) {updateDisplay(this.value);});
}
}


//function update display 
function updateDisplay (clickedValue) {
displayValue = displayValue + "" + clickedValue;
const mainDisplay = document.getElementById("calc-display");
mainDisplay.innerHTML = displayValue;
console.log("YOUR RUNNING TOTAL IS : " + displayValue);
}

function numLogic () {
    
}



//pseudo for logic 
/*

if operand is empty 
assign running total to num 1
if operand isnt empty
assign running total to num  2


*/

