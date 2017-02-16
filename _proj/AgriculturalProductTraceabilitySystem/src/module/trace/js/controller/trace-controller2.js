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
    "layer",

    "global"
], function (jQuery, Model, View, tools, companyView, companyModel, layer) {
    "use strict";
    // console.log(newsCtr);
    return (function (scope, $) {
        var reqs = tools.GetRequest();
        var strs = reqs.split("&");

        var companyId = strs[0].split("=")[1];
        var batchId = strs[1].split("=")[1];
        var productId = "";
        console.log(companyId, batchId);
        var _tabPanelsTpl = "/src/module/trace/inc/tabPanelsTpl.html";


        scope.init = function () {
            //View.init(scope);
            console.log("trace log C:::");
            scope.renderDetail(function() {
                //评论提交
                $("#submitComment").click(function() {
                    var _data = {};
                    _data.companyId = companyId;

             /*       $.ajax({
                        url: "http://www.w3dev.cn/getip.ashx?js=1",
                        success: function(res) {
                            console.log(res);
                        }
                    });*/
                    if($("#comment-panel").find("input[name='title']").val().trim() === "") {
                        layer.msg("评论主题不能为空",{icon: 2});
                        return;
                    }
                    if($("#comment-panel").find("[name='content']").val().trim() === "") {
                        layer.msg("评论内容不能为空",{icon: 2});
                        return;
                    }
                    if($("#comment-panel").find("input[name='phone']").val().trim() !== "") {
                        _data.phone = $("#comment-panel").find("input[name='phone']").val();
                    }

                    _data.title = $("#comment-panel").find("input[name='title']").val();
                    _data.content = $("#comment-panel").find("[name='content']").val();

                    if(localStorage.getItem("commentStar")) {
                        _data.star = localStorage.getItem("commentStar");
                        localStorage.removeItem("commentStar");
                    }
                    console.log(_data);
                    companyModel.addWord(_data,function(res) {
                        if (res.code === 200) {
                            layer.msg(res.message + " 谢谢您的反馈", {icon: 1});
                            $("#comment-panel").find("input").val("");
                            $("#comment-panel").find("textarea").val("");
                        } else if(res.code === 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    },function() {
                        layer.msg("服务器出错，提交评论失败", {icon: 2});
                    });
                });
            });



        };

        /**
         *  日志
         */
        scope.renderDetail = function (callback) {
            companyModel.getProductLogListByBatch({"batchId": batchId}, function (res) {
                    if (res.code === 200) {
                        tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                            var htmlStr = compiler({
                                "logList": true,
                                "data": res.data
                            });
                            $("#panel-content").html(htmlStr);
                            productId = res.data[0].productId;
                            callback();
                            Model.getProductById({"id": productId}, function (res1) {
                                //logsFromProduct
                                if (res.code === 200) {
                                    tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                                        var htmlStr1 = compiler({
                                            "logsFromProduct": true,
                                            "data": res1.data
                                        });
                                        $(".logsFromProduct").eq(0).html(htmlStr1);
                                        $("#product-name-i").html(res1.data.name);
                                    });
                                }
                            }, function () {
                                layer.msg("服务器出错，获取产品信息失败", {icon: 2});
                            });

                            $(".timeTamp").each(function () {
                                $(this).text(tools.mills2str(parseInt($(this).text())));
                            });

                            layer.photos({
                                photos: '#layer-log-photos'
                            });

                            $("#traceToCompany").click(function () {
                                location.href = "http://" + localIp + ":8089/src/module/trace/index.html?companyId=" + companyId;
                            });
                        });

                    } else {
                        layer.msg(res.data.message, {icon: 2});
                    }
                },
                function () {
                    layer.msg("服务器出错 获取产品日志记录出错", {icon: 2});
                }
            )
        };
        return scope;
    }({}, jQuery));
});