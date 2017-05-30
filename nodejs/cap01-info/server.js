//require 指令来载入 http 模块
var http = require('http');
var url = require('url'); //路由模块

function start(route) {

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		// route(JSON.stringify(request), null);
		route(request.url, pathname);
		// 发送 HTTP 头部 
		// HTTP 状态值: 200 : OK
		// 内容类型: text/plain
		response.writeHead(200, {'Content-Type': 'text/plain'});
		console.log('客户端发来了一次请求'); //服务器可能会输出两次控制台答应，是因为大部分浏览器都会在访问服务器时会 尝试读取 /favicon.ico 

		// 发送响应数据【写到页面上】
		response.write('response.write\n'); 
		
		//完成响应
		response.end('你好，这里是服务器端返回的内容：\nHello World\n');
	}
		/**
	 createServer() 方法创建服务器
	 listen()方法绑定端口，注意端口别被占用了，会报错的
	 函数通过 request, response 参数来接收和响应数据。
	*/
	http.createServer(onRequest).listen(9000);

	// 终端打印如下信息
	console.log('Server running at http://127.0.0.1:9000/');
}

// exports.start = start;
// or
module.exports = {start: start};

/**

nodejs模块中的exports对象，可以用它创建模块

 那module.exports是什么呢？它是否合法呢？

其实，Module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是Module.exports而不是exports。

所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是Module.exports本身不具备任何属性和方法。

如果Module.exports已经具备一些属性和方法，exports收集来的信息将被忽略。
如果Module.exports已经具备一些属性和方法，exports收集来的信息将被忽略。
如果Module.exports已经具备一些属性和方法，exports收集来的信息将被忽略。

ES6中 ，在一个文件或模块中，export、import可以有多个，export default仅有一个。 
 */