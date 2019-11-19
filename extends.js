'use strict';

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}