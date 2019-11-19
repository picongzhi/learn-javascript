'use strict';

// function Student(props) {
//     this.name = props.name || 'Unnamed';
// }

// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// };

// function PrimaryStudent(props) {
//     Student.call(this, props);
//     this.grade = props.grade || 1;
// }

// function F() {}

// F.prototype = Student.prototype;
// PrimaryStudent.prototype = new F();
// PrimaryStudent.prototype.constructor = PrimaryStudent;
// PrimaryStudent.prototype.getGrade = function () {
//     return this.grade;
// };

// var xiaoming = new PrimaryStudent({
//     name: '小明',
//     grade: 2
// });

// console.log(xiaoming.name);
// console.log(xiaoming.grade);

// console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
// console.log(xiaoming.__proto__.__proto__ === Student.prototype);
// console.log(xiaoming instanceof Student);
// console.log(xiaoming instanceof PrimaryStudent);

function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unamed';
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

inherits(PrimaryStudent, Student);

PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};