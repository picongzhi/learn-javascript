'use strict';

// var robot = {
//     name: 'Robot',
//     height: 1.6,
//     run: function () {
//         console.log(this.name + ' is running...');
//     }
// };

// var Student = {
//     name: 'Robot',
//     height: 1.2,
//     run: function () {
//         console.log(this.name + ' is running...');
//     }
// };

// var xiaoming = {
//     name: '小明'
// };
// xiaoming.__proto__ = Student;

// console.log(xiaoming.name);
// xiaoming.run();

// var Bird = {
//     fly: function () {
//         console.log(this.name + ' is flying...');
//     }
// };
// xiaoming.__proto__ = Bird;
// xiaoming.fly();

// var Student = {
//     name: 'Robot',
//     height: 1.2,
//     run: function () {
//         console.log(this.name + ' is running...');
//     }
// };

// function createStudent(name) {
//     var s = Object.create(Student);
//     s.name = name;

//     return s;
// }

// var xiaoming = createStudent('小明');
// xiaoming.run();
// console.log(xiaoming.__proto__ === Student);

// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         console.log('Hello, ' + this.name + '!');
//     };
// }

// var xiaoming = new Student('小明');
// console.log(xiaoming.name);
// xiaoming.hello();

// console.log(xiaoming.constructor === Student.prototype.constructor);
// console.log(Object.getPrototypeOf(xiaoming) === Student.prototype);
// console.log(xiaoming instanceof Student);

// console.log(typeof Object.prototype);

// function Student(name) {
//     this.name = name;
// }

// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// };

function Student(props) {
    this.name = props.name;
    this.grade = props.grade || 1;
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {});
}

var xiaoming = createStudent({
    name: '小明'
});

console.log(xiaoming);