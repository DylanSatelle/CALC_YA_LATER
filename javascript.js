//Pseudo code


let num1 = 0;
let num2 = 0;
let displayValue = "";
let runningTotal = "";
const mainDisplay = document.getElementById("calc-display");
let finalOperator = "";


btnEventListnerAssign();
numLogic();
//console.log(operate (15, "/", 5));



//reset all values to start fresh
function reset () {
    runningTotal = "";
    updateDisplay("");
    num1 = 0;
    num2 = 0;
    operand = "";
    displayValue = "";
    finalOperator =- "";
    
}

function assignOperand (operator) {

    console.log("OP IS " + operator);
    finalOperator = operator;
    console.log("operator is = " + operator);

}

function btnEventListnerAssign() {
//add event listeners to all buttons that are numbers or operators..
const test = document.querySelectorAll(".btnnumber");
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function(e) {updateDisplay(this.value);});
}

const operands = document.querySelectorAll(".btnOperand")
for (let z = 0; z < operands.length; z++) {
    operands[z].addEventListener("click", function(e){assignOperand(this.value), updateDisplay(this.value)});
}



}




//function to update display - without any sums in..




//function update display 
function updateDisplay (clickedValue) {
displayValue = displayValue + "" + clickedValue;
mainDisplay.innerHTML = displayValue;
console.log("YOUR DISPLAY TOTAL IS : " + displayValue);

}

function numLogic () {
    let pattern = /[+\-*/]/;
    let myArr = displayValue.split(pattern);
    let final = 0;
    let strFinal = "";
    const mainDisplay = document.getElementById("calc-display");


    console.log(myArr);
    console.log("SUBMITTED OPERATOR : " + finalOperator);
    if (finalOperator === "+") {

            for (let i = 0; i < myArr.length; i++) {
                console.log("ARR ITEM : " + myArr + "ARR NUMBER : " + myArr[i]);
                num1 = Number(myArr[0]);
        console.log("NUM1 : " + num1);
        num2 = Number(myArr[1]);
        console.log("NUM2 : " + num2);
        
        final =  num1 + num2;
        strFinal = final.toString(); 

    
        }
    }

    else if (finalOperator === "*") {

        for (let i = 0; i < myArr.length; i++) {
            console.log("ARR ITEM : " + myArr + "ARR NUMBER : " + myArr[i]);
            num1 = Number(myArr[0]);
    console.log("NUM1 : " + num1);
    num2 = Number(myArr[1]);
    console.log("NUM2 : " + num2);
    
    final =  num1 * num2;
    strFinal = final.toString(); 
    }
}


else if (finalOperator === "/") {

    for (let i = 0; i < myArr.length; i++) {
        console.log("ARR ITEM : " + myArr + "ARR NUMBER : " + myArr[i]);
        num1 = Number(myArr[0]);
console.log("NUM1 : " + num1);
num2 = Number(myArr[1]);
console.log("NUM2 : " + num2);

final =  num1 / num2;
strFinal = final.toString(); 
}
}

mainDisplay.innerHTML = strFinal;

}



//pseudo for logic 
/*

if operand is empty 
assign running total to num 1
if operand isnt empty
assign running total to num  2


*/