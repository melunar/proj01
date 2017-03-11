//全局对象的 process 属性

/* process.argv是命令行参数数组，第一个元素是 node，第二个元素是脚本文件名， 从第三个元素开始每个元素是一个运行参数。 */
console.log(process.argv);

/* process.stdout是标准输出流，通常我们使用的 console.log() 向标准输出打印 字符，而 process.stdout.write() 函数提供了更底层的接口。 */
process.stdout.write('read from console: ','\n');


/* process.stdin.resume(); 
process.stdin.on('data', function(data) { 
	process.stdout.write('read from console: ' + data.toString()); 
}); */

function fun1() {
	console.log("fun1");
}
function callbackFun() {
	console.log('callbackFun');
}
function doSomething(fun1, callbackFun) { 
	fun1(); 
	process.nextTick(callbackFun); 
} 
doSomething(function onEnd() { 
	console.log("onend");
}); 





//全局对象的 console 属性
/* console.log("输出到控制台");
console.error('这是输出错误信息');//与console.log() 用法相同，只是向标准错误流输出。
console.trace();//向标准错误流输出当前的调用栈 */





















