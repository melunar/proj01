/**
 * @Date：2014.4.26
 * @Author: haoyong
 * @Description: verify controller层
 */
define([
    "jquery",
    "../model/admin-model",
    "../view/admin-view",
    "tools",
    "global",
    "../../../news/js/model/news-model",

    "layer"
], function (jQuery, Model, View, tools, global,NewsModel) {
    "use strict";

    var _pageIndex = 0,
        _pageSize = 5;

    return (function (scope, $) {
        scope.init = function () {
            View.init(scope);
            console.log("admin C::: 初始化");
        };



        /**
         * 加载admin欢迎页面
         */
        scope.renderAdminWelcome_C = function () {
            $("#pagination").empty();
            View.renderAdminWelcome();
        };
        /**
         * 加载admin列表，并添加分页
         */
        scope.renderAdminList_C = function (type) {
            $("#pagination").empty();
            Model.getAdminList({"type": type}, function (res) {
                if (res.code === 200) {
                    View.renderAdminList(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("加载admin列表失败", {icon: 2});
            });
        };
        /**
         * 加载Verify列表，
         */
        scope.renderVerifyList_C = function (type) {
            $("#pagination").empty();
            Model.getAdminList({"type": type}, function (res) {
                if (res.code === 200) {
                    View.renderVerifyList(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("加载admin列表失败", {icon: 2});
            });
        };
        /**
         * 添加一个user
         */
        scope.addAdmin_C = function (data, callback) {

            Model.addAdmin(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，添加失败", {icon: 2});
            });
            callback();
        };
        /**
         * 添加一个ProductLogType
         */
        scope.addProductLogType_C = function (data, callback) {
            Model.addProductLogType(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，添加失败", {icon: 2});
            });
            callback();
        };

        /**
         * 更新一个ProductLogType
         */
        scope.updateProductLogType_C = function (data, callback) {
            Model.updateProductLogType(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，添加失败", {icon: 2});
            });
            callback();
        };
        /**
         * 删除一个一个user
         */
        scope.deleteUser_C = function (data,callback) {
            Model.deleteUser(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，删除失败", {icon: 2});
            });
            callback();
        };

        /**
         * 删除一个ProductLogType
         */
        scope.deleteProductLogType_C = function (data,callback) {
            Model.deleteProductLogType(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，删除失败", {icon: 2});
            });
            callback();
        };

        /**
         * 删除一个产品
         */
        scope.deleteProduct_C = function (data,callback) {
            Model.deleteProduct(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，删除失败", {icon: 2});
            });
            callback();
        };
        /**
         * 删除公司
         */
        scope.deleteCompany_C = function (data,callback) {
            Model.deleteCompany(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                }
            }, function () {
                layer.msg("服务器出错，删除失败", {icon: 2});
            });
            callback();
        };
        /**
         * 加载公司列表，并添加分页
         */
        scope.renderCompanyList_C = function () {
            $("#pagination").empty();
            Model.getCompanyList({}, function (res) {
                if (res.code === 200) {
                    View.renderCompanyList(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("加载公司列表失败", {icon: 2});
            });
        };
        /**
         * 加载产品环节列表
         */
        scope.renderProductLogTypeList_C = function () {
            $("#pagination").empty();
            Model.getProductLogTypeList({}, function (res) {
                if (res.code === 200) {
                    View.renderProductLogTypeList(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("加载公司列表失败", {icon: 2});
            });
        };
        /**
         * 加载产品列表，并添加分页===================================================
         */
        scope.renderProductList_C = function () {
            $("#pagination").empty();
            var totalCount = 0;
            Model.getProductListWithPage({"pageSize":_pageSize,"currentPage": 1}, function (res) {
                    if (res.code === 200) {
                        View.renderProductList(res.data);
                        layer.msg(res.message, {icon: 1});
                    } else if (res.code === 500) {
                        layer.msg(res.message, {icon: 2});
                    }
                }, function () {
                    layer.msg("服务器出错，加载产品列表失败", {icon: 2});
                }
            );
            Model.totalCountProduct({},function(res) {
                if (res.code === 200) {
                    totalCount = res.data;
                    layer.msg(res.message, {icon: 1});
                    tools.setPagination(totalCount, "#pagination", _pageSize, _pageIndex, function (nextPage) {
                        var _data = {};
                        _pageIndex = nextPage;
                        _data.currentPage = _pageIndex;
                        _data.pageSize = _pageSize;
                        console.log(_data);
                        Model.getProductListWithPage(_data, function (res) {
                                if (res.code === 200) {
                                    View.renderProductList(res.data);
                                    layer.msg(res.message, {icon: 1});
                                } else if (res.code === 500) {
                                    layer.msg(res.message, {icon: 2});
                                }
                            }, function () {
                                layer.msg("服务器出错，加载列表失败", {icon: 2});
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
        /**
         * 加载news列表，并添加分页
         */
        scope.renderNewsList_C = function () {
            $("#pagination").empty();
            /*Model.getNewsList({}, function (res) {
                if (res.code === 200) {
                    View.renderNewsList(res.data);
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("加载新闻列表失败", {icon: 2});
            });*/
            var totalCount = 0;
            NewsModel.getNewsListWithPage({"pageSize":_pageSize,"currentPage": 1}, function (res) {
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
            NewsModel.totalCountNews({},function(res) {
                if (res.code === 200) {
                    totalCount = res.data;
                    layer.msg(res.message, {icon: 1});
                    tools.setPagination(totalCount, "#pagination", _pageSize, _pageIndex, function (nextPage) {
                        var _data = {};
                        _pageIndex = nextPage;
                        _data.currentPage = _pageIndex;
                        _data.pageSize = _pageSize;
                        console.log(_data);
                        NewsModel.getNewsListWithPage(_data, function (res) {
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
        /**
         * 保存一个新闻
         */
        scope.addNews_C = function (data,callback) {
            Model.addNews(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                    callback();
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                    return false;
                }
            }, function () {
                layer.msg("服务器出错，添加资讯失败", {icon: 2});
                return false;
            });
        };
        /**
         * 编辑一个新闻
         */
        scope.updateNews_C = function (data,callback) {
            Model.updateNews(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                    callback();
                } else if (res.code === 500) {
                    layer.msg(res.message, {icon: 2});
                    return false;
                }
            }, function () {
                layer.msg("服务器出错，保存资讯失败", {icon: 2});
                return false;
            });
        };

        /**
         * 删除一个新闻
         */
        scope.deleteNews_C = function (data,callback) {
            Model.deleteNews(data, function (res) {
                if (res.code === 200) {
                    layer.msg(res.message, {icon: 1});
                }
            }, function () {
                layer.msg("服务器出错，删除资讯失败", {icon: 2});
            });
            callback();
        };
        /**
         * 编辑 新建news
         */
        scope.renderNewsEditOrAdd_C = function (id) {
            $("#pagination").empty();
            if (typeof id !== "undefined") {
                Model.getNewsById({"id": id}, function (res) {
                    if (res.code === 200) {
                        View.renderNewsEditOrAdd(res.data);
                        layer.msg(res.message, {icon: 1});
                    }
                }, function () {
                    layer.msg("加载新闻面板失败", {icon: 2});
                });
            } else {
                View.renderNewsEditOrAdd();
            }
        };

        /**
         * news type List
         */
        scope.renderNewsTypeList_C = function (callback) {
            $("#pagination").empty();
                Model.getNewsTypeList({}, function (res) {
                    if (res.code === 200) {
                        callback(res.data);
                        layer.msg(res.message, {icon: 1});
                    }
                }, function () {
                    layer.msg("加载新闻类别失败", {icon: 2});
                });
        };
        /**
         * news type List
         */
        scope.renderNewsTypeList1_C = function () {
            $("#pagination").empty();
                Model.getNewsTypeList({}, function (res) {
                    if (res.code === 200) {
                        View.renderNewsTypeList(res.data);
                        layer.msg(res.message, {icon: 1});
                    }
                }, function () {
                    layer.msg("加载新闻类别失败", {icon: 2});
                });
        };

        return scope;
    }({}, jQuery));
});