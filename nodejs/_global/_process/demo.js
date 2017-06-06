
/**
 * Created by haoyong on 2017/6/3.
 */

/**
 * process 对象是一个 global （全局变量）
 * */
//console.log(process);
//console.log(global.process);

/*

console.log(process.argv); //执行命令带的参数
console.log(process.env); //执行环境OS的一些用户参数
console.log(process.pid); //当前执行进程的id
console.log(process.title); //当前执行进程的名称
console.log(process.arch); //当前执行进程CPU信息
console.log(process.platform); //当前执行进程操作系统

*/


/**
 * 在"旧模式下" stdin流 默认是暂停的.所以必须通过执行.stdin.resume()来恢复它. 同时process.stdin.resume()会切换到旧模式
 * 默认情况下 输入流是关闭的 要监听输入流  首先要开启输入流
 */
//process.stdin.resume(); //开启输入流 最新版本不需要开启
process.stdin.setEncoding('utf8');
/*process.stdin.on("data", function(chunk) {
    console.log(chunk);
});*/
process.stdout.write('标准输出流 stdout \n');


var  a, b;
process.stdout.write("请分别输入a，b的值\n");
process.stdin.on("data", function(chunk) {
    if(!a) {
        a = Number(chunk);
        process.stdout.write("a: " + a + "\n");
        process.stdout.write(`a = ${a}`);
    } else if(!b) {
        b = Number(chunk);
        process.stdout.write("a: " + a + ", b: " + b + "\n");
    }
});