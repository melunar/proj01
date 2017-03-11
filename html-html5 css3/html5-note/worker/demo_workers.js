/**
 * Created by Aoliaovier on 2015/8/23.
 */
var i = 0;
function timedCount() {
    //postMessage() 方法 - 它用于向 HTML 页面传回一段消息.
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 1000);
}
timedCount();

