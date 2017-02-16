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
           // _serviceHost = "http://localhost:8080/agri_I/",

        //设置请求上下文
            _serviceContext = "/",

        //设置请求的url集合
            _ACTIONS_URL = {
                //有机认证机构
                Get_Ji_Gou: (_isUseMock ? "inc/jigou.json" : "inc/jigou.json"),

                //用户
                Get_Admin_List: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "user/" + "getAdminList"),
                Add_Admin: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "user/" + "addUser"),
                Delete_User: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "user/" + "deleteUser"),


                //产品
                Delete_Product: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "product/" + "deleteProduct"),
                Get_Company_List: (_isUseMock ? "inc/mockCompanyList.json" : serviceHost + "company/" + "getCompanyList"),
                Delete_Company: (_isUseMock ? "inc/mockCompanyList.json" : serviceHost + "company/" + "deleteCompany"),


                //新闻资讯
                getNewsTypeList: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "newsType/" + "getNewsTypeList"),
                getNewsTypeById: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "newsType/" + "getNewsTypeById"),
                addNewsType: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "newsType/" + "addNewsType"),
                updateNewsType: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "newsType/" + "updateNewsType"),
                deleteNewsType: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "newsType/" + "deleteNewsType"),


                //资讯类别
                Get_News_List: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "news/" + "getNewsList"),
                Add_News: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "news/" + "addNews"),
                Delete_News: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "news/" + "deleteNews"),
                Update_News: (_isUseMock ? "inc/mockAdminList.json" : serviceHost + "news/" + "updateNews"),
                Get_News_By_ID: (_isUseMock ? "inc/mockNewsByID.json" : serviceHost + "news/" + "getNewsById"),



                //产品
                Get_Products_List: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "product/" + "null"),
                Get_Product_List_With_Page: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "product/" + "getProductListWithPage"),
                Total_Count_Product: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "product/" + "totalCountProduct"),


                //日志名称
                getProductLogTypeList: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "productLogType/" + "getProductLogTypeList"),
                getProductLogTypeById: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "productLogType/" + "getProductLogTypeById"),
                addProductLogType: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "productLogType/" + "addProductLogType"),
                updateProductLogType: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "productLogType/" + "updateProductLogType"),
                deleteProductLogType: (_isUseMock ? "inc/mockProductsList.json" : serviceHost + "productLogType/" + "deleteProductLogType"),
            };

        /**
         * 认证机构
         */
        scope.getJigou = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Ji_Gou,data).then(success, error);
        };  /**
         * admin,verify列表的接口
         */
        scope.getAdminList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Admin_List,data).then(success, error);
        };

        /**
         * 添加一个admin,verify
         */
        scope.addAdmin = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Add_Admin,data).then(success, error);
        };
        /**
         * 删除一个user admin,verify
         */
        scope.deleteUser = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Delete_User,data).then(success, error);
        };
        /**
         * 删除一个产品
         */
        scope.deleteProduct = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Delete_Product,data).then(success, error);
        };

        /**
         * 公司列表的接口
         */
        scope.getCompanyList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Company_List,data).then(success, error);
        };
        /**
         * 删除一个公司的接口
         */
        scope.deleteCompany = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Delete_Company,data).then(success, error);
        };
        /**
         * news列表的接口
         */
        scope.getNewsList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_News_List,data).then(success, error);
        };
        /**
         * 添加news
         */
        scope.addNews = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Add_News,data).then(success, error);
        };
        /**
         * 编辑更新news
         */
        scope.updateNews = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Update_News,data).then(success, error);
        };
        /**
         * 删除news
         */
        scope.deleteNews = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Delete_News,data).then(success, error);
        };
        /**
         * news id获取
         */
        scope.getNewsById = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_News_By_ID,data).then(success, error);
        };

        /**
         *
         */
         scope.getNewsTypeList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getNewsTypeList,data).then(success, error);
         };  /**
         *
         */
        scope.getNewsTypeById = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getNewsTypeById,data).then(success, error);
        };  /**
         *
         */
        scope.addNewsType = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.addNewsType,data).then(success, error);
        };  /**
         *
         */
        scope.updateNewsType = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.updateNewsType,data).then(success, error);
        };  /**
         *
         */
        scope.deleteNewsType = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.deleteNewsType,data).then(success, error);
        };



        /**
         * 产品列表
         */
        scope.getProductsList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Products_List,data).then(success, error);
        };
        /**
         * 产品列表分页
         */
        scope.getProductListWithPage = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_Product_List_With_Page,data).then(success, error);
        };

        /**
         * 产品总数统计
         */
        scope.totalCountProduct = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Total_Count_Product,data).then(success, error);
        };

        /**
         * ProductLogType列表的接口
         */
        scope.getProductLogTypeList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getProductLogTypeList,data).then(success, error);
        };
        /**
         * ProductLogType的接口
         */
        scope.getProductLogTypeById = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.getProductLogTypeById,data).then(success, error);
        };
        /**
         * ProductLogType的接口
         */
        scope.addProductLogType = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.addProductLogType,data).then(success, error);
        };
        /**
         * ProductLogType的接口
         */
        scope.updateProductLogType = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.updateProductLogType,data).then(success, error);
        };
        /**
         * ProductLogType的接口
         */
        scope.deleteProductLogType = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.deleteProductLogType,data).then(success, error);
        };


        return scope;
    }({}));
});