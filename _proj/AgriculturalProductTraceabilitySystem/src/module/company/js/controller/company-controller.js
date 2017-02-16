/**
 * @Date：2014.4.20
 * @Author: haoyong
 * @Description: company controller层
 */
define([
    "jquery",
    "../model/company-model",
    "../view/company-view",
    "tools",
    "../../../news/js/controller/news-controller",//new层引用
    "qrcode"
], function (jQuery, Model, View, tools,newsCtr, qrcode) {
    "use strict";
   // console.log(newsCtr);
    return (function (scope, $) {
        scope.init = function () {
            if(localStorage.getItem("userType") !== "company" /*&& !localStorage.getItem("companyId")*/) {
                /*$(".newsList").removeClass("hide");
                newsCtr.renderNewsList_C();*/
                //$("news-panel").trigger("click");
                window.location = "/src/module/news/index.html";
              //  return;
            }

            View.init(scope);
            console.log("company C:::");
        };

        /**
         * 获取数据，渲染页面
         * 绑定事件
         */
        scope.loadincData = function () {
            Model.ajaxEvents.getTableData({}, function (data) {
                    if (data.code === 200) {
                        tools.loadTemplate("urlTpl", function (compiler) {
                            var html = compiler({
                                //一些自定义的数据
                                "dataList": true,
                                "data": data.data
                            });
                            $("*").eq(0).append(html);
                            View._bindEvents("xxselector");
                        });

                    } else {
                        alert(data.message);
                    }
                },
                function () {
                    alert("获取json数据失败");
                }
            )
        };
        return scope;
    }({}, jQuery));
});