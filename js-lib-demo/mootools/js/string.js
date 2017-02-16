/**
 * Created by web0304 on 2016/7/26.
 */
define([
    "mootools"
], function(mt) {
    //rgbToHex([true|false])方法, true参数 返回数组的形式
    console.log("rgb(17,34,51)".rgbToHex()); 	//"#112233"
    console.log("rgba(17,34,51,0)".rgbToHex()); 	//"transparent"
    console.log("rgb(17,34,51)".rgbToHex(true)); //['11','22','33']

    //hexToRgb() 反之同理
    "#112233".hexToRgb(); 		//"rgb(17,34,51)"
    "#112233".hexToRgb(true);   //[17,34,51]


});
