'use strict';

var fn = x => x * x;
console.log(fn(2));

x => {
    if (x > 0) {
        return x * x;
    } else {
        return -x * x;
    }
}

fn = (x, y) => x * x + y * y;
console.log(fn(3, 4));

() => 3.14;

(x, y, ...rest) => {
    var i, sum = x + y;
    for (i = 0; i < rest.length; i++) {
        sum += rest[i];
    }

    return sum;
}

// var obj = {
//     birth: 1990,
//     getAge: function () {
//         var b = this.birth;
//         var fn = () => new Date().getFullYear() - this.birth;

//         return fn();
//     }
// };
// console.log(obj.getAge());

var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth;
        var fn = (y) => y - this.birth;

        return fn.call({
            birth: 2000
        }, year);
    }
};
console.log(obj.getAge(2015));