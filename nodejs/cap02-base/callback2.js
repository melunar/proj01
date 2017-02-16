var fs = require("fs");
fs.readFile('text.txt', function (err, data) {
	//回调函数
	//阻塞按是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。
	//在 Node 应用程序中 执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。
    if (err) {
    	return console.error(err);
    }
    console.log(data.toString());
});

console.log("程序执行结束!");