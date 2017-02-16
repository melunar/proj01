/**
 * Created by Aoliaovier on 2016/4/16.
 */
/**
 * @Date：2016.4.14
 * @Author:haoyong
 * @Description:渲染公共的内容 适用于所有的页面 跟控制器没有交互 单独的一层
 */
define([
    "jquery",
    "tools",
    "layer",


    //不列入参数的
    "handlebars",
    //"http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",//获取到当前ip 城市等信息的新浪开放的一个接口 返回全局变量remote_ip_info
    //  "sina-iplookup",
    "global"
], function (jQuery, tools, layer) {
    "use strict";
    var commonTpl = "/src/module/common/inc/CommonTpl.html";
    return (function (scope, $) {
        var loginUrl = "/src/module/login/login.html",
            registerUrl = "/src/module/login/register.html",

            _eventHandler = {
                //搜索，未使用
                "mainSearch": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    alert(this + "main search");
                },
                //登录跳转
                "loginLink": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    window.location.href = loginUrl;

                },
                //注册跳转
                "registerLink": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    window.location.href = registerUrl;
                },

                /**
                 * 退出登录
                 * @param e
                 */
                "logoutLink": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    layer.msg("真的要退出吗", {
                        time: 0,//不自动关闭
                        btn: ["确定", "取消"],
                        yes: function (index) {
                            layer.close(index);
                            localStorage.removeItem("userName");
                            localStorage.removeItem("userId");
                            localStorage.removeItem("userType");

                            localStorage.removeItem("companyName");
                            localStorage.removeItem("companyId");
                            localStorage.removeItem("companyStatus");


                            localStorage.removeItem("dep");
                            localStorage.removeItem("code");
                            localStorage.removeItem("abbr");
                           /* if(localStorage.getItem("userType") === "verify") {
                                alert()
                            }*/

                            window.location.reload();
                        }
                    });
                },
            },
            /**
             * 绑定事件
             * @param selector
             * @private
             */
            _bindEvents = function (selector) {
                var handeler = _eventHandler;
                console.log("绑定" + selector + ":" + $(selector).find("[data-event]").length);
                $(selector).find("[data-event]").each(function () {
                    $(this).off("click").off($(this).data("event"), handeler[$(this).data("handler")]).on($(this).data("event"), handeler[$(this).data("handler")]);
                });
            },
            _funs = function (city) {
                //通过新建一个script标签，加载一个script文件
                var script = document.createElement('script');
                //文件加载完成后，浏览器就会自动的解析，并执行这个文件中的代码。
                script.src = 'http://api.k780.com:88/?app=weather.future&weaid=' + city + '&&appkey=18992&sign=846e3edba3c2b81917a6fdc255e08ebe&format=json&jsoncallback=getWeatherData';

                document.body.appendChild(script);
            };


        /**
         * 根据主页长搜索框是否显示 显示header搜索框
         */
        /*          _isShowHeaderSearchBox = function () {
         var $searchHeader = $("header .header-search");
         var $searchHome = $("header .header-search");
         //alert(0);
         if($("header").height() > 70) {
         $search.removeClass("hide");
         } else {
         $search.addClass("hide");
         }
         };*/
        /**
         * 渲染header
         */
        scope.renderHeader = function () {
            //渲染公共的header
            // var province = remote_ip_info.province;//获取省份
            //window.locationCity = remote_ip_info.city;//汉字 能保证唯一性

            tools.loadTemplate(commonTpl, function (compiler) {
                var htmlStr = compiler({
                    "commonHeader": true,
                    "locationCity": window.locationCity
                    //"weatherInfo": weatherInfo
                });
                $(".page").prepend(htmlStr);

                //根据body中的标识 给导航加active
                var module = $("body").data("module");
                $(".site-navigation").find("[data-module=" + module + "]").addClass("active").siblings().removeClass("active");
                _bindEvents("header");

                // _isShowHeaderSearchBox();
                //$(window).on("resize",_isShowHeaderSearchBox);
                //alert("1");
                scope.setUserInfo();

            });
        };

        /**
         * 渲染footer
         */
        scope.renderFooter = function () {
            tools.loadTemplate(commonTpl, function (compiler) {
                var htmlStr = compiler({
                    "commonFooter": true
                });
                $(".page").append(htmlStr);

            });
            //调整位置
            /*var bh = $("body").height();
            // console.log(bh);
            var sh = window.screen.height;
            // console.log(sh);
            if ((bh < sh) && $("footer").length > 0 && ($("header").length > 0)) {
                //  console.log("ok");
                // 可以尝试去了setTimeout，加上的原因是防止footer的dom没有加载就操作
                setTimeout(function () {
                    $("footer").css({"position": "fixed"});
                }, 110);
            } else {

                $("footer").css({"position": "static"});
            }*/
        };

        scope.renderWeatherInfo = function (data) {
            $("#weatherInfo").text(data);
        };

        /**
         * 根据用户登录状态设置头部
         */
        scope.setUserInfo = function () {
            //登录
            if (localStorage.getItem("userName")) {
                //alert("in")
                var userName = localStorage.getItem("userName"),
                    userType = localStorage.getItem("userType");
                $("header #login").addClass("hide");
                $("header #userName").attr({"userType": userType}).removeClass("hide").find("i").eq(0).text(userName);
                if (userType === "admin") {
                    $("header #userName").attr({
                        "href": "/src/module/admin/index.html",
                        "title": "我的主页"
                    });
                } else if (userType === "verify") {
                    $("header #userName").attr({
                        "href": "/src/module/verify/index.html",
                        "title": "我的主页"
                    });
                }
                $("header #register").removeClass("hide");
                $("header #logout").removeClass("hide");
            } else {//没有登录
                //alert("out")
                $("header #login").removeClass("hide");
                $("header #userName").attr({"userType": ""}).addClass("hide").find("i").eq(0).text("");
                $("header #register").removeClass("hide");
                $("header #logout").addClass("hide");
            }
        };

        /**
         * 初始化：保存控制器对象
         * @param conctroller 控制器对象
         */
        scope.init = function () {
            console.log("common V::::");
            scope.renderHeader();
            setTimeout(function () {
                scope.renderFooter();
            }, 200);
            //locationCity = remote_ip_info.city;//汉字 能保证唯一性

            // 断网
            locationCity = "西安";//
            _funs(locationCity);

        };

        return scope;
    }({}, jQuery));

});