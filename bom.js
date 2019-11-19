'use strict';

console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
console.log('window outer size: ' + window.outerWidth + ' x ' + window.outerHeight);

console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);

console.log('Screen size = ' + screen.width + ' x ' + screen.height);

console.log(location);

console.log(document);

var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');
var i, s;
s = '提供的饮料有: ';
for (i = 0; i < drinks.length; i++) {
    s = s + drinks[i].innerHTML + ', ';
}

console.log(s);

console.log(document.cookie);