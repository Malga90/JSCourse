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

// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

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

// arrow functions - 'this' kewyowrd

//ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector(".green"),
      addEventListener("click", function() {
        var str =
          "This is box number " + self.position + " and it is " + self.color;

        alert(str);
      });
  }
};

// box5.clickMe();

// es6

const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green"),
      addEventListener("click", () => {
        var str =
          "This is box number " + this.position + " and it is " + this.color;

        alert(str);
      });
  }
};

box6.clickMe();

function Person(name) {
  this.name = name;
}

// es5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is frinds with " + el;
    }.bind(this)
  );

  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("Jim").myFriends5(friends);

// es6

Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is frinds with ${el}`);

  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("Mike").myFriends6(friends);

// destructuring

//es5
var john = ["John", 26];
// var name = john[0];
// var age = john[1];

// es6
const [name, age] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
  firstNamee: "John",
  lastNamee: "Smith"
};

const { firstNamee, lastNamee } = obj;
console.log(firstNamee, lastNamee);

const { firstNamee: a, lastNamee: b } = obj;
console.log(a, b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

// Arrays in es6
const boxes = document.querySelectorAll(".box");

// es5
var boxes5Arr = Array.prototype.slice.call(boxes);
console.log(boxes5Arr);

boxes5Arr.forEach(function(element) {
  element.style.background = "blue";
});

//es6
const boxes6Arr = Array.from(boxes);

boxes6Arr.forEach(el => (el.style.background = "blue"));

//es5
// for (var i = 0; i < boxes5Arr.length; i++) {
//   if (boxes5Arr[i].className === "box blue") {
//     continue;
//   } else {
//     boxes5Arr[i].textContent = "I changed to blue!";
//   }
// }

//es6
for (const cur of boxes6Arr) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

// es5
var agesKids = [12, 4, 17, 6, 21];

var full = agesKids.map(function(cur) {
  return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(agesKids[full.indexOf(true)]);

//es6

console.log(agesKids.findIndex(cur => cur >= 18));
console.log(agesKids.find(el => el >= 18));

///////////////////////////////////////
// Spread operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 13, 58, 7);
console.log(sum1);

// es5
var ages = [18, 13, 58, 7];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//es6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyNovak = ["Marisol", "Esmeralda", "Buch"];
const bigFamily = [...familySmith, "Lily", ...familyNovak];
console.log(bigFamily);

const h = document.querySelector("h1");
const all = [h, ...boxes];
console.log(all);

all.forEach(el => (el.style.color = "hotpink"));

// Rest operator

// //es5
// function isFullAge5() {
//   var argsArr = Array.prototype.slice.call(arguments);
//   console.log(argsArr);

//   argsArr.forEach(function(el) {
//     console.log(2019 - el >= 18);
//   });
// }

// isFullAge5(1990, 2002, 1965);

// //es6

// function isFullAge6(...years) {
//   console.log(years);

//   years.forEach(el => console.log(2019 - el >= 18));
// }

// isFullAge6(1990, 2002, 1965);

//es5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  console.log(argsArr);

  argsArr.forEach(function(el) {
    console.log(2019 - el >= limit);
  });
}

isFullAge5(16, 1999, 2002, 1965);

//es6

function isFullAge6(limit, ...years) {
  console.log(years);

  years.forEach(el => console.log(2019 - el >= limit));
}

isFullAge6(21, 1990, 2002, 1965);

///////////////////////////////////////////
// Default parameters

//es5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : lastName;
  nationality === undefined ? (nationality = "British") : nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990);
console.log(john);

//es6
function SmithPerson6(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson6("John", 1990);
console.log(john);
