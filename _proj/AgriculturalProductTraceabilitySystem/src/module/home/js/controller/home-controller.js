/**
 * @Date：2014.4.14
 * @Author: haoyong
 * @Description: controller层
 */
define([
    "jquery",
    "../model/home-model",
    "../view/home-view",
    "tools",
    "qrcode"
], function (jQuery, Model, View, tools, qrcode) {
    "use strict";

    return (function (scope, $) {
        scope.init = function () {
            View.init(scope);
            var self = this;
            console.log("home C:::");

            //self.loadinc();
            //self.loadincData();
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