// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person  = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1947, 'Personal coach');
// var mark = new Person('Mark', 1981, 'designer');

// john.calculateAge(); 
// jane.calculateAge(); 
// mark.calculateAge(); 

// console.log(john.lastName);
// console.log(john.lastName);
// console.log(john.lastName);

// Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = '1990';
// john.job = 'teacher';

// var jane = Object.create(personProto, 
// {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1965},
//     job: {value: 'Personal coach'}
// });

// Primitives vs objects


// primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);


//objects
var obj1 = {
    name: 'John',
    age: 29
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//functions
var age = 28;
var obj = {
    name: 'Malga',
    city: 'London'
};

function change(a,b) {
    a = 30;
    b.city = 'Gdansk';
}

change(age, obj);

console.log(age);
console.log(obj.city);
