'use strict';

console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof 'str');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Math.abs);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

var n = new Number(123);
var b = new Boolean(true);
var s = new String('str');

console.log(typeof new Number(123));
console.log(new Number(123) === 123);

console.log(typeof new Boolean(true));
console.log(new Boolean(true) === true);

console.log(typeof new String('str'));
console.log(new String('str') === 'str');

console.log(typeof Number('123'));
console.log(typeof Boolean('true'));
console.log(typeof String(123.45));

var now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(d);
console.log(new Date(Date.parse('2015-06-24T19:49:22.875+08:00')));

d = new Date(1435146562875);
console.log(d.toLocaleString());
console.log(d.toUTCString());