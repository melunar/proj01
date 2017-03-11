var events = require('events'); 
var emitter = new events.EventEmitter(); 

/* 注册了两个事件监听器 */
emitter.on('someEvent1', function(arg1, arg2) { 
	console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent2', function(arg1, arg2) { 
	console.log('listener2', arg1, arg2); 
}); 

/* 发射 someEvent 事件 */
emitter.emit('someEvent1', 'hao', 1994);
emitter.emit('someEvent2', 'yong', 1994);

console.log('listener', 1, "over");