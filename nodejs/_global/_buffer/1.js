/**
 * Created by haoyong on 2017/6/6.
 */
var bf1 = Buffer.alloc(5,"lusi1","utf-8");
//bf1.fill("l");
console.log(bf1);

const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');
/**
 * buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
 * 拷贝target一方会被拷贝过来的值覆盖
 */
for (let i = 0; i < 26; i++) {
    // 97 是 'a' 的十进制 ASCII 值
    buf1[i] = i + 97;
}
for (let i = 0; i < 26; i++) {
    // 65 是 'A' 的十进制 ASCII 值
    buf2[i] = i + 65;
}

var len = buf1.copy(buf2, 8, 16, 20);

// 输出: !!!!!!!!qrst!!!!!!!!!!!!!
console.log(buf2.toString('ascii', 0, 25));
console.log(buf1.toString('ascii', 0, 25));
console.log(len + " " + buf2.length);
console.log("--------------------");



/**
 * buf.slice([start[, end]])
 * 通过一个Buffer对象截取一段返回新的buffer对象
 * 注意，修改这个新建的 Buffer 切片，也会同时修改原始的 Buffer 的内存，因为这两个对象所分配的内存是重叠的。
 */
var BUF = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
    // 97 是 'a' 的十进制 ASCII 值
    BUF[i] = i + 97;
}

var buf3 = BUF.slice(0, 3);

// 输出: abc
console.log(buf3.toString('ascii', 0, buf2.length));

BUF[0] = 33;

// 输出: !bc
console.log(buf3.toString('ascii', 0, buf2.length));