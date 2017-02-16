/**
 * Created by web0304 on 2016/8/2.
 *
 * events 工具类
 *
 */

/**

 可以使用Class.implement方法来实现到任何其他Class中。

 例如在Fx.Base 中 ，它被用来赋予一个界面效果在不同阶段的事件，如onComplete, onStart, onCancel。

 事件可以通过options的方式或者使用addEvent方法的方式来添加进对象中。

 */

var Widget = new Class({
    initialize: function(){},
    finish: function(){
        this.fireEvent('onComplete',[],3111);
    },
    close: function(){
        this.removeEvent('onComplete',function() { console.log("remove events"); });
    }
});
Widget.implement(new Events);
//然后...
var myWidget = new Widget();
myWidget.addEvent('onComplete', function() {
    console.log("onComplete");
});
//myWidget.finish();//onComplete
myWidget.close();//？？？？一般不用

/**
 addEvent  向Events对象的事件堆栈中增加一个新的事件
     type  事件名(如: ‘onComplete’)
     fn  f事件处理函数

 fireEvent  触发指定事件堆栈中的所有事件
     type  事件名(如: ‘onComplete’)
     args  数组或对象。是作为事件处理函数的参数。如果参数大于一个,则使用数组
     delay  整数。延迟执行事件处理函数的毫秒数

 removeEvent  删除事件堆栈中的一个事件
     type  事件名(如: ‘onComplete’)
     fn  要移除的事件处理函数


 */

