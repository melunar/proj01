/**
 * @Date：1999.3.24
 * @Author:haoyong
 * @Description:[[]]
 */
define([
    "jquery",
    "tools",
    "layer",
    "md5",


    "global",
    "/src/libs/xhEditor/js/xheditor-1.2.2.min.js"
], function (jQuery, tools, layer, md5) {
    /**
     * 返回一个带有自定义域scope的视图
     */
    return (function (scope, $) {
            var _data = {},
                _controller = null,
                _tpl = "/src/module/news/inc/tpl.html",

                /**
                 * 事件处理handler
                 * @private
                 */
                _eventHandler = {
                    /**
                     * 显示news列表
                     * @param e
                     */
                    "showOneNewsList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderNewsList_C();
                    },
                    /**
                     * yige 新闻
                     * @param e
                     */
                    "showOneNews": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var id = $(this).data("id");
                        _controller.renderNewsById_C(id);
                    },
                    /**
                     * prev 新闻
                     * @param e
                     */
                    "showOneNewsPrev": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var id = parseInt($(this).data("id"));
                        _controller.renderNewsByIdPrev_C(id);

                        /*
                        取出上一篇的ID：select * from news where id<本ID号 order by desc
                        取出下一篇的ID：select * from news where id>本ID号 order by asc*/

                    },
                    /**
                     * next 新闻
                     * @param e
                     */
                    "showOneNewsNext": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var id = parseInt($(this).data("id"));
                        _controller.renderNewsByIdNext_C(id + 1);
                    },

                },

                /**
                 * 动态绑定事件
                 * @param selector 选择器
                 * 根据选择器寻找需要绑定的元素给予绑定
                 */
                _bindEvents = function (selector) {
                    var handeler = _eventHandler;
                    console.log("绑定" + selector + ":" + $(selector).find("[data-event]").length);
                    $(selector).find("[data-event]").each(function () {
                        $(this).off("click").off($(this).data("event"), handeler[$(this).data("handler")]).on($(this).data("event"), handeler[$(this).data("handler")]);
                    });
                };

            //news列表
            scope.renderNewsList = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "newsList": true,
                        "data": data
                    });
                    $("#pagination").removeClass("hide");
                    $(".rounded-list").html(htmlStr);
                    _bindEvents(".rounded-list");

                    $("li a span").each(function () {
                        $(this).text(tools.mills2datetime(parseInt($(this).text())));
                    });
                });
            };
            //news
            scope.renderNewsById = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "news": true,
                        "data": data
                    });
                    $(".rounded-list").html(htmlStr);
                    $(".rounded-list .news-content").html(data.content);
                    $(".news-time").each(function () {
                        $(this).text(tools.mills2datetime(parseInt($(this).text())));
                    });
                    $("#pagination").addClass("hide");
                    _bindEvents(".rounded-list");

                });

            };
            /**
             * 初始化：保存控制器对象
             * @param conctroller 控制器对象
             */
            scope.init = function (conctroller) {
                //绑定tabpanel
                _bindEvents("#body");

                _controller = conctroller;


            };
            return scope;
        }({}, jQuery)
    );

});