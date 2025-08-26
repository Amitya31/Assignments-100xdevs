function call(fn:Function){
    setTimeout(()=>{
      const value =  fn()
      console.log(value)
    },3000)
}

function sum(){
    let a:number = 2;
    let b:number = 3;
    return (a+b)
}

call(sum);

//--------------------------------------------------------------------------------------------------------------------------
//another way to pass a function with a return in it

// function call(fn:()=>{}){
//     fn();
// }
function cal(fn:((a:number)=>number) | ((a:string)=>string)){
    //here it takes only one function as an input but two types of parameterized functions
    //1. a:number=>number that is a number can be passed and it should return number 
    //2. a:string=>string that is a string can be passed and it should return string
    // declared signature => return type
}
//--------------------------------------------------------------------------------------------------------------------------

function greet(user:{
    name: string,
    Age: number,
    address: {
        streetname: string,
        city: string,
    }
}){
    console.log(user.name)
}

let man = {
    name: "santosh",
    Age: 4,
    address: {
        streetname:'walbhatt road',
        city: 'mumbai'
    }
}

greet(man);
//--------------------------------------------------------------------------------------------------------------------------------------
// Now the problem arises is if we want to add a new parameter or change the type of an element
// suppose if we have the power to define our custom type
// Thats when interface comes into the picture

interface UserType{
    firstname: string,
    lastname: string,
    age: number
}

function User(user: UserType){
    console.log(`fullname: ${user.firstname} ${user.lastname}`)
    console.log(`age: ${user.age}`)
}

let person = {
    firstname: 'Abcd',
    lastname: 'Yxz',
    age: 10
}

User(person);

//------------------------------------------------------------------------------------------------------------------------------------------

//Another way is Types but along with this it has more to offer
// lets first check how it works as interface

type Employee = {
    name: String,
    age: number
}

type Manager = {
    name: String,
    department: String
}

type Teamlead = Manager & Employee

const UserType: Teamlead = {
    name: 'Amit',
    department: 'ComputerScience',
    age: 12
}


// So this is what type can do it can define different types and can use by combining using & operator or by using | operator

interface News {
    name: String,
    age: Number
}

type Nest = String 

type Blah = News | Nest

const Grow: Blah = {
    name: 'amit',
    age: 4
}

// one can use an interface within an interface
// suppose for example 

interface Emp {
    name: string,
    age: string,
    address: {
        city: string,
        pincode: string,
    }
}

interface Office {
    address: Address
}

// here we are defingning address two times in two different interfaces instead we can creata a new interface Address and put it in the
// Emp and Office interface which will help to manipulate a single interface rather than multiple

interface Address{
    
    city: string,
    pincode?: string,
}

// suppose i want to make pincode required false than i can write "pincode?: string "

// class implemnting interface, as we know class in javascript
// interface Shape{
//     length: number,
//     breadth:number,
// }

// class Rectangle implements Shape{
//     length: number;
//     breadth: number; //one can add more fields

//     constructor(length: number,breadth: number){
//         this.length = length,
//         this.breadth = breadth
//     }
// }

// const rect = new Rectangle(4,5)
// console.log(rect.length);

// class extends class

class Model {
    dude(){
        console.log('Hi am dude')
    }
}

class Answer extends Model{
    width : number;
    height: number;

    constructor(width: number, height: number){ //another way is constructor(public width: number, public height: number) which doesnt require to declare it beforehand
        super();
        this.width =1;
        this.height = 2;
    }
}

