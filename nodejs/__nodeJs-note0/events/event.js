var EventEmitter = require('events').EventEmitter; //对象： events.EventEmitter。EventEmitter 的核心就 是事件发射与事件监听器功能的封装。
var event = new EventEmitter(); 
event.on('some_event', function() { 
	console.log('some_event occured.'); 
}); 
setTimeout(function() { 
	event.emit('some_event'); 
}, 1000);