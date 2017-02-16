/**
Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，
每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
 */


 /**
  * 
事件驱动程序
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。
（也被称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

整个事件驱动的流程有点类似于观察者模式，事件相当于一个主题(Subject)，
而所有注册到这个事件上的处理函数相当于观察者(Observer)。
  */
 
 // 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

var count = 1;


//创建事件处理程序
var connectHandler = function() {
	console.log("连接成功！");

	//触发data_received事件
	eventEmitter.emit("data_received");
}

//绑定connection事件处理程序
eventEmitter.on("connection", connectHandler);

//绑定disConnection事件处理程序
eventEmitter.on("disConnection", function() {
	console.log("断开联系 再见！");
    console.log("");
	count = 1;
});

 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log(count + ':数据接收成功！');
   console.log("");
   count++;
});

// 触发 connection 事件 
eventEmitter.emit('connection');
//再次触发
eventEmitter.emit('connection');

eventEmitter.emit('disConnection');

console.log("程序执行完毕。");

/**
 * Node.js里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件，
 * 一个fs.readStream对象会在文件被打开的时候发出一个事件,
 * 所有这些产生事件的对象都是 events.EventEmitter 的实例。
 *
 * events 模块只提供了一个对象： events.EventEmitter。
 * EventEmitter 的核心就是事件触发与事件监听器功能的封装。
 */

//http://www.runoob.com/nodejs/nodejs-event.html