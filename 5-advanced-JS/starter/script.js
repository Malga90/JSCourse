// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person  = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1947, 'Personal coach');
var mark = new Person('Mark', 1981, 'designer');

john.calculateAge(); 
jane.calculateAge(); 
mark.calculateAge(); 

console.log(john.lastName);
console.log(john.lastName);
console.log(john.lastName);


