/**
 * @Date：2016.4.26
 * @Author: haoyong
 * @Description: verify model层
 */
define([
    "ajaxExtend"
], function (ajaxExtend) {
    "use strict";

    return (function (scope) {
        //是否使用模拟数据
        var _isUseMock = false,

        //设置请求的根路径
           // _serviceHost = "http://localhost:8080/cfsp/",

        //设置请求上下文
            _serviceContext = "",

        //设置请求的url集合
            _ACTIONS_URL = {
                Get_Company_List: (_isUseMock ? "inc/mockCompanyList.json" : serviceHost + "company/" + "getCompanyList"),
                Get_CheckAll_List: (_isUseMock ? "inc/mockCheckAllList.json" : serviceHost + _serviceContext + "null"),
                Verify_Company: (_isUseMock ? "inc/mockCheckAllList.json" : serviceHost + "company/" + "verifyCompany"),
                UnVerify_Company: (_isUseMock ? "inc/mockCheckAllList.json" : serviceHost + "company/" + "unVerifyCompany"),
                Get_ReportAll_List: (_isUseMock ? "inc/mockReportAllList.json" : serviceHost + _serviceContext + "null"),
                Get_ReportOne_List: (_isUseMock ? "inc/mockReportOneList.json" : serviceHost + "product/" + "getProductListByCompanyId"),
                Get_Batch_List_By_Status: (_isUseMock ? "inc/mockReportOneList.json" : serviceHost + "batch/" + "getBatchListByStatus"),
                Update_Batch: (_isUseMock ? "inc/mockReportOneList.json" : serviceHost + "batch/" + "updateBatch"),
                updateProduct: (_isUseMock ? "inc/mockReportOneList.json" : serviceHost + "product/" + "updateProduct"),
            };

        /**
         * 公司列表的接口
         */
        scope.getCompanyList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Company_List,data).then(success, error);
        };

        /**
         * 审核通过
         */
        scope.verifyCompany = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Verify_Company,data).then(success, error);
        };

        /**
         * 踢下审核
         */
        scope.unVerifyCompany = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.UnVerify_Company,data).then(success, error);
        };


        /**
         * 审核列表的接口
         */
        scope.getCheckAllList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_CheckAll_List,data).then(success, error);
        };
        /**
         * 大报表列表的接口
         */
        scope.getReportAllList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_ReportAll_List,data).then(success, error);
        };
        /**
         * 细节报表列表的接口
         */
        scope.getReportOneList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_ReportOne_List,data).then(success, error);
        };

        /**
         * 根据status 获取批次列表（未审核）
         */
        scope.getBatchListByStatus = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Batch_List_By_Status,data).then(success, error);
        };

        /**
         * 修改批次status （ 审核）
         */
        scope.updateBatch = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Update_Batch,data).then(success, error);
        };

        /**
         * 有机认证产品
         */
        scope.updateProduct = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.updateProduct,data).then(success, error);
        };

        return scope;
    }({}));
});