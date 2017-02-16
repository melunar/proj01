/**
 * @Date：2014.4.26
 * @Author: haoyong
 * @Description: verify controller层
 */
define([
    "jquery",
    "../model/verify-model",
    "../view/verify-view",
    "tools",
    "global",

    "qrcode",
    "layer"
], function (jQuery, Model, View, tools, global) {
    "use strict";

    return (function (scope, $) {
        scope.init = function () {
            if(localStorage.getItem("userType") !== "verify") {
                alert()
                window.location = "/src/module/home/index.html";
                //document.write("<h1 style='text-align: center; color: red'>没有登录，禁止访问</h1>");
                return;
            }
            View.init(scope);
            console.log("verify C::: 初始化");
            scope.renderCompanyList_C();
        };

        /**
         * 加载公司列表，并添加分页
         */
        scope.renderCompanyList_C = function () {
            Model.getCompanyList({}, function (res) {
                    if (res.code === 200) {
                        View.renderCompanyList(res.data);

                        //TODO 缓存公司列表
                        localStorage.setItem("companyList",JSON.stringify(res.data));
                       // localStorage.companyList = res.data;

                        //console.log(localStorage.companyList);

                        layer.msg(res.message, {icon: 1});
                        // TODO 分页
                    }
                }, function () {
                    layer.msg("加载公司列表失败", {icon: 2});
                });
        };

        /**
         * 加载审核批次列表
         */
        scope.renderCheckAllList_C = function (data) {
            Model.getBatchListByStatus(data, function (res) {
                    if (res.code === 200) {
                        View.renderCheckAllList(res.data);
                        layer.msg(res.message, {icon: 1});
                        // TODO 分页
                    }
                }, function () {
                    layer.msg("服务端错误，加载审核表失败", {icon: 2});
                });
        };

        /**
         *  有机认证产品
         */
        scope.checkProduct_C = function (data,callback) {
            Model.updateProduct(data, function (res) {
                    if (res.code === 200) {
                        layer.msg(res.message, {icon: 1});
                        callback();
                    }
                }, function () {
                    layer.msg("服务端错误，有机认证失败", {icon: 2});
                });
        };

        /**
         *  审核批次
         */
        scope.updateBatch_C = function (data,callback) {
            Model.updateBatch(data, function (res) {
                    if (res.code === 200) {
                        layer.msg(res.message, {icon: 1});
                        callback();
                    }
                }, function () {
                    layer.msg("服务端错误，审核失败", {icon: 2});
                });
        };

        /**
         * 加载大报表列表
         */
        scope.renderReportAllList_C = function () {
            Model.getReportAllList({}, function (res) {
                    if (res.code === 200) {
                        View.renderReportAllList(res.data);
                        layer.msg(res.message, {icon: 1});
                        // TODO 分页
                    }
                }, function () {
                    layer.msg("加载报表失败", {icon: 2});
                });
        };

        /**
         * 公司细节报表列表
         */
        scope.renderReportOneList_C = function (data) {
            Model.getReportOneList(data, function (res) {
                    if (res.code === 200) {
                        View.renderReportOneList(res.data);
                        layer.msg(res.message, {icon: 1});

                    }
                }, function () {
                    layer.msg("加载报表失败", {icon: 2});
                });
        };

        /**
         * 审核公司列表
         */
        scope.renderCheckCompanyList_C = function (data) {
            Model.getCompanyList(data, function (res) {
                    if (res.code === 200) {
                        View.renderCheckCompanyList(res.data);
                        layer.msg(res.message, {icon: 1});
                    } else if (res.code === 500) {
                        layer.msg(res.message, {icon: 2});
                    }
                }, function () {
                    layer.msg("服务器出错，加载公司列表失败", {icon: 2});
                });
        };

        /**
         * 审核公司列表通过的
         */
        scope.renderCheckCompanyListHistory_C = function (data) {
            Model.getCompanyList(data, function (res) {
                    if (res.code === 200) {
                        View.renderCheckCompanyListHistory(res.data);
                        layer.msg(res.message, {icon: 1});
                    } else if (res.code === 500) {
                        layer.msg(res.message, {icon: 2});
                    }
                }, function () {
                    layer.msg("服务器出错，加载公司列表失败", {icon: 2});
                });
        };

        /**
         * verifyCompany 审核通过
         */
        scope.verifyCompany_C = function (data,callback) {
            Model.verifyCompany(data, function (res) {
                    if (res.code === 200) {
                        layer.msg(res.message, {icon: 1});
                    } else if (res.code === 500) {
                        layer.msg(res.message, {icon: 2});
                    }
                }, function () {
                    layer.msg("服务器出错，操作失败", {icon: 2});
                });
            callback();
        };

        /**
         * unverifyCompany 踢下
         */
        scope.unVerifyCompany_C = function (data,callback) {
            Model.unVerifyCompany(data, function (res) {
                    if (res.code === 200) {
                        layer.msg(res.message, {icon: 1});
                    } else if (res.code === 500) {
                        layer.msg(res.message, {icon: 2});
                    }
                }, function () {
                    layer.msg("服务器出错，操作失败", {icon: 2});
                });
            callback();
        };

        return scope;
    }({}, jQuery));
});