'use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile('sample.png', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log('read file sync: ' + data);

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

// fs.writeFileSync('output.txt', data);

fs.stat('sample.txt', (err, stat) => {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('birth time: ' + stat.birthtime);
            console.log('modified time: ' + stat.mtime);
        }
    }
});