/**
 * Created by haoyong on 2017/6/6.
 */
var fs = require("fs");

/**
 * fs.open(path, flags[, mode], callback)
 * fs.openSync(path, flags[, mode])  // 同步方法
 *
 * flags 可以是：

 'r' - 以读取模式打开文件。如果文件不存在则发生异常。

 'r+' - 以读写模式打开文件。如果文件不存在则发生异常。

 'rs+' - 以同步读写模式打开文件。命令操作系统绕过本地文件系统缓存。

 这对 NFS 挂载模式下打开文件很有用，因为它可以让你跳过潜在的旧本地缓存。 它对 I/O 的性能有明显的影响，所以除非需要，否则不要使用此标志。

 注意，这不会使 fs.open() 进入同步阻塞调用。 如果那是你想要的，则应该使用 fs.openSync()。

 'w' - 以写入模式打开文件。文件会被创建（如果文件不存在）或截断（如果文件存在）。

 'wx' - 类似 'w'，但如果 path 存在，则失败。

 'w+' - 以读写模式打开文件。文件会被创建（如果文件不存在）或截断（如果文件存在）。

 'wx+' - 类似 'w+'，但如果 path 存在，则失败。

 'a' - 以追加模式打开文件。如果文件不存在，则会被创建。

 'ax' - 类似于 'a'，但如果 path 存在，则失败。

 'a+' - 以读取和追加模式打开文件。如果文件不存在，则会被创建。

 'ax+' - 类似于 'a+'，但如果 path 存在，则失败。

 mode 可设置文件模式（权限和 sticky 位），但只有当文件被创建时才有效。默认为 0666，可读写。

 callback(err, fd, ) // fd 文件被打开的标识(打开了哪一个文件)/句柄
 * */

fs.open("./1.txt", "r", function(err, fd, data) {
    if(err) { console.log(err) }
    console.log(fd);// 3
    console.log(data);
});
fs.open("1.txt", "r", function(err, fd) {
    console.log(fd); // 4
})

var fd = fs.openSync("1.txt", "r");
console.log(fd); //5