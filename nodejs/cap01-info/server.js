//require 指令来载入 http 模块
var http = require('http');

/**
 createServer() 方法创建服务器
 listen()方法绑定端口，注意端口别被占用了，会报错的
 函数通过 request, response 参数来接收和响应数据。
*/
http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('<h1>你好，这里是服务器端返回的</h1>\nHello World\n');
}).listen(7000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:7000/');