'use strict';

function callback() {
    console.log('Done');
}

console.log('before setTimeout()');
setTimeout(callback, 1000);
console.log('after setTimeout()');

function test(resolve, reject) {
    var timeout = Math.random() * 2;
    var log = console.log;
    log('set timeout to: ' + timeout + ' seconds.');

    setTimeout(function () {
        if (timeout < 1) {
            log('call resolve()...');
            resolve('200 OK');
        } else {
            log('call reject()...');
            reject('timeout in ' + timeout + ' seconds.');
        }
    }, timeout * 1000);
}

// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {
//     console.log('成功: ' + result);
// });
// var p3 = p2.catch(function (reason) {
//     console.log('失败: ' + reason);
// })

new Promise(test).then((result) => {
    console.log('成功: ' + result);
}).catch((reason) => {
    console.log('失败: ' + reason);
});