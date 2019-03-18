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

// Blocks and IIFEs

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

//console.log(a, b); // error - cause they're not accessible from outside the block
console.log(c); // it doesn't occure variables

// ES5

(function() {
  var c = 3;
})();

//console.log(c);

// STRINGS

let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1987;

function calcAge(year) {
  return 2019 - year;
}

calcAge();

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ",so today he is " +
    calcAge(yearOfBirth) +
    "."
);

// ES6
console.log(`This is ${firstName} ${lastName}.
He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes("o"));
console.log(`${firstName} `.repeat(5));

// Arrow functions

const years = [1990, 1963, 2000, 1939];

// ES5

var ages5 = years.map(function(el) {
  return 2019 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2019 - el);

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;

  return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);
