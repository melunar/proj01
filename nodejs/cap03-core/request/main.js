/**
GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，可以手动解析后面的内容作为GET请求的参数。
url模块中的parse函数
*/
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require("querystring");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
   
   /* req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
         var data = querystring.parse(chunk);
         res.end(data);
    });*/
    res.end(util.inspect(url.parse(req.url, true)) + "\n" + querystring.parse(req.url));
    // res.end("12");
}).listen(7002);

