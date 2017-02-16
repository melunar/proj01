/**
 * Created by Aoliaovier on 2015/11/17 0017.
 */
this.onmessage = function(event) {
    var data = event.data;
    var ca = 0;
    console.log("one:" + data.one + " two:" + data.two + " fx:" + data.func);
    if(data.func == "add") ca = 1;
    else if(data.func == "subtract") ca = 2;
    else if(data.func == "multiply") ca = 3;
    else if(data.func == "divide") ca = 4;
    switch(ca) {
        case 1:
            postMessage(add(data.one,data.two));
            break;
        case 2:
            postMessage(sub(data.one,data.two));
            break;
        case 3:
            postMessage(mul(data.one,data.two));
            break;
        case 4:
            postMessage(div(data.one,data.two));
            break;
        default:
            postMessage("ERROR!!!");
    }
}
function add(one, two) {
    return one + two;
}
function sub(one, two) {
    return one - two;
}
function mul(one, two) {
    return one * two;
}
function div(one, two) {
    if(two==0)
        return "no divide by 0";
    return one/two;
}