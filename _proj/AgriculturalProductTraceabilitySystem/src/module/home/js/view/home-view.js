/**
 * @Date：2016.4.14
 * @Author: haoyong
 * @Description: home模块的view层
 */
define([
    "jquery",
    "../view/sliderPics",

    "../model/home-model",
    "tools",
    "layer",
    /*"text!index/list-tpl.html"*/
    "qrcode"
], function (jQuery, slider, Model, tools, layer) {
    return (function (scope, $) {
        var _controller = null,//控制器对象
            _casesTpl = "/src/module/home/inc/indexTpl.html",
            _data = {},
            _eventHandler = {
                //案例的点击跳转连接
                "companyLink": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    //TODO 调用控制器的业务
                    alert("companyLink TODO");
                },

                //向左滑动
                "turnLeft": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var $rootEle = $("#main-item").find(".cases-item").not(".cases-item-hidden");
                    if ($rootEle.length > 4) {
                        $rootEle.eq(0).addClass("cases-item-hidden").fadeOut();
                    }

                },

                //向右滑动
                "turnRight": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var $rootEle = $("#main-item").find(".cases-item").filter(".cases-item-hidden");
                    if ($rootEle.length > 0) {
                        $rootEle.last().removeClass("cases-item-hidden").fadeIn();
                    }
                },
                //搜索溯源
                "mainSearch": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var number = $(this).prev("input[name='s']").val();
                    _data = {};
                    //var code = number.substring(8);
                    _data.code = number;
                    var companyId, batchId;
                    if (number.length == 13) {
                        Model.getBatchByCode(_data, function (res) {
                            if (res.code === 200) {
                                var productId = res.data.productId;
                                Model.getProductById({"id": productId}, function (res) {
                                    if (res.code === 200) {
                                        companyId = res.data.companyId;

                                        location.href = "/src/module/trace/log.html?companyId=" + companyId + "&batchId=" + batchId;
                                    } else {
                                        layer.msg("输入的产品编号有误，无法查询", {icon: 2});
                                    }
                                }, function () {
                                    layer.msg("服务器出错，访问失败", {icon: 2});
                                });
                                batchId = res.data.id;
                            } else if (res.code === 500) {
                                layer.msg("输入的产品编号有误，无法查询", {icon: 2});
                            }

                        }, function () {
                            layer.msg("服务器出错，访问失败", {icon: 2});
                        });
                    } else if (number.length == 4) {
                        Model.getCompanyByCode(_data, function (res) {
                            if (res.code === 200) {

                                companyId = res.data.id;

                                location.href = "/src/module/trace/index.html?companyId=" + companyId;

                                batchId = res.data.id;
                            } else if (res.code === 500) {
                                layer.msg("输入的公司编号有误，查询失败", {icon: 2});
                            }

                        }, function () {
                            layer.msg("服务器出错，访问失败", {icon: 2});
                        });
                    } else {
                        layer.msg("输入的编码不合法 请重新确认", {icon: 2});
                    }

                },

                "goToNews": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var newsId = $(this).data("newsid");
                    location.href = "/src/module/news/index.html?newsId=" + newsId;
                }


            },
            /**
             * 绑定事件
             * @param selector
             * @private
             */
            _bindEvents = function (selector) {
                var handler = _eventHandler;
                console.log("绑定" + selector + $(selector).find("[data-event]").length);
                $(selector).find("[data-event]").each(function () {
                    $(this).off("click").off($(this).data("event"), handler[$(this).data("handler")]).on($(this).data("event"), handler[$(this).data("handler")]);
                });
            },
        //加载滚动图片
            _loadCarousel = function () {
                //console.log("加载滚动图片");
                slider.init($('#banner_tabs'), {
                    time: 5000,
                    delay: 400,
                    event: 'hover',
                    auto: true,
                    mode: 'fade',
                    controller: $('#bannerCtrl'),
                    activeControllerCls: 'active'
                });

                //前进后退事件在原文件写了 太难改进模块化了
                /*  $('#banner_tabs .flex-prev').click(function () {
                 slider.prev();
                 });
                 $('#banner_tabs .flex-next').click(function () {
                 slider.next();
                 });*/
            },
            /**
             * 如果高度>70就隐藏
             */
            _isShowHomeSearchBox = function () {
                var $search = $(".long-header-search").eq(0);
                if ((($("header").length > 0) && $("header").height() < 70)) {
                    $search.removeClass("hide");
                } else {
                    $search.addClass("hide");
                }
            };

        //案例渲染和事件
        scope.renderCases = function (data) {
            data = [
                {"name": "xxxxxxxxx1"},
                {"name": "xxxxxxxxx2"},
                {"name": "xxxxxxxxx3"},
                {"name": "xxxxxxxxx4"},
                {"name": "xxxxxxxxx5"},
                {"name": "xxxxxxxxx6"},
                {"name": "xxxxxxxxx7"}
            ];
            tools.loadTemplate(_casesTpl, function (compiler) {
                var htmlStr = compiler({
                    "cases": true,
                    "data": data
                });
                $("#main-item").find("ul").prepend(htmlStr);

                _bindEvents(".cases-container");
            });

        };


        /**
         * 初始化：保存控制器对象
         * @param conctroller 控制器对象
         */
        scope.init = function (conctroller) {
            console.log("V::::");

            //加载轮播图片
            _loadCarousel();
            scope.renderCases({});
            _bindEvents(".long-header-search");
            //判断是否渲染主页的长搜索框
            //_isShowHomeSearchBox();
            // $(window).on("resize", _isShowHomeSearchBox);

            _bindEvents(".ads");
            _bindEvents(".service-list");
            _bindEvents("#banner_tabs");

            _controller = conctroller;


        };

        return scope;
    }({}, jQuery));

});