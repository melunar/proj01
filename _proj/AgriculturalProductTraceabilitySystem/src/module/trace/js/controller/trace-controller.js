/**
 * @Date：2016.5.22
 * @Author: haoyong
 * @Description: trace controller层
 */
define([
    "jquery",
    "../model/trace-model",
    "../view/trace-view",
    "tools",
    "../../../company/js/view/company-view",//company
    "../../../company/js/model/company-model",//company
    "layer"
], function (jQuery, Model, View, tools, companyView, companyModel, layer) {
    "use strict";
   // console.log(newsCtr);
    return (function (scope, $) {
        var reqs = tools.GetRequest1();
        var companyId = reqs[1];
        var _tabPanelsTpl = "/src/module/trace/inc/tabPanelsTpl.html";
        var _companyInfo = "";
        scope.init = function () {
            //View.init(scope);
            console.log("trace C:::");
            scope.renderBase();
            $(".tab-item").eq(0).click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                scope.renderBase();
            });
            $(".tab-item").eq(1).click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                scope.renderDetail();
            });
            $(".tab-item").eq(2).click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                scope.renderInfo();
            });
        };

        /**
         * 基本信息
         */
        scope.renderBase = function () {
            companyModel.getCompanyById({"id": companyId}, function (res) {
                    if (res.code === 200) {
                        tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                            var htmlStr = compiler({
                                "base": true,
                                "data": res.data
                            });

                            _companyInfo = res.data.info;
                            $("#panel-content").html(htmlStr);
                       /*     if (typeof res.data.info !== "undefined") {
                                $("#htmlInfo").html(res.data.info);
                            }*/

                            if ($("input[data-name='status']").data("value") == "0") {
                                $("input[data-name='status']").val("没有审核通过");
                            } else {
                                $("input[data-name='status']").val("已经审核通过");
                            }
                            //时间格式
                            var timeTamp = $("#outTime").val();
                            $("#outTime").val(tools.mills2str(parseInt(timeTamp)));
                        });

                    } else {
                        layer.msg(res.data.message,{icon: 2});
                    }
                },
                function () {
                    layer.msg("服务器出错 获取公司出错",{icon: 2});
                }
            )
        };
        /**
         *  产品
         */
        scope.renderDetail = function () {
            companyModel.getProductListByCompanyId({"companyId": companyId}, function (res) {
                    if (res.code === 200) {
                        tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                            var htmlStr = compiler({
                                "detail": true,
                                "data": res.data
                            });
                            $("#panel-content").html(htmlStr);
                            $("#accordion").accordion();
                        });

                    } else {
                        layer.msg(res.data.message,{icon: 2});
                    }
                },
                function () {
                    layer.msg("服务器出错 获取产品出错",{icon: 2});
                }
            )
        };

        /**
         *  公司info
         */
        scope.renderInfo = function () {
            $("#panel-content").html(_companyInfo);
        };
        return scope;
    }({}, jQuery));
});