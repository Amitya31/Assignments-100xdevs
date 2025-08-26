"use strict";
function call(fn) {
    setTimeout(() => {
        const value = fn();
        console.log(value);
    }, 3000);
}
function sum() {
    let a = 2;
    let b = 3;
    return (a + b);
}
call(sum);
//--------------------------------------------------------------------------------------------------------------------------
//another way to pass a function with a return in it
// function call(fn:()=>{}){
//     fn();
// }
function cal(fn) {
    //here it takes only one function as an input but two types of parameterized functions
    //1. a:number=>number that is a number can be passed and it should return number 
    //2. a:string=>string that is a string can be passed and it should return string
    // declared signature => return type
}
//--------------------------------------------------------------------------------------------------------------------------
function greet(user) {
    console.log(user.name);
}
let man = {
    name: "santosh",
    Age: 4,
    address: {
        streetname: 'walbhatt road',
        city: 'mumbai'
    }
};
greet(man);
function User(user) {
    console.log(`fullname: ${user.firstname} ${user.lastname}`);
    console.log(`age: ${user.age}`);
}
let person = {
    firstname: 'Abcd',
    lastname: 'Yxz',
    age: 10
};
User(person);
const UserType = {
    name: 'Amit',
    department: 'ComputerScience',
    age: 12
};
const Grow = {
    name: 'amit',
    age: 4
};
class Rectangle {
    constructor(length, breadth) {
        this.length = length,
            this.breadth = breadth;
    }
}
const rect = new Rectangle(4, 5);
console.log(rect.length);
