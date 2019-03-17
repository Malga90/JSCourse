// let and const

//ES5
var name5 = "Malga90";
var age5 = 28;
name5 = "Malga2000";
console.log(name5);

// ES6
const name6 = "Malga90";
let age6 = 28;
// name6 = "Malga90";
// console.log(name6);

// ES5

function driversLicence5(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }

  console.log(firstName, yearOfBirth);
}

driversLicence5(true);

// ES6

function driversLicence6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = "John";
  }

  console.log(firstName, yearOfBirth);
}

driversLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
