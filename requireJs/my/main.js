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
/*
require.config({
    baseUrl: "../js",
    paths: {
        "jquery": "jquery.min",
        "underscore": "underscore",
        "mootools": "mootools"
    }
});*/

/*
require.config({
    paths: {
        "cart": "../requireJs/my/cart"
    }
});*/

/*require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块*/
/*第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
(还可以巧妙的解决命名冲突的问题)
  加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。*/

require(["../require-conf.js"],function() {
    require(["underscore","jq","mootools","my/cart"],function(_,$$,mootools,c) {
        $$.extend({
            alert$$: function(o) {
                alert("jquery alert" + o);
            }
        });
        console.log(_.constructor);
        $$.alert$$(new Date());
        var cart1 = new c();
         console.log(cart1.name);
         cart1.fun1();
    });
});



