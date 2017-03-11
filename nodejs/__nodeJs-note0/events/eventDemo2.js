/*
	创建
	发射
	删除
	报错退出
*/


/* emitter.on(),addListener()方法指定事件注册一个监听器，接受一个字 符串 event 和一个回调函数 listener */

/* EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 */

var events = require('events'); 
var emitter = new events.EventEmitter(); 

emitter.on('connection',function(stream) {
		console.log("connection is on!" + stream);
}
);
emitter.addListener("add event", function(stream) {
		console.log("add event is on!" + stream);
});

emitter.once("once event", function(stream) {
		console.log("once event is on!" + stream);
});

emitter.emit("connection"," Haoyong");
emitter.emit("add event"," Haoyong110");

/* EventEmitter 定义了一个特殊的事件 error，它包含了"错误"的语义，我们在遇到 异常的时候通常会发射 error 事件。

当 error 被发射时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。

我们一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃
 */
 emitter.emit('error'); 

emitter.emit("once event"," Haoyong110"); 
emitter.emit("once event"," Haoyong1101");//执行没有结果 只能发射一次的出发

emitter.emit("connection"," Haoyong");
/* EventEmitter.removeListener(event, listener) 移除指定事件的某个监听 器，listener 必须是该事件已经注册过的监听器 ??????

EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。
*/
emitter.removeListener('connection',function(stream) {
		console.log("connection is on!" + stream);
}
);
emitter.emit("connection"," Haoyong");




