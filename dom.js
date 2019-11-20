'use strict';

var list = document.getElementById('test-list');
var items = [];

for (let i = 0; i < list.children.length; i++) {
    items.push(list.children[i].innerHTML);
}

items.sort();
for (let i = 0; i < list.children.length; i++) {
    list.children[i].innerHTML = items[i];
}