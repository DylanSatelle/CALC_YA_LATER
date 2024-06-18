let num1 = 0;
let num2 = 0;
let displayValue = "";
let runningTotal = "";
const mainDisplay = document.getElementById("calc-display");
let finalOperator = "";
let myArr = null;
let final = null;
let strFinal = null;

//call button listenrs.
btnEventListnerAssign();




//reset all values to start fresh
function reset () {
    runningTotal = "";
    mainDisplay.innerHTML = "";
    num1 = 0;
    num2 = 0;
    operand = "";
    displayValue = "";
    finalOperator = "";
    clickedValue = " ";
    myArr = null;
    final = null;
    strFinal = null;
    
}

function assignOperand (operator) {

    console.log("OP IS " + operator);
    finalOperator = operator;
    console.log("operator is = " + operator);

}

function btnEventListnerAssign() {
//add event listeners to all buttons that are numbers 
const test = document.querySelectorAll(".btnnumber");
for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function(e) {updateDisplay(this.value);});
}

// add event lister on all operands
const operands = document.querySelectorAll(".btnOperand")
for (let z = 0; z < operands.length; z++) {
    operands[z].addEventListener("click", function(e){assignOperand(this.value), updateDisplay(this.value)});
}


}

//function update display 
function updateDisplay (clickedValue) {
displayValue = displayValue + "" + clickedValue;
mainDisplay.innerHTML = displayValue;
console.log("YOUR DISPLAY TOTAL IS : " + displayValue);

}

function numLogic () {
    //REGEX pattern to remove operands
    let pattern = /[+\-*/]/;
    //split array using operand pattern
    myArr = displayValue.split(pattern);
    final = null;
    strFinal = "";
    const mainDisplay = document.getElementById("calc-display");


    console.log(myArr);
    console.log("SUBMITTED OPERATOR : " + finalOperator);
    if (finalOperator === "+") {

            for (let i = 0; i < myArr.length; i++) {
                //loop through array and add to final, turn final to string.. 
                myArr[i] = Number(myArr[i]);
                final += myArr[i]
                strFinal = final.toString(); 
        }
    }

    else if (finalOperator === "*") {

            for (let i = 1; i < myArr.length; i++) {
                //loop through array and add to final, turn final to string.. 
    
                myArr[i] = Number(myArr[i]);
                final = Number(myArr[0]);
                console.log(final *= myArr[i] );
                strFinal = final.toString(); 
    }
    }


    else if (finalOperator === "/") {

            for (let i = 1; i < myArr.length; i++)  {
                myArr[i] = Number(myArr[i]);
                final = Number(myArr[0]);
                console.log(final *= myArr[i] );
                strFinal = final.toString();

    }
}


mainDisplay.innerHTML = strFinal;
}





