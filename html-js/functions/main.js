/**
 * Created by web0304 on 2016/3/15.
 */

require(["/require-conf.js"], function() {
    alert("配置成功");
    function mainjs() {
        var val = 10;
        console.log(isDigit(val));
    }
    mainjs();
});