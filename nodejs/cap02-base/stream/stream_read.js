var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('info.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
	console.log("-event-data 文件数据:");
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
	console.log("-event-end");
});

readerStream.on('', function(err){
    console.log(err.stack);
   	console.log("-event-error");
});

readerStream.on('finish', function(data){
    console.log(data);
	console.log("-event-finish");//未执行
});

console.log("程序执行完毕");