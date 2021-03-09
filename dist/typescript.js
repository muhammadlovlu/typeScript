"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _partner;
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
function getBonus(player) {
    return player.salary * 0.1;
}
const poorPlayer = {
    salary: 45000
};
getBonus(poorPlayer);
class Person {
    constructor(name, salary, father) {
        this.fullName = name;
        this.monthlySalary = salary;
        this._newpartner = name;
        this.fatherName = father;
    }
    getname() {
        return this.fullName;
    }
}
const sam = new Person('Samiel', 12000, "David");
console.log('Name:', sam.fullName);
console.log("Sam's Salary:", sam.monthlySalary);
const robin = new Person('Robin clark', 450012, "Carl Ben");
console.log("Robin's Full Name:", robin.fullName);
console.log("Robin's Monthly Salary:", robin.monthlySalary);
const david = new Person('David Wilson', 12000, "Ronny");
david.fatherName = "rossy";
console.log("David's Full Name:", david.fullName);
console.log("David Salary:", david.monthlySalary);
console.log("David's Father Name:", david.fatherName);
const ryan = new Person("Ryan Sean", 4500, " Nicolas");
console.log("Ryan's Full Name:", ryan.fullName);
console.log("Ryan Salary:", ryan.monthlySalary);
class PersonTwo {
    constructor(name, club, salary) {
        this.name = name;
        this.clubName = club;
        this.monthlySalary = salary;
    }
}
// how to declare private property in JS
class Secondperson {
    constructor(name) {
        _partner.set(this, void 0);
        __classPrivateFieldSet(this, _partner, name);
    }
}
_partner = new WeakMap();
class PrivatePropertyinTypeScript {
    constructor(name, wife, father) {
        this._wifeName = wife;
        this.fatherName = father;
    }
}
