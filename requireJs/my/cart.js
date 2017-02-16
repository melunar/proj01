/**
 * Created by web0304 on 2016/3/9.
 */
define(["jq"],function($){
    var cart = function() {
        this.name = "cart1"
        this.fun1 = function() {
            if(!!$.extend()) {
                alert("cart with jquery");
            }
            console.log(this.name);
        }
    }
    return cart;
});