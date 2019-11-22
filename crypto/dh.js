'use strict';

const crypto = require('crypto');

var ming = crypto.createDiffieHellman(512);
var mingKeys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

var hong = crypto.createDiffieHellman(prime, generator);
var hongKeys = hong.generateKeys();

var mingSecret = ming.computeSecret(hongKeys);
var hongSecret = hong.computeSecret(mingKeys);

console.log('Secret of Xiao Ming: ' + mingSecret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hongSecret.toString('hex'));