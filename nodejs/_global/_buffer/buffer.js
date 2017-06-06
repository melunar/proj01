/**
 * ！！！！！！！！！！重要 ！！！！！！！
 * 为了使 Buffer 实例的创建更可靠、更不容易出错，各种 new Buffer() 构造函数已被 废弃，
 * 并由 Buffer.from()、Buffer.alloc()、和 Buffer.allocUnsafe() 方法替代。
 */




/**
在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
*/

//创建实例
var buf = new Buffer(100);//byte
var buf2 = new Buffer([10,20,30]); 
//utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"
var buf3 = new Buffer("this is a word to buffer", "utf-8");


/**
写入缓冲区
buf.write(string[, offset[, length]][, encoding])

string - 写入缓冲区的字符串。Argument must be a string
offset - 缓冲区开始写入的索引值，默认为 0 。
length - 写入的字节数，默认为 buffer.length //??
encoding - 使用的编码。默认为 'utf8' 

返回值：返回实际写入的大小, 如果 buffer空间不足，只会写入部分字符串。
*/
    //每个中文的长度是3 ASCII码长度为1
var len = buf.write("这是写入的文本.","utf8");
console.log("这是写入的文本 buffer length = " + len); 
console.log( buf.toString('utf8')); 

/**
从缓冲区读取数据 
buf.toString([encoding[, start[, end]]])

encoding - 使用的编码。默认为 'utf8' 。
start - 指定开始读取的索引位置，默认为 0。
end - 结束位置，默认为缓冲区的末尾。

返回值:解码缓冲区数据并使用指定的编码返回字符串。
*/
/*buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde*/


/**
将 Buffer 转换为 JSON 对象
buf.toJSON()
*/

var jsonBuf = buf.toJSON();
var jsonBuf2 = new Buffer("hello dudu").toJSON();
console.log("jsonBuf >>> " + jsonBuf);
console.log(jsonBuf2);

//参考手册； http://www.runoob.com/nodejs/nodejs-buffer.html