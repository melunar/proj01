/**
在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。
*/


console.log("__filename-> " + __filename);
console.log("__dirname -> " + __dirname);

function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);
// 清除定时器
clearTimeout(t);

function printHello(){
	var date = new Date();
   console.log(date.toLocaleDateString() + " " + date.toLocaleTimeString());
}
// 两秒后执行以上函数

setInterval(printHello, 1000);



console.info("console：");
var counter = 10;
console.log("计数: %d", counter);
console.time("获取数据");
console.timeEnd('获取数据');
console.info("程序执行完毕。")


//process 变量  http://www.runoob.com/nodejs/nodejs-global-object.html

