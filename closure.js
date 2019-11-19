'use strict';

function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;
    });
}

console.log(sum([1, 2, 3, 4, 5]));

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    };

    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(f());

// function count() {
//     var arr = [];
//     for (var i = 1; i <= 3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }

//     return arr;
// }

// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
// console.log(f1());
// console.log(f2());
// console.log(f3());

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            };
        })(i));
    }

    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());

function createCounter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    };
}

var c1 = createCounter();
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());

var c2 = createCounter(10);
console.log(c2.inc());
console.log(c2.inc());
console.log(c2.inc());

function makePow(n) {
    return function (x) {
        return Math.pow(x, n);
    };
}

var pow2 = makePow(2);
var pow3 = makePow(3);

console.log(pow2(5));
console.log(pow3(7));