//Pseudo code


let num1 = 0;
let num2 = 0;
let operand = "";
let displayValue = "";
let runningTotal = "";
const mainDisplay = document.getElementById("calc-display");
let finalOperator = "";

btnEventListnerAssign();


function operate (num1, operand, num2) {
    if (operand === "+") {
        let finalnum1 = Number(num1);
        let finalnum2 = Number(num2);
        let sum = finalnum1+finalnum2;
        console.log("ANSWER : " + sum); 
        mainDisplay.innerHTML = "asdasdasd";


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
}

function btnEventListnerAssign() {
//add event listeners to all buttons that are numbers or operators..
const test = document.querySelectorAll(".btnnumber");
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function(e) {updateDisplay(this.value);});
}

const operators = document.querySelectorAll(".btnoperator");


}

//function to update display - without any sums in..




//function update display 
function updateDisplay (clickedValue) {
displayValue = displayValue + "" + clickedValue;
mainDisplay.innerHTML = displayValue;
console.log("YOUR DISPLAY TOTAL IS : " + displayValue);

}

function numLogic () {
    let myArr = displayValue.split("+" || "/" || "*" || "-");

    for (let i = 0; i < myArr.length; i++) {
        console.log("ARR ITEM : " + myArr + "ARR NUMBER : " + myArr[i]);
        num1 = Number(myArr[0]);
        console.log("NUM1 : " + num1);
        num2 = Number(myArr[1]);
        console.log("NUM2 : " + num2);
        
        let final =  num1 + num2;
        let strFinal = final.toString(); 

        const mainDisplay = document.getElementById("calc-display");
        mainDisplay.innerHTML = strFinal;
    
    }


   


}



//pseudo for logic 
/*

if operand is empty 
assign running total to num 1
if operand isnt empty
assign running total to num  2


*/

