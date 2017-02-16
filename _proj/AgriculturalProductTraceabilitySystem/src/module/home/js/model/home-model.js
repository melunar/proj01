/**
 * @Date：2016.4.14
 * @Author:haoyong
 * @Description:model层
 */
define([
    "ajaxExtend"
], function (ajaxExtend) {
    "use strict";

    return (function (scope) {
        //是否使用模拟数据
        var _isUseMock = false,

        //设置请求的根路径
            //_serviceHost = "/service/",

        //设置请求上下文
            //_serviceContext = "",

        //设置请求的url集合
            _ACTIONS_URL = {
                Get_Batch_By_Code: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "batch/" + "getBatchByCode"),
                getProductById: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "product/" + "getProductById"),
                getCompanyByCode: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "company/" + "getCompanyByCode"),
            };

        /**
         * batch from code
         */
        scope.getBatchByCode = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Batch_By_Code, data).then(success, error);
        };

        /**
         * product from id
         */
        scope.getProductById = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getProductById, data).then(success, error);
        };

        /**
         * company from code
         */
        scope.getCompanyByCode = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getCompanyByCode, data).then(success, error);
        };

        return scope;
    }({}));
});