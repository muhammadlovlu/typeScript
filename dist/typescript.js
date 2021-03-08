"use strict";
let myMoney = 50;
myMoney = 40;
myMoney = 0;
let age = 50;
age = 30;
let club = 'Venizuella';
const famous = false;
let newFamous;
newFamous = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 75);
add(44, 98);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log("output", output);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const userOne = fullName('Mack', 'LOren');
const multiply = (x, y) => x * y;
console.log(multiply(20, 10));
let secondMultiply;
secondMultiply = (x, y) => x * y;
console.log(secondMultiply(5, 4));
