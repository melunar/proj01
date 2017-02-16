var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('info.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);


writerStream.on("error", function(err) {
	if(err) {
		console.log("writerStream err:");
		console.log(err);
	}
} );
readerStream.on("error", function(err) {
	if(err) {
		console.log("readerStream err:");
		console.log(err);
	}
} );

console.log("程序执行完毕");