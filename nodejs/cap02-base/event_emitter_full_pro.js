var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function(res) {
   console.log('监听器 listener1 执行。res = ');
   console.log(res); //undefined
}

// 监听器 #2
var listener2 = function(res) {
	console.log('监听器 listener2 执行。res = ');
	console.log(res); //undefined
}


// 监听器 #3
var listener3 = function(res) {
	console.log('监听器 listener3 执行。res = ');
	console.log(res); //undefined
}

// 监听器 onceHandler
var onceHandler = function() {
	console.log('监听器 onceHandler');
}
// 绑定 connection 事件，处理函数为 listener1 
/**
	addListener(event, listener)
	为指定事件添加一个监听器到监听器数组的尾部
*/
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connect', listener1);
eventEmitter.on('connect', listener2);
eventEmitter.on('connect', listener3);


//为指定事件注册一个单次监听器，
//监听器只能触发一次，触发后立刻解除该监听器。
eventEmitter.once('onceEvent', onceHandler);


// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);


eventEmitter.on('connection', listener3);

/**
listenerCount(emitter, event)
返回指定事件的监听器数量。
类似静态方法 直接用EventEmitter对象引用即可
*/
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("connection事件连接 " + eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

/**
	removeListener(event, listener)
	移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。
*/
// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");


eventEmitter.removeListener('connection', listener3);
console.log("listener3 不再受监听。");

eventEmitter.removeAllListeners(["connection"]);

//返回指定事件的监听器数组。
var connectList = eventEmitter.listeners("connect");
console.log("connect list:");
console.log(connectList);
console.log(typeof connectList); //object

// 触发连接事件
eventEmitter.emit('connection');

eventEmitter.emit('connect');
eventEmitter.emit('onceEvent');
eventEmitter.emit('onceEvent');//不在执行

var connectionEventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("connection事件连接 " + connectionEventListeners + " 个监听器监听连接事件。");
var connectEventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect');
console.log("connect事件连接 " + connectEventListeners + " 个监听器监听连接事件。");
 
console.log("程序执行完毕。");