'use strict';

var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

console.log(re1);
console.log(re2);

var re = /^\d{3}\-\d{3,8}$/;
console.log(re.test('010-12345'));
console.log(re.test('010-1234x'));
console.log(re.test('010 12345'));

console.log('a b   c'.split(' '));
console.log('a b   c'.split(/\s+/));
console.log('a,b, c  d'.split(/[\s\,]+/));
console.log('a,b;; c  d'.split(/[\s\,\;]+/));

re = /^(\d{3})-(\d{3,8})$/;
console.log(re.exec('010-12345'));
console.log(re.exec('010 12345'));

re = /^(\d+)(0*)$/;
console.log(re.exec('102300'));

re = /^(\d+?)(0*)$/;
console.log(re.exec('102300'));

var r1 = /test/g;
var r2 = new RegExp('test', 'g');

var s = 'JavaScript, VBScript, JScript and ECMAScript';
re = /[a-zA-Z]+Script/g;
re.exec(s);
console.log(re.lastIndex);
re.exec(s);
console.log(re.lastIndex);
re.exec(s);
console.log(re.lastIndex);
re.exec(s);
console.log(re.lastIndex);
re.exec(s);
console.log(re.lastIndex);