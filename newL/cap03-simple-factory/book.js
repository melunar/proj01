/**
 * Created by haoyong on 2016/7/29.
 */
/**
 * 内置对象实例模式
 */

//工厂模式
function createVBook(name, price, type) {
    var o = new Object();
    o.name = name;
    o.price = price;
    o.type = type;

    o.getName = function() {
        console.log(this.name);
    };

    if(type === "1") {
        console.log("type 1");
    }
    if(type === "2") {
        console.log("type 2");
    }
    if(type === "3") {
        console.log("type 3");
    }

    return o;
}

var book1 = createVBook("factory JS", "20$", "1");
var book2 = createVBook("factory simple JS", "20￥", "2");
book1.getName();
book2.getName();


