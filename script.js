"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


function calc(a, b) {
    return (a +b);
}

console.log(calc(4, 5));
console.log(calc(3, 5));
console.log(calc(12, 5));