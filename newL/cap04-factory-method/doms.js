/**
 * Created by haoyong on 2016/7/31.
 */
/**
 * 工厂方法模式
 */

//安全的工厂方法

var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);//根据prototype中的属性-函数 实例化对象
        return s;
    } else {
        return new Factory(type, content);
    }
};

function makeDom(cssJson, htmlContent) {
/*    var $div = $("#tpl");
    $div.text(htmlContent);//.css($.parseJSON(cssJson));
    //console.log($div);
    $("#container").append($div);*/
    //没有渲染上去，使用简单的console
    //console.log(cssJson);
    console.log(htmlContent);
}

Factory.prototype = {
    Java: function (content) {
        var cssJson = "{'border': '1px solid #ff0000'}";
        this.content = content;
        makeDom(cssJson, content);
    },
    JavaScript: function (content) {
        var cssJson = "{'border': '1px solid #ff00ff'}";
        this.content = content;
        makeDom(cssJson, content);
    },
    Php: function(content) {
        var cssJson = "{'border': '1px solid #ffff00'}";
        this.content = content;
        makeDom(cssJson, content);
    }
};

//数据
var data = [
    {
        type: "Php",
        content: "第一本PHP书籍"
    },{
        type: "JavaScript",
        content: "js必备教程"
    }, {
        type: "Php",
        content: "第二本php"
    }, {
        type: "JavaScript",
        content: "JS 真的回了吗"
    }, {
        type: "Java",
        content: "JAVA 回归真理"
    }
];

/*
data.each(function(index, item) {
    Factory(item.type, item.content);
});*/
for(var i = 0; i < data.length; i++) {
    Factory(data[i].type, data[i].content);
}
