/**
 * Created by web0304 on 2016/10/25.
 */
/**

 国际化存在的问题：
    1. 渲染时间和性能
    2. 不同语言文字长度不一
    3. 文件编码

 jQuery.i18n.properties({
    name:'strings',// 资源文件名称
    path:'bundle/',// 资源文件所在目录路径
    mode:'both',// 模式：变量或 Map
    language:'pt_PT',// 对应的语言
    cache:false,
    encoding: 'UTF-8',
    callback: function() {// 回调方法
    }
 });
 */
 /**

获取 写入cookie
 */
 var getCookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var s = [cookie, expires, path, domain, secure].join('');
        var secure = options.secure ? '; secure' : '';
        var c = [name, '=', encodeURIComponent(value)].join('');
        var cookie = [c, expires, path, domain, secure].join('');
        document.cookie = cookie;
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

var i18Language = "zh_CN",
    languageFromCookie = getCookie("language"),
    skinFromCookie = getCookie("skin");
function loadProperties(language){
    jQuery.i18n.properties({// 加载资浏览器语言对应的资源文件
        name:'strings', // 资源文件名称
        path:'resources/i18n/', // 资源文件路径
        mode:'map', // 用 Map 的方式使用资源文件中的值
        language: language,
        callback: function() {// 加载成功后设置显示内容
                              // 显示“用户名”
            $('#label_username').html($.i18n.prop('string_username'));
            // 显示“密码”
            $('#label_password').html($.i18n.prop('string_password'));
            // 显示“登录”
            $('#button_login').val($.i18n.prop('string_login'));
        }
    });
}
var skinMap = {//没用到
    "0": "",
    "1": "resources/css/demo1.css",
    "2": "resources/css/demo2.css"
};
function loadSkin(skinIndex) {
    $("#styleSheet").attr("href", "resources/css/demo" + skinIndex + ".css")
}
loadProperties(i18Language);
$("#changeLanguage").on("change", function() {
    i18Language = $(this).val();
    loadProperties(i18Language);
    getCookie("language", i18Language);
});
$("#changeSkin").on("change", function() {
    pageSkin = $(this).val();
    changeSkin = loadSkin(pageSkin);
    getCookie("skin", pageSkin);
});

//默认加载
$("#changeLanguage").val(languageFromCookie);
loadProperties(languageFromCookie);
$("#changeSkin").val(skinFromCookie);
loadSkin(skinFromCookie);




/**
https://img.alicdn.com/tps/TB1EGQ8LVXXXXa9XVXXXXXXXXXX-1801-1692.jpg

cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。

sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。

sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

数据有效期不同
sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

作用域不同
sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
localStorage 在所有同源窗口中都是共享的；
cookie也是在所有同源窗口中都是共享的。

Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便。
*/



//formatMoney() - format any number into currency

// Default usage:
accounting.formatMoney(12345678); // $12,345,678.00

// European formatting (custom symbol and separators), can also use options object as second parameter:
accounting.formatMoney(4999.99, "€", 2, ".", ","); // €4.999,99

// Negative values can be formatted nicely:
accounting.formatMoney(-500000, "£ ", 0); // £ -500,000

// Simple `format` string allows control of symbol position (%v = value, %s = symbol):
accounting.formatMoney(5318008, { symbol: "GBP",  format: "%v %s" }); // 5,318,008.00 GBP


//formatColumn() - format a list of values for column-display
// Format list of numbers for display:
accounting.formatColumn([123.5, 3456.49, 777888.99, 12345678, -5432], "$ ");



//formatNumber() - format a number with custom precision and localisation

accounting.formatNumber(5318008); // 5,318,008
accounting.formatNumber(9876543.21, 3, " "); // 9 876 543.210


