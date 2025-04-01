let studentArray = ["Rohit", "Roger", "Sarah", "Julia", "Tim"];
//console.log("hello", studentArray[0])
//console.log("hello", studentArray[1])
//console.log("hello", studentArray[2])

for (let i = 0; i < studentArray.length; i++) {
  console.log("Hello", studentArray[i]);
}

// string variables = use quotes
let myName = "rohit";
let myID = "s12345";
let myNewName = "Melbourne";
let myCity = "Pearth";

// number variables
let num = 10;
let num2 = 20;
let sum = num * num2;
console.log("total is", sum);

// + for addition as well as joining text
// -b for subtraction
// * for multiplication
// / division

const weather = "rainy";
const grade = 55;

if (grade >= 75) {
  console.log(" you got Distintion");
} else {
  console.log("you passed");
}
if (weather === "sunny") {
  console.log("today is sunny weather");
} else {
  console.log("too bad no sun today");
}

const msg = `todays weather ${weather}`;

// boolean variables - true or failse
let isThisEvening = false;
let isThisRmit = true;

//object variables {}
const myStudentDetails = {
  name: "Rohit",
  id: 1234,
  hometown: "Melbourne",
};

// let array = [2, 4, 6, 8, 10];
// console.log(array[0]);
// let student1 = "Rohit";
// let student2 = "Roger";
// console.log(student1, student2);
// let studentArray = ["Rohit", "Roger", "Sarah", "Julia", "Tim"];
// console.log(studentArray[2]);
// console.log(studentArray[0]);
// console.log(myStudentDetails)
// console.log("my hometown is", myStudentDetails.hometown);

// console.log("H1");
// console.log("How are you buddy ?");
// // this is a comment

// // i am declaring a varieable called myName to contain my name

// console.log("Hi, I am", myName);

// console.log("Hi, my student id is", myID);
// myName - "abcd";
// console.log("Hi, I am", myName);
// // let myNewName = prompt("What is your name");

// console.log("Hello", myNewName);

// console.log("Hello", myNewName, myCity);

// // if you know the vaule is not going to change, define it using const
// // or else use let
let a = 30;
{
  let a = 10;
  console.log("Hello", a);
}
console.log("Hello", a);
