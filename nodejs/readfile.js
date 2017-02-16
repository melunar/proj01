/**
 * Created by web0304 on 2016/3/8.
 */

/*异步
* @
* 先输出end
* 后输出内容（回调函数）
*
* 异步IO 是nodejs鼓励使用的
* */
var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end.');


/*同步
*
* 先输出内容 在输出end
* */
var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('end.');