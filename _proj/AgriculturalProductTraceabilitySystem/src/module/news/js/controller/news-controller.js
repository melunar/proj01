/**
 * @Date：2014.4.26
 * @Author: haoyong
 * @Description: verify controller层
 */
define([
    "jquery",
    "../model/news-model",
    "../view/news-view",
    "tools",
    "global",

    "layer"
], function (jQuery, Model, View, tools) {
    "use strict";

    return (function (scope, $) {

        var _pageIndex = 0,
            _pageSize = 10;


        scope.init = function () {

            View.init(scope);
            var req = tools.GetRequest1();
            if(req) {
                var newsId = req[1];
                scope.renderNewsById_C(newsId);
                return;
            }

            console.log("news C::: 初始化");
            scope.renderNewsList_C();
        };

        /**
         * 新闻列表 分页
         */
        scope.renderNewsList_C1 = function () {
            Model.getNewsList({}, function (res) {
                if (res.code === 200) {
                    View.renderNewsList(res.data);
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，加载新闻列表失败", {icon: 2});
            });
        };

        /**
         * 新闻列表 分页
         */
        scope.renderNewsList_C = function () {
            var totalCount = 0;
            Model.getNewsListWithPage({"pageSize":_pageSize,"currentPage": 1}, function (res) {
                    if (res.code === 200) {
                        View.renderNewsList(res.data);
                        layer.msg(res.message, {icon: 1});
                    } else if (res.code === 500) {
                        layer.msg(res.message, {icon: 2});
                    }
                }, function () {
                    layer.msg("服务器出错，加载新闻列表失败", {icon: 2});
                }
            );
            Model.totalCountNews({},function(res) {
                if (res.code === 200) {
                    totalCount = res.data;
                    layer.msg(res.message, {icon: 1});
                    tools.setPagination(totalCount, "#pagination", _pageSize, _pageIndex, function (nextPage) {
                        var _data = {};
                        _pageIndex = nextPage;
                        _data.currentPage = _pageIndex;
                        _data.pageSize = _pageSize;
                        console.log(_data);
                        Model.getNewsListWithPage(_data, function (res) {
                                if (res.code === 200) {
                                    View.renderNewsList(res.data);
                                    layer.msg(res.message, {icon: 1});
                                } else if (res.code === 500) {
                                    layer.msg(res.message, {icon: 2});
                                }
                            }, function () {
                                layer.msg("服务器出错，加载新闻列表失败", {icon: 2});
                            }
                        );
                    });
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，统计失败", {icon: 2});
            });

        };
        scope.renderNewsList_C11 = function () {
            $("#pagination").pagination(100, {
                callback: PageCallback,
                prev_show_always: false,
                next_show_always: false,
                items_per_page: 10,
                first_loading: false,
                current_page: _pageIndex
            });

            function PageCallback(index, jq) {
                InitTable(index + 1);
            }

            function InitTable(pageIndex) {
                var _data = {};
                _pageIndex = pageIndex + 1;
                _data.currentPage = _pageIndex;
                _data.pageSize = 5;
                console.log(_data);
                Model.getNewsListWithPage(_data, function (res) {
                        if (res.code === 200) {
                            View.renderNewsList(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code === 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，加载新闻列表失败", {icon: 2});
                    }
                );

            }
        };

        /**
         * 获取新闻
         */
        scope.renderNewsById_C = function (id) {
            Model.getNewsById({"id": id}, function (res) {
                if (res.code === 200) {
                    View.renderNewsById(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("服务器出错，加载新闻失败", {icon: 2});
            });
        };

        /**
         * 获取下一个新闻
         */
        scope.renderNewsByIdNext_C = function (id) {
            Model.getNewsByIdNext({"id": id}, function (res) {
                if (res.code === 200) {
                    View.renderNewsById(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("没有下一篇了", {icon: 3});
            });
        };
        /**
         * 获取上一个新闻
         */
        scope.renderNewsByIdPrev_C = function (id) {
            Model.getNewsByIdPrev({"id": id}, function (res) {
                if (res.code === 200) {
                    View.renderNewsById(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("没有上一篇了", {icon: 3});
            });
        };

        return scope;
    }({}, jQuery));
});