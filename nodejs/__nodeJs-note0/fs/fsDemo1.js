var fs = require('fs'); 
fs.readFile('text.txt', 'utf-8', function(err, data) { 
	if(err) { 
		console.error(err); 
	} else{ 
		console.log(data); 
	} 
});
fs.readFile('tt.jpg', 'utf-8', function(err, data) { 
	if(err) { 
		console.error(err); 
	} else{ 
		console.log(data); 
	} 
});

/* 
fs.readFile(filename,[encoding],[callback(err,data)])

如果不指 定 encoding，则 callback 就是第二个参数。回调函数提供两个参数 err 和 data，err 表 示有没有错误发生，data 是文件内容。如果指定了 encoding，data 是一个解析后的字符 串，否则 data 将会是以 Buffer 形式表示的二进制数据。

如果指定了编码，则data就是文本内容
 */