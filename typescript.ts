let myMoney = 50;
myMoney = 40;
myMoney = 0; 


let age:number = 50;
age = 30;
let club:string = 'Venezuela';
const famous: boolean = false;
let newFamous:boolean;
newFamous = true;



function add(num1:number ,num2:number){
    return num1 + num2;

}
add(5,75);
add(44, 98);


function doubleItAndConsole(num:number):void{
    const result = num* 2;
        console.log(result)
}

const output = doubleItAndConsole(10);
console.log("output", output)


function fullName (firstName :string, lastName:string): string{
    return firstName + ' ' + lastName;
}


const userOne =fullName('Mack', 'LOren');


const multiply = (x:number,y:number):number => x*y;
console.log(multiply(20,10))


let secondMultiply: (x:number,y:number) => number;
secondMultiply = (x,y) => x*y ;
console.log(secondMultiply(5,4));

const numbers = [1,4,5,94,22,36];
numbers.push(77);
console.log(numbers);
numbers.push(56,58);
console.log(numbers);
numbers.splice(3);
console.log(numbers);


const allFriends:string[] =['Richard Rock', 'Raymond', 'Carl', 'Fred'];
console.log(allFriends);
let megaName:string = ' ';
for (let i = 0; i < allFriends.length; i++) {
    const friend = allFriends[i];
    if(friend.length>megaName.length){
        megaName = friend;
    }
}
console.log("Largest Name:", megaName);




//object
let Player: {
    name:string,
    salary: number,
    home:string,
    telePhone: string,
    relationshipStatus: string

}

Player = {
    name: 'Rick Johnson',
    salary:40000,
    home: 'Jackson Street, Risul gaam, 457',
    telePhone:`4744-544-665`,
    relationshipStatus: 'Single'
}


interface Player  {
    club : string,
    name: string,
    salary : number,
    wife?: string,
    isPlaying : boolean
}

const messy: Player = {
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4500000,
    wife : 'Julie',
    isPlaying: true,
}
const ronaldo : Player = {
    name :'Ronaldo gero',
    club: 'Derrel Club',
    salary: 1200000,
    wife: 'Rose',
    isPlaying: false
}
const robinson : Player = {
    name:'Tommy Robinson',
    club: 'Zilla',
    salary: 750000,
    wife: 'Carl',
    isPlaying: false
}
const Darrel : Player ={
    name: 'Darrel Tom',
    club: 'Neffix',
    salary:850000,
    isPlaying: true
}
const Richard : Player = {
    name: 'Richard Jay',
    club:'Bercelona',
    salary:4000000,
    isPlaying:true
}