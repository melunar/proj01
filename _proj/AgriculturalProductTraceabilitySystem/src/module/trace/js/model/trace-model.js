/**
 * @Date：2016.4.20
 * @Author: haoyong
 * @Description: company model层
 */
define([
    "ajaxExtend"
], function (ajaxExtend) {
    "use strict";

    return (function (scope) {
        //是否使用模拟数据
        var _isUseMock = false,

        //设置请求的根路径
            //_serviceHost = "/ip地址 + service/",

        //设置请求上下文
            _serviceContext = "",

        //设置请求的url集合
            _ACTIONS_URL = {
                Get_Company_Info_BY_ID: (_isUseMock ? "/inc/monitorSystem.json" : serviceHost + "company/" + "getCompanyById"),
                Update_Company: (_isUseMock ? "inc/mockCheckAllList.json" : serviceHost + "company/" + "updateCompany"),
                Get_Product_List_By_CompanyId: (_isUseMock ? "inc/mockCheckAllList.json" : serviceHost + "product/" + "getProductListByCompanyId"),
                Delete_Product: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "product/" + "deleteProduct"),
                Add_Product: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "product/" + "addProduct"),
                Get_Batch_List_ByProductID: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "batch/" + "getBatchListByProductId"),
                Get_Batch_List_ByProductID_AndStatus: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "batch/" + "getBatchListByProductIdAndStatus"),
                Add_Batch: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "batch/" + "addBatch"),


                getProductById: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "product/" + "getProductById"),


                //日志
                getProductLogListByBatch: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "productLog/" + "getProductLogListByBatch"),
                addProductLog: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "productLog/" + "addProductLog"),
                updateProductLog: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "productLog/" + "updateProductLog"),
                deleteProductLog: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "productLog/" + "deleteProductLog"),

                getProductLogTypeList: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "productLogType/" + "getProductLogTypeList"),
            };

        /**
         * product from id
         */
        scope.getProductById = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getProductById, data).then(success, error);
        };


        /**
         * 获取一个公司
         */
        scope.getCompanyById = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Company_Info_BY_ID, data).then(success, error);
        };

        /**
         * 获取一个公司id 下的产品
         */
        scope.getProductListByCompanyId = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Product_List_By_CompanyId, data).then(success, error);
        };


        /**
         * 添加公司一个产品
         */
        scope.addProduct = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Add_Product,data).then(success, error);
        };
        /**
         *  一个产品所有 批次
         */
        scope.getBatchListByProductId = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Batch_List_ByProductID,data).then(success, error);
        };

        /**
         *  一个产品所有 批次 status
         */
        scope.getBatchListByProductIdAndStatus = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Batch_List_ByProductID_AndStatus,data).then(success, error);
        };

        /**
         * 添加 一个产品  批次
         */
        scope.addBatch = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Add_Batch,data).then(success, error);
        };

        /**
         * 删除一个产品
         */
        scope.deleteProduct = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Delete_Product,data).then(success, error);
        };

        /**
         * 编辑公司信息
         */
        scope.updateCompany = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Update_Company, data).then(success, error);
        };


        /**
         * 获取批次日志
         */
        scope.getProductLogListByBatch = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getProductLogListByBatch, data).then(success, error);
        };

        /**
         * 添加日志
         */
        scope.addProductLog = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.addProductLog, data).then(success, error);
        };

        /**
         * 更新日志
         */
        scope.updateProductLog = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.updateProductLog, data).then(success, error);
        };

        /**
         * 删日志
         */
        scope.deleteProductLog = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.deleteProductLog, data).then(success, error);
        };

        /**
         * 日志Type列表的接口
         */
        scope.getProductLogTypeList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getProductLogTypeList,data).then(success, error);
        };

        return scope;
    }({}));
});