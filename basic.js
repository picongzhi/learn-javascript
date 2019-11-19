'use strict';

console.log(`hello
world`);

var name = 'picongzhi';
console.log(`hello, ${name}`);

var s = 'Hello';
console.log(s.toUpperCase());
console.log(s.toLowerCase());

var arr = [1, 3.14, 'hello', null, true];
console.log(arr.length);
console.log(arr.indexOf('hello'));
console.log(arr.indexOf('Hello'));

arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr.slice(0, 3));
console.log(arr.slice(3));
console.log(arr.slice());

arr = ['B', 'A', 'C'];
arr.sort();
console.log(arr);

arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr.splice(2, 3, 'Google', 'Facebook');
console.log(arr);

arr.splice(2, 2);
console.log(arr);

arr.splice(2, 0, 'Google', 'Facebook');
console.log(arr);

arr = ['A', 'B', 'C', 1, 2, 3];
console.log(arr.join('-'));

var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};

for (var key in o) {
    console.log(key);
}

var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i + a[i]);
}

var m = new Map([
    ['Michael', 95],
    ['Bob', 75],
    ['Tracy', 85]
]);
console.log(m);

m = new Map();
m.set('Adam', 67);
m.set('Bob', 59);
console.log(m.has('Adam'));
console.log(m.get('Bob'));
m.delete('Adam');
console.log(m.get('Adam'));

var s1 = new Set();
var s2 = new Set([1, 2, 3]);
console.log(s1);
console.log(s2);

a = ['A', 'B', 'C'];
s = new Set(['A', 'B', 'C']);
m = new Map([
    [1, 'x'],
    [2, 'y'],
    [3, 'z']
]);

for (var x of a) {
    console.log(x);
}

for (var x of s) {
    console.log(x);
}

for (var x of m) {
    console.log(x[0] + ' = ' + x[1]);
}

a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x);
}

for (var x of a) {
    console.log(x);
}

a.forEach(function (value, index, arr) {
    console.log(value + ', index = ' + index);
});

s.forEach(function (value, index, set) {
    console.log(value + ' ' + index + ' ' + set);
});

m.forEach(function (value, key, map) {
    console.log('key = ' + key + ', value = ' + value);
});