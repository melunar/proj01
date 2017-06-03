/* 
* @Author: melunar
* @Date:   2017-06-03 14:59:57
* @Last Modified by:   melunar
* @Last Modified time: 2017-06-03 15:08:42
*/

var http = require('http');   
var events = require("events");    
var UserBean = require('./userBean.js');   
http.createServer(function(request, response) {   
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico") {   
        user = new UserBean();   
        user.eventEmit.once('regist',function(uname, pwd) { 
            response.write('注册成功'); 
            console.log('uname:' + uname); 
            console.log('pwd:' + pwd); 
            user.login(request, response); 
            response.end(''); 
        });//注册监听   
        user.regist(request,  response); 
    }   
}).listen(9000);   
console.log('Server running at http://127.0.0.1:9000/');  