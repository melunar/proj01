/**
 * Created by web0304 on 2016/3/9.
 */

//my/main.js now has some dependencies, a cart and inventory
//module in the same directory as main.js
/*define(["my/cart", "my/inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);*/
//没有加载依赖模块
// alert("good");

require.config({
    baseUrl: ".",
    paths: {
        "jq": "../js/jquery.min",
        "underscore": "../js/underscore"
    }
});

/*
require.config({
    paths: {
        "cart": "../requireJs/my/cart"
    }
});*/

/*require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块*/
/*第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
(还可以巧妙的解决命名冲突的问题)

  加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
  main
  */

/*require(["../require-conf.js"],function() {*/
    define(["jq","underscore"/*,"my/cart"*/],function($,_) {
        jQuery.extend({
            alert$$: function(o) {
                alert("jquery alert" + o);
            }
        });
        $.alert$$(new Date());/*
        var cart1 = new c();
         console.log(cart1.name);
         cart1.fun1()*/;
    });
/*});*/
/*
理论上，require.js加载的模块，必须是按照AMD规范、用define()函数定义的模块。但是实际上，虽然已经有一部分流行的函数库（比如jQuery）符合AMD规范，更多的库并不符合。那么，require.js是否能够加载非规范的模块呢？
回答是可以的。
这样的模块在用require()加载之前，要先用require.config()方法，定义它们的一些特征。
举例来说，underscore和backbone这两个库，都没有采用AMD规范编写。如果要加载它们的话，必须先定义它们的特征。
require.config({
    shim: {

        'underscore':{
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
比如，jQuery的插件可以这样定义：
shim: {
    'jquery.scroll': {
        deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
    }
}
七、require.js插件
require.js还提供一系列插件，实现一些特定的功能。
domready插件，可以让回调函数在页面DOM结构加载完成后再运行。
require(['domready!'], function (doc){
    // called once the DOM is ready
});
text和image插件，则是允许require.js加载文本和图片文件。
define([
        'text!review.txt',
        'image!cat.jpg'
    ],

    function(review,cat){
        console.log(review);
        document.body.appendChild(cat);
    }
);
类似的插件还有json和mdown，用于加载json文件和markdown文件。*/



