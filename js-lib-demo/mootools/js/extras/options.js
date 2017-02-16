/**
 * Created by web0304 on 2016/8/2.
 *
 * options 工具类
 *
 */



/**
 *
 * 用Class.implement方法来实现到任何其他Class中,方便的对options的设置。
 *
 */
var Widget = new Class({
    Implements: [Options, Events],//或者使用 Widget.implement(new Options);
    options: {
        color: '#fff',
        size: {
            width: 100,
            height: 100
        }
    },
    initialize: function(options){
        this.setOptions(options);//setOptions方法来自于Options类
    }
});
//
// Widget.implement(new Options);
//然后...
var myWidget = new Widget({
    color: '#f00',
    size: {
        width: 400
    }
});
console.log(myWidget.options);
/*{
    "#f00"
    size
        :
        Object
    height
        :
        100//默认值
    width
        :
        400
}*/

