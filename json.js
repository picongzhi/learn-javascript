'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);
console.log(typeof s);
console.log(s);

s = JSON.stringify(xiaoming, null, '    ');
console.log(s);

s = JSON.stringify(xiaoming, ['name', 'skills'], '    ');
console.log(s);

console.log(JSON.stringify(xiaoming, (key, value) => {
    return typeof value === 'string' ? value.toUpperCase() : value;
}, '    '));

xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return {
            'Name': this.name,
            'Age': this.age
        };
    }
};
console.log(JSON.stringify(xiaoming));

console.log(JSON.parse('[1,2,3,true]'));
console.log(JSON.parse('{"name":"小明","age":14}'));
console.log(JSON.parse('true'));
console.log(JSON.parse('123.45'));

var obj = JSON.parse('{"name":"小明","age":14}', (key, value) => {
    return key === 'name' ? value + '同学' : value;
});
console.log(obj);
console.log(JSON.stringify(obj));