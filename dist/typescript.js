"use strict";
let myMoney = 50;
myMoney = 40;
myMoney = 0;
let age = 50;
age = 30;
let club = 'Venezuela';
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
const numbers = [1, 4, 5, 94, 22, 36];
numbers.push(77);
console.log(numbers);
numbers.push(56, 58);
console.log(numbers);
numbers.splice(3);
console.log(numbers);
const allFriends = ['Richard Rock', 'Raymond', 'Carl', 'Fred'];
console.log(allFriends);
let megaName = ' ';
for (let i = 0; i < allFriends.length; i++) {
    const friend = allFriends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("Largest Name:", megaName);
//object
let Player;
Player = {
    name: 'Rick Johnson',
    salary: 40000,
    home: 'Jackson Street, Risul gaam, 457',
    telePhone: `4744-544-665`,
    relationshipStatus: 'Single'
};
const messy = {
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4500000,
    wife: 'Julie',
    isPlaying: true,
};
const ronaldo = {
    name: 'Ronaldo gero',
    club: 'Derrel Club',
    salary: 1200000,
    wife: 'Rose',
    isPlaying: false
};
const robinson = {
    name: 'Tommy Robinson',
    club: 'Zilla',
    salary: 750000,
    wife: 'Carl',
    isPlaying: false
};
const Darrel = {
    name: 'Darrel Tom',
    club: 'Neffix',
    salary: 850000,
    isPlaying: true
};
const Richard = {
    name: 'Richard Jay',
    club: 'Bercelona',
    salary: 4000000,
    isPlaying: true
};
