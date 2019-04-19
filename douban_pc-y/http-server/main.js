const http = require('http');
//  require关键字  引入一个模块

let i = 0;

http
    .createServer(function (request, response) {
        response.end(`hello World${++i}`);
    })
    .listen(8080);
