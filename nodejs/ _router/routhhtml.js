/* 
* @Author: melunar
* @Date:   2017-05-30 21:36:38
* @Last Modified by:   melunar
* @Last Modified time: 2017-05-30 23:26:10
*/

var http = require("http");
var url = require("url");
var router = require("./router.js");

http.createServer(function(request, response) {
    if(request.url !== "/favicon.ico") {
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,''); //替换掉前面的/
        console.log(pathname);
        try {
            router[pathname](request, response);
        } catch(err) {
            console.log("error >>> " + err);
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.write("<h2>nodeJs server</h2><hr/><h3>404 NOT FOUND</h3>");
            response.end('');
        }
    }
}).listen(9000);
console.log('Server running at http://127.0.0.1:9000/');