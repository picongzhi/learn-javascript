'use strict';

const fs = require('fs');

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router) {
    var files = fs.readdirSync(__dirname + '/controllers');
    var jsFiles = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of jsFiles) {
        console.log(`process controller: ${f}...`);

        let mapping = require(__dirname + "/controllers/" + f);
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let controllersDir = dir || 'controllers';
    let router = require('koa-router')();
    addControllers(router, controllersDir);

    return router.routes();
}