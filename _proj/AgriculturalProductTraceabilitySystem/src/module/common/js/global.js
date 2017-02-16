/**
 * Created by haoyong on 2016/4/16.
 * 一些公共的变量 函数在这里声明初始化
 * 所有的view文件都应该包含此公共js
 */
var

    /**
     * 软件版本
     * @type {string}
     */
    version = "1.0",

    /**
     * 当前城市
     * @type {string}
     */
    locationCity = "",

    /**
     * 用到的天气信息
     * @type {{json}}
     */
    weatherData = {},

    /**
     * 当前时间
     * @type {string}
     */
    time = "",

    /**
     * 后台接口项目根路径
     * @type {string}
     * @private
     */
//serviceHost = "http://172.17.66.190:8080/agri_I/",
// serviceHost = "http://192.168.139.1:8080/agri_I/",
serviceHost = "http://localhost:8080/agri_I/",
//serviceHost = "http://169.254.229.140:8080/agri_I/",


//答辩环境
 //   serviceHost = "http://192.168.1.164:8080/agri_I/",
    /**
     * 本机IP
     * @type {string}
     */
//localIp = "172.17.66.190",
//localIp = "192.168.139.1",
localIp = "127.0.0.1",
//localIp = "169.254.229.140",


    //答辩场地网络环境
//localIp = "192.168.1.164",


    /**
     * 登录跳转延迟时间
     * @type {number}
     */
    loginDelayTime = 1000,
    /**
     * 最后一个 测试使用
     * @type {string}
     */
    endddd = "";


/**
 * 调用开放天气接口要求回调的本地函数
 * @param data 接口返回的json数据
 * 在header对应位置渲染天气信息
 */

function getWeatherData(data) {
    if (data.result) {
        window.weatherData = data.result[0];
        var weatherInfo = weatherData.weather + " " + weatherData.temperature;
        $("#weatherInfo").text(weatherInfo);
    } else {
        $("#weatherInfo").text("没有天气信息");
    }


}

/**
 * 解决input textarea属性 maxlength没有效果的问题
 */
/*$(document).on("keydown keyup", "input,textarea", function () {
    if($(this).attr("maxlength")) {
        var L = $(this).attr("maxlength");
        var str = $(this).val();
        if (str.length > L) {
            str = str.substr(0, L);
            $(this).val(str);
        }
    }
});*/

/**
 * 获取并渲染时间
 */
function getTime() {
    var date = new Date();
    //Fri May 06 2016 16:45:34 GMT+0800 (中国标准时间)
    time = date.toString().substr(16, 8);
    $("#timeInfo").text(time);

}


/**
 * 设置每400ms更新一次时间
 */
//var setTime =
setInterval("getTime()", 400);

/*requirejs(["pagination"],
    function setPagination(total, selector, itemsPerPage, currpage, callback) {
        jQuery(selector).pagination(total, {
            orhide: true,
            prev_show_always: false,
            next_show_always: false,
            items_per_page: itemsPerPage,
            first_loading: false,
            current_page: currpage,
            callback: function (pageIndex, jq) {
                callback(pageIndex + 1);
            }
        });
    }
);*/


/**
 * 全局的时间显示插件
 */
requirejs(["timepicker"], function () {
    //function bindDataPicker() {
    $(document).on("focus", ".input-time", function () {
        var self = this;
        jQuery(this).datetimepicker({
            dateFormat: 'yy-mm-dd',
            showAnim: '',
            showTimepicker: false,
         /*   showHour: true,
            showSecond: true,
            showMillisec: true,*/
            autoclose:true //自动关闭
        });
    });
    // }

});
