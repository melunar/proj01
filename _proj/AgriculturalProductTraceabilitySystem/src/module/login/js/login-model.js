/**
 * @Date：1999.3.24
 * @Author:xx
 * @Description:xx
 */
define([
    "ajaxExtend"
], function (ajaxExtend) {
    "use strict";

    return (function (scope) {
        //是否使用模拟数据
        var _isUseMock = false,


        //设置请求的根路径
            //_serviceHost = "http://localhost:8080/agri_I/",

        //设置请求上下文
            _serviceContext = "user/",

        //设置请求的url集合
            _ACTIONS_URL = {
                Login: (_isUseMock ? "" : serviceHost + _serviceContext + "userLogin"),
                company_Register: (_isUseMock ? "" : serviceHost + "company/" + "registerCompany")
            };

        /**
         * 登录
         */
        scope.login = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Login,data).then(success, error);
        };
        /**
         * 企业注册
         */
        scope.companyRegister = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.company_Register,data).then(success, error);
        };
        return scope;
    }({}));
});