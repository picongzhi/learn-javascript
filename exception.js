'use strict';

var r1, r2, s = null;
try {
    r1 = s.length;
    r2 = 100;
} catch (e) {
    console.log('出错了: ' + e);
} finally {
    console.log('finally');
}

console.log('r1 = ' + r1);
console.log('r2 = ' + r2);

function getLength(s) {
    return s.length;
}

function printLength() {
    console.log(getLength('abc'));
    console.log(getLength(null));
}

// printLength();

function main(s) {
    console.log('begin main()');
    try {
        foo(s);
    } catch (e) {
        console.log('出错了: ' + e);
    }
    console.log('end main()');
}

function foo(s) {
    console.log('begin foo()');
    bar(s);
    console.log('end foo()');
}

function bar(s) {
    console.log('begin bar()');
    console.log('length = ' + s.length);
    console.log('end bar()');
}

main(null);