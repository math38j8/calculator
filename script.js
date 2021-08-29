"use strict";


let firstnumber ;
let secondnumber ;
window.addEventListener("DOMContentLoaded", settingUp);


function settingUp() {
    console.log("settingUp");
    document.querySelector("#calculate").addEventListener("click", readFirstNumber);
}

function readFirstNumber() {
    firstnumber = Number(document.querySelector("#firstnumber").value);
    console.log("readFirstNumber");
    console.log(firstnumber);

    readSecondNumber();
}

function readSecondNumber() {
    secondnumber = Number(document.querySelector("#secondnumber").value);
    console.log("readSecondNumber");
    console.log(secondnumber);   
    readOperator();
}

function readOperator() {
console.log("readOperator");
}