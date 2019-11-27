'use strict';

const WebSocket = require('ws');

let ws = new WebSocket('ws://localhost:3000/test');

ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

ws.on('message', function (message) {
    console.log(`[CLIENT] received: ${message}`);
});