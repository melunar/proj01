/**
 * Created by Aoliaovier on 2015/8/23.
 */
var i = 0;
function timedCount() {
    //postMessage() ���� - �������� HTML ҳ�洫��һ����Ϣ.
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 1000);
}
timedCount();

