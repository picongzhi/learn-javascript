'use strict';

// function abs(x) {
//     return x >= 0 ? x : -x;
// }

// var abs = function (x) {
//     return x >= 0 ? x : -x;
// };

// console.log(abs(10));
// console.log(abs(-9));
// console.log(abs(10, 'balabala'));
// console.log(abs(-9, 1, 2, null));
// console.log(abs());

// function abs(x) {
//     if (typeof x !== 'number') {
//         throw 'Not a number';
//     }

//     return x >= 0 ? x : -x;
// }

// console.log(abs(10));
// console.log(abs(-9));
// // console.log(abs());

// function foo(x) {
//     console.log('x = ' + x);
//     for (var i = 0; i < arguments.length; i++) {
//         console.log('arg ' + i + ' = ' + arguments[i]);
//     }
// }

// foo(10, 20, 30);

function abs() {
    if (arguments.length === 0) {
        return 0;
    }

    var x = arguments[0];
    return x >= 0 ? x : -x;
}

console.log(abs());
console.log(abs(10));
console.log(abs(-9));

// function foo(a, b) {
//     var i, rest = [];
//     if (arguments.length > 2) {
//         for (i = 2; i < arguments.length; i++) {
//             rest.push(arguments[i]);
//         }
//     }

//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }

// foo(1, 2, 3, 4, 5);

// function foo(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// foo(1, 2, 3, 4, 5);
// foo(1);

// function foo() {
//     var x = 1;
//     x = x + 1;
// }

// // x = x + 2;

// function foo() {
//     var x = 1;

//     function bar() {
//         var y = x + 1;
//     }

//     var z = y + 1;
// }

// foo();

// function foo() {
//     var x = 1;

//     function bar() {
//         var x = 'A';
//         console.log('x in bar() = ' + x);
//     }

//     console.log('x in foo() = ' + x);
//     bar();
// }

// foo();

// function foo() {
//     var x = 'Hello, ' + y;
//     console.log(x);
//     var y = 'Bob';
// }

// foo();

// var course = 'Learn JavaScript';
// alert(course);
// alert(window.course);

// function foo() {
//     alert('foo');
// }

// foo();
// window.foo();

// function foo() {
//     var sum = 0;
//     for (let i = 0; i < 100; i++) {
//         sum += i;
//     }

//     i += 1;
// }

// foo();

// var array = ['hello', 'JavaScript', 'ES6'];
// var x = array[0];
// var y = array[1];
// var z = array[2];
// console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

// let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
// console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

let [, , z] = ['hello', 'JavaScript', 'ES6'];
console.log(z);

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};

// var {
//     name,
//     age,
//     passport
// } = person;
// console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);

// let {
//     name,
//     passport: id
// } = person;
// // console.log(name, passport, id);

let {
    name,
    single = true
} = person;
console.log(single);

var x, y;
({
    x,
    y
} = {
    name: '小明',
    x: 100,
    y: 200
});
console.log(x, y);

function buildDate({
    year,
    month,
    day,
    hour = 0,
    minute = 0,
    second = 0
}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}

console.log(buildDate({
    year: 2017,
    month: 1,
    day: 1
}));

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var y = new Date().getFullYear();
//         return y - this.birth;
//     }
// };
// console.log(xiaoming.age());

// var fn = xiaoming.age;
// fn();

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this;

//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth;
//         }

//         return getAgeFromBirth();
//     }
// };

// console.log(xiaoming.age());

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age());
console.log(getAge.apply(xiaoming, []));

console.log(Math.max.apply(null, [3, 5, 4]));
console.log(Math.max.call(null, 3, 4, 5));