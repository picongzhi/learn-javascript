function add(x, y, f) {
    return f(x) + f(y);
}

console.log(add(-5, 6, Math.abs));

function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(pow));
console.log(arr.map(String));

arr = [1, 3, 5, 7, 9];
console.log(arr.reduce(function (x, y) {
    return x + y;
}));
console.log(arr.reduce(function (x, y) {
    return x * 10 + y;
}));

s = '13579';

function string2int(s) {
    return s.split('').map(function (x) {
        return x * 1;
    }).reduce(function (x, y) {
        return x * 10 + y;
    });
}

console.log(string2int('13579'));

function normalize(arr) {
    return arr.map(function (x) {
        return x[0].toUpperCase() + x.slice(1).toLowerCase();
    });
}

console.log(normalize(['adam', 'LISA', 'barT']));

console.log(['1', '2', '3'].map(function (x) {
    return x * 1;
}));

arr = [1, 2, 4, 5, 6, 9, 10, 15];
console.log(arr.filter(function (x) {
    return x % 2 !== 0;
}));

arr = ['A', '', 'B', null, undefined, 'C', '  '];
console.log(arr.filter(function (s) {
    return s && s.trim();
}));

arr = ['A', 'B', 'C'];
arr.filter(function (element, index, self) {
    console.log(element);
    console.log(index);
    console.log(self);
});

arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
console.log(arr.filter(function (value, index, arr) {
    return arr.indexOf(value) === index;
}));

arr = [10, 20, 1, 2];
console.log(arr.sort(function (x, y) {
    return x - y;
}));

console.log(arr.sort(function (x, y) {
    return y - x;
}));

arr = ['Google', 'apple', 'Microsoft'];
console.log(arr.sort(function (s1, s2) {
    let x1 = s1.toUpperCase();
    let x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    } else if (x1 > x2) {
        return 1;
    } else {
        return 0;
    }
}));

arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0;
}));
console.log(arr.every(function (s) {
    return s.toLowerCase() === s;
}));

console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
}));
console.log(arr.find(function (s) {
    return s.toUpperCase() === s;
}));

console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
}));
console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s;
}));

arr.forEach(console.log);