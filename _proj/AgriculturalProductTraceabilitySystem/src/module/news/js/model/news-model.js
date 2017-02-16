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
            //_serviceHost = "http://localhost:8080/agri/",

        //设置请求上下文
            _serviceContext = "",

        //设置请求的url集合
            _ACTIONS_URL = {
                Get_News_List: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "news/" + "getNewsList"),
                Total_Count_News: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "news/" + "totalCountNews"),
                Get_News_List_With_Page: (_isUseMock ? "inc/mockNewsList.json" : serviceHost + "news/" + "getNewsListWithPage"),
                Get_News_By_ID: (_isUseMock ? "inc/mockNewsByID.json" : serviceHost + "news/" + "getNewsById"),
                Get_News_By_ID_Next: (_isUseMock ? "inc/mockNewsByID.json" : serviceHost + "news/" + "findNewsByIdNext"),
                Get_News_By_ID_Prev: (_isUseMock ? "inc/mockNewsByID.json" : serviceHost + "news/" + "findNewsByIdPrev")
            };


        /**
         * news列表的接口
         */
        scope.getNewsList = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_News_List,data).then(success, error);
        };

        /**
         * news统计总数
         */
        scope.totalCountNews = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Total_Count_News,data).then(success, error);
        };

        /**
         * 分页
         * news列表的接口
         */
        scope.getNewsListWithPage = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_News_List_With_Page,data).then(success, error);
        };
        /**
         * news id获取
         */
        scope.getNewsById = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_News_By_ID,data).then(success, error);
        };

        /**
         * news下一个
         */
        scope.getNewsByIdNext = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_News_By_ID_Next,data).then(success, error);
        };

        /**
         * news上一个
         */
        scope.getNewsByIdPrev = function (data,success, error) {
            return ajaxExtend.getData(_ACTIONS_URL.Get_News_By_ID_Prev,data).then(success, error);
        };


        return scope;
    }({}));
});