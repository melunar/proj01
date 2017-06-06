//Buffer

function demo1() {
	var buf	=	new	Buffer(256);
	var len	=	buf.write('\u00bd	+	\u00bc	=	\u00be',	0);
	console.log(len	+	" bytes: "	+	buf.toString('utf8',	0,	len));
	//	12	bytes:	½	+	¼	=	¾
}

function demo2() {
	var str = "你好 Node.";
	var buf = new Buffer(str.length);
	for(var i = 0; i < str.length; i++) {
		buf[i] = str.charCodeAt(i);
	}
	console.log(buf.toString("utf8"));
}

function demo3() {
	str	=	'\u00bd+\u00bc=\u00be哈哈哈';
	console.log(str	+	":	"	+	str.length	+	"	characters,	"	+
	Buffer.byteLength(str,	'utf8')	+	"	bytes");
	//	½	+	¼	=	¾:	8	characters,	17	bytes
	// 一个汉字三个字节 \u00bd两个字节 ascii一个字节

	buf = new  Buffer(1024);
	console.log(buf.length); //1024
	buf.write("write to buf", "ascii",0);
	console.log(buf.length); //1024

}
demo3();























