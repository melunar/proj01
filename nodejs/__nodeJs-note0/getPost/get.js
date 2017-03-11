﻿var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
/* 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，
因此你可以手动解析后面的内容作为GET请求的参数。
node.js中url模块中的parse函数提供了这个功能
url.parse(req.url, true)
 */
console.log('Server running at http://127.0.0.1:3000/');

//http://localhost:3000/user?name=w3c&email=w3c@w3cschool.cc