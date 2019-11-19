'use strict';

function* foo(x) {
    yield x + 1;
    yield x + 2;

    return x + 3;
}

// function fib(max) {
//     var
//         t,
//         a = 0,
//         b = 1,
//         arr = [0, 1];
//     while (arr.length < max) {
//         [a, b] = [b, a + b];
//         arr.push(b);
//     }

//     return arr;
// }

// console.log(fib(5));
// console.log(fib(10));

// function* fib(max) {
//     var
//         t,
//         a = 0,
//         b = 1,
//         n = 0;
//     while (n < max) {
//         yield a;
//         [a, b] = [b, a + b];
//         n++;
//     }

//     return;
// }

// var f = fib(5);
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// for (var x of fib(10)) {
//     console.log(x);
// }

var fib = {
    a: 0,
    b: 1,
    n: 0,
    max: 5,
    next: function () {
        var
            r = this.a,
            t = this.a + this.b;
        this.a = this.b;
        this.b = t;

        if (this.n < this.max) {
            this.n++;
            return r;
        } else {
            return undefined;
        }
    }
};