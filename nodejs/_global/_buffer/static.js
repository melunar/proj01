/**
 * Created by haoyong on 2017/6/6.
 */
/**
 * Buffer对象静态方法
 * */
/**
 * NodeJs目前支持的编码
 'ascii' - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

 'utf8' - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

 'utf16le' - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

 'ucs2' - 'utf16le' 的别名。

 'base64' - Base64 编码。当从字符串创建 Buffer 时，按照 RFC4648 第 5 章的规定，这种编码也将正确地接受“URL 与文件名安全字母表”。

 'latin1' - 一种把 Buffer 编码成一字节编码的字符串的方式（由 IANA 定义在 RFC1345 第 63 页，用作 Latin-1 补充块与 C0/C1 控制码）。

 'binary' - 'latin1' 的别名。

 'hex' - 将每个字节编码为两个十六进制字符。
 */
/*
//isEncoding(code)
console.log(Buffer.isEncoding("utf-8"));
console.log(Buffer.isEncoding("gbk"));//不支持gbk！！！
console.log(Buffer.isEncoding("hex"));
console.log(Buffer.isEncoding("ascii"));
console.log(Buffer.isEncoding("utf8"));
console.log(Buffer.isEncoding("base64"));
console.log(Buffer.isEncoding("latin1"));
console.log(Buffer.isEncoding("binary"));
console.log(Buffer.isEncoding("ucs2"));
*/

/*
//isBuffer(obj)
console.log(Buffer.isBuffer([1,23]));
console.log(Buffer.isBuffer(Buffer.alloc(3)));
*/


/*
 //byteLength(string)
console.log("lsq我爱你".length); //6
console.log(Buffer.byteLength("lsq我爱你")); //12
*/

/*
//Buffer.concat(list[, totalLength]) // totalLength合并时 list 中 Buffer 实例的总长度
var list = [Buffer.alloc(3,"a"),Buffer.alloc(4,"b")];
var bf = Buffer.concat(list);
//var bf1 = Buffer.concat(list[1], list[0]); error
var bf1 = Buffer.concat(list, 5);
console.log(bf);
console.log(bf1);
*/

process.stdout.write("输入内容\n");
process.stdin.on("data", function(chunk) {
    console.log(chunk);
    console.log("input >>> = " + chunk); //字符串拼接自动转换tostring
    console.log(chunk.toString('utf8'));
});

