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


// Passing functions as arguments

var years = [1990, 1982, 1958, 1963, 2009];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));  
    }

    return arrRes;
    
}


function calculateAge(el) {
    return 2019 - el; 
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.7 - (0.67 * el));
    } else {
        return -1; 
    }
    
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rates);

// functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name  + ', can you explain what is UX?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + ' ?');
//         }
//     } else {
//         return function(name) {
//             console.log(name + ', what is your goal?');
//         }
//     }
// }

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

var otherQuestion = interviewQuestion('JS wizard');
otherQuestion('Malga');

interviewQuestion('teacher')('Mike');

// iife 

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// closures

function retirement(retirementAge) {
    var a = ' years left until retirement.'
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
retirementGermany(1963);

var retirementPoland = retirement(63);
retirementPoland(1980);

//retirement(63)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name  + ', can you explain what is UX?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + ' ?');   
        } else {
                console.log(name + ', what is your goal?');
        }
    }
}

interviewQuestion('JS Rockstar')('Malga');