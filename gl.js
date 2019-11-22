'use strict';

console.log(global.console);

console.log(process.version);
console.log(process.platform);
console.log(process.arch);
console.log(process.cwd());

process.nextTick(() => {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

process.on('exit', (code) => {
    console.log('about to exit with code: ' + code);
});

if (typeof (window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}