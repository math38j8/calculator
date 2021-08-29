"use strict";

window.addEventListener("DOMContentLoaded", settingUp); //when page is loaded go to settingUp

let imputfield1 = document.querySelector("#firstnumber").value; //variable for first inputfield
let firstnumber;
let secondnumber;
let operator = document.querySelector("#operator").value; //variable operator for the value in the operator
let checkbox = document.querySelector("#doround"); //variable for checkbox to do rounding
let result;
let resultrounded;

document.querySelector("#clear").addEventListener("click", clearResults); //when clicked on clear go to clearResults

function settingUp() {
    console.log("settingUp"); //checking if the function is working
    document.querySelector("#calculate").addEventListener("click", readFirstNumber); //when clicked on calculate go to next function
}

function readFirstNumber() {
    console.log("readFirstNumber"); //checking if the function is working
    firstnumber = Number(document.querySelector("#firstnumber").value); //finds the value of the firstnumber
    readSecondNumber(); //calls next function
}

function readSecondNumber() {
    console.log("readSecondNumber"); //checking if the function is working
    secondnumber = Number(document.querySelector("#secondnumber").value); //finds the value of the secondnumber
    readOperator() //calls next function
}

function readOperator() {
    console.log("readOperator"); //checking if the function is working
    operator = document.querySelector("#operator").value; //variable operator is the value in the operator
    if (operator === "add") { //if operator is set to 'add' the result is firstnumber + secondnumber
        result = firstnumber + secondnumber;
        console.log (result);
    }

    else if (operator === "sub") { //if operator is set to 'sub' the result is firstnumber - secondnumber
        result = firstnumber - secondnumber;
        console.log (result);
    }

    else if (operator === "mul") { //if operator is set to 'mul' the result is firstnumber * secondnumber
        result = firstnumber * secondnumber;
        console.log (result);
    }

    else { //if operator is set to 'div' the result is firstnumber / secondnumber
        result = firstnumber / secondnumber;
        console.log (result);
    }

    checkIfRounding(); //calls the function checkIfRounding()
}

function checkIfRounding() {
if (checkbox.checked == true) { //if checkbox is checked 
    console.log("checkbox is checked");

    let decimals = document.querySelector("#decimals").value; //variable decimals which is the value of #decimals

    /* reference https://javascript.info/number#rounding */

    if (decimals == 0) { //if decimal is set to 0, result is the result
        resultrounded = Math.round(result)
        console.log(resultrounded)
    }
    else if (decimals == 1) { //if decimal is set to 2, result is the result with one decimal
        resultrounded = result.toFixed(1)
        console.log(resultrounded)
    }
    else if (decimals == 2) {
        resultrounded = result.toFixed(2)
        console.log(resultrounded)
    }
    else if (decimals == 3) {
        resultrounded = result.toFixed(3)
        console.log(resultrounded)
    }
    else if (decimals == 4) {
        resultrounded = result.toFixed(4)
        console.log(resultrounded)
    }
    else if (decimals == 5) {
        resultrounded = result.toFixed(5)
        console.log(resultrounded)
    }
    else if (decimals == 6) {
        resultrounded = result.toFixed(6)
        console.log(resultrounded)
    }
    else if (decimals == 7) {
        resultrounded = result.toFixed(7)
        console.log(resultrounded)
    }
    else {
        resultrounded = result.toFixed(8)
        console.log(resultrounded)
    }
    let viewresult = document.createElement("li"); //variable where we create element 'li'

document.querySelector("#results").appendChild(viewresult); //puts the variable viewresult in the #results

viewresult.append(resultrounded);
/*populate first result field*/
document.querySelector("input[id=firstnumber]").value = resultrounded; 
/* clean imput fields */
document.querySelector("input[id=secondnumber]").value = "";
}
/* inserting result at the bottom of the list https://developer.mozilla.org/en-US/docs/Web/API/Element/after */


else  {
    console.log("rounding no - checkbox unchecked");

let viewresult = document.createElement("li");
document.querySelector("#results").appendChild(viewresult);
viewresult.append(result)
/*populate first result field*/
document.querySelector("input[id=firstnumber]").value = result;
/* clean imput fields */
document.querySelector("input[id=secondnumber]").value = "";
}

scrollToBottom(); //calls function scrollToBottom

}

function clearResults () {
    console.log("clearing") //make sure the function works
    document.querySelector("input[id=firstnumber]").value = ""; //empty the input
    document.querySelector("input[id=secondnumber]").value = ""; //empty the input
    document.querySelector("#results").innerHTML = '';} //empty the results


    /* Code for scroll down in div from https://www.codegrepper.com/code-examples/javascript/make+overflow-y+go+to+bottom */

function scrollToBottom () {
        console.log("scrolling") //make sure the function works 
        let scroll = document.querySelector("#results");
        scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight;
     }