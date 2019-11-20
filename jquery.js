'use strict';

console.log(window.jQuery);
console.log(window.$);
console.log($ === jQuery);
console.log(typeof $);

var ul = $('#test-div>ul');

var languages = ['Pascal', 'Lua', 'Ruby'];
languages.map(function (val) {
    var li = document.createElement('li');
    li.innerHTML = '<span>' + val + '</span>';
    ul.append(li);
});

var list = ul.find('li');
list.sort(function (li1, li2) {
    if (li1.innerHTML < li2.innerHTML) {
        return -1;
    } else if (li1.innerHTML > li2.innerHTML) {
        return 1;
    } else {
        return 0;
    }
});

ul.append(list);

var a = $('#test-link');
a.on('click', function () {
    console.log('Hello!');
});

$.fn.highlight1 = function () {
    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
    return this;
};

// $('#test-highlight span').highlight1();

$.fn.highlight2 = function (options) {
    var bgcolor = options && options.backgroundColor || '#fffceb';
    var color = options && options.color || '#d85030';

    this.css('backgroundColor', bgcolor).css('color', color);

    return this;
};

// $('#test-highlight span').highlight2({
//     backgroundColor: '#00a8e6',
//     color: '#ffffff'
// });

$.fn.highlight = function (options) {
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);

    return this;
};

$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
};

$.fn.highlight.defaults.color = '#fff';
$.fn.highlight.defaults.backgroundColor = '#000';
$('#test-highlight span').highlight();