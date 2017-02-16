/**
 * @Date：1999.3.24
 * @Author:haoyong
 * @Description:[[]]
 */
define([
    "jquery",
    "tools",
    "layer",
    "md5",
    "../model/admin-model",

    "/src/libs/xhEditor/js/xheditor-1.2.2.min.js",

    "global",
], function (jQuery, tools, layer, md5, Model, xhEditor) {
    console.log("----++", xhEditor);
    /**
     * 返回一个带有自定义域scope的视图
     */
    return (function (scope, $) {
            var _data = {},
                _controller = null,
                _tpl = "/src/module/admin/inc/admin.html",

                /**
                 * 事件处理handler
                 * @private
                 */
                _eventHandler = {

                    "adminWelcome": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $(".accordion-inner").each(function() {
                            if($(this).hasClass("selected")) {
                                $(this).removeClass("selected")
                            }
                        });
                        _controller.renderAdminWelcome_C();
                        //scope.renderCompanyList({});
                    },
                    /**
                     * 显示admin列表
                     * @param e
                     */
                    "showAdminList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var type = $(this).data("type");
                        _controller.renderAdminList_C(type);
                    },
                    /**
                     * 显示Verify列表
                     * @param e
                     */
                    "showVerifyList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var type = $(this).data("type");
                        _controller.renderVerifyList_C(type);
                    },
                    /**
                     * 显示公司列表
                     * @param e
                     */
                    "showCompanyList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderCompanyList_C();
                    },
                    /**
                     * 显示news列表
                     * @param e
                     */
                    "showNewsList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderNewsList_C();
                    },
                    /**
                     * 显示产品列表
                     * @param e
                     */
                    "showProductList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderProductList_C();
                    },
                    /**
                     * 显示产品环节定义列表
                     * @param e
                     */
                    "showProductLogTypeList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderProductLogTypeList_C();
                    },
                    /**
                     * 显示资讯类别列表
                     * @param e
                     */
                    "showNewsTypeList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderNewsTypeList1_C();
                    },
                    /**
                     * news新建
                     * @param e
                     */
                    "showNewsEditOrAdd": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderNewsEditOrAdd_C();
                    },
                    /**
                     * 编辑新闻
                     * @param e
                     */
                    "editNews": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var id = $(this).data("id");
                        _controller.renderNewsEditOrAdd_C(id);
                    },
                    /**
                     * 产品列表
                     * @param e
                     */
                    "showProductsList": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _controller.renderProductsList_C();
                    },

                    /**
                     * 添加管理员弹出框
                     * @param e
                     */
                    "showAddAdmin": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        layer.open({
                            title: "添加一个管理员",
                            type: 2,
                            area: ['320px', '290px'],
                            fix: true, //固定
                            maxmin: true,
                            content: "inc/addAdmin.html",
                            success: function (layero, index) {
                                var $panel = $(window.frames[name ^= "layui-layer-iframe"].document).find("#addAdmin");

                                $($panel).find("#addAdminSubmit").on("click", function () {
                                    _data = {};
                                    var name = $($panel).find("[name=name]").val();
                                    var p = $($panel).find("[name=password]").val();
                                    var p1 = $($panel).find("[name=password1]").val();

                                    if (name.trim() === "" || p === "" || p1 === "") {
                                        layer.msg("请填写完全", {icon: 2});
                                        return false;
                                    }
                                    if (p !== p1) {
                                        layer.msg("密码不一样", {icon: 2});
                                        return false;
                                    }
                                    if (p.toString().length < 6) {
                                        layer.msg("密码至少6位", {icon: 2});
                                        return false;
                                    }
                                    _data.name = name;
                                    _data.password = md5(p);
                                    _data.type = "admin";
                                    _controller.addAdmin_C(_data, function () {
                                        layer.close(index);
                                        setTimeout(function () {
                                            $("#adminList").trigger("click");
                                        }, loginDelayTime);
                                    });

                                });
                            }
                        });
                    },
                    /**
                     * 添加监管员弹出框
                     * @param e
                     */
                    "showAddVerify": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        layer.open({
                            title: "添加一个监管人员",
                            type: 2,
                            area: ['320px', '320px'],
                            fix: true, //固定
                            maxmin: true,
                            content: "inc/addVerify.html",
                            success: function (layero, index) {
                                var $panel = $(window.frames[name ^= "layui-layer-iframe"].document).find("#addVerify");
                                var optionsStr = {};
                                Model.getJigou({}, function(res) {
                                    if (res.code === 200) {
                                        optionsStr = res.data;
                                        var ops = [];
                                        optionsStr.each(function(item,i) {
                                            //console.log(item);
                                            //ops.push('<option data-name="' + item.name + '" data-code="' + item.code + '" data-abbr="' + item.abbr">' + item.name + "</option>");
                                            ops.push('<option data-abbr="' + item.abbr + '" data-name="' + item.name + '" data-code="' + item.code + '" value="' + item.name + '">' + item.name + "(" + item.abbr + ")"    + "</option>");
                                            $panel.find("select[name='dep']").html(ops.join(""));

                                        });
                                        //console.log(ops);
                                        layer.msg(res.message, {icon: 1});
                                    }
                                }, function () {
                                    layer.msg("加载认证机构列表失败", {icon: 2});
                                });
                                /*Model.getAdminList({"type": type}, function (res) {
                                    if (res.code === 200) {
                                        View.renderVerifyList(res.data);
                                        layer.msg(res.message, {icon: 1});
                                    }
                                }, function () {
                                    layer.msg("加载admin列表失败", {icon: 2});
                                });*/
                                $($panel).find("#addAdminSubmit").on("click", function () {
                                    _data = {};
                                    var name = $($panel).find("[name=name]").val();
                                    var p = $($panel).find("[name=password]").val();
                                    var p1 = $($panel).find("[name=password1]").val();
                                    var dep = $($panel).find("[name=dep]").val();
                                    var code = $($panel).find("[name=dep] option:selected").data("code");
                                    var abbr = $($panel).find("[name=dep] option:selected").data("abbr");

                                    if (name.trim() === "" || p === "" || p1 === "") {
                                        layer.msg("请填写完全", {icon: 2});
                                        return false;
                                    }
                                    //alert(p + " " + p1);
                                    if (p !== p1) {
                                        layer.msg("密码不一样", {icon: 2});
                                        return false;
                                    }
                                    if (p.toString().length < 6) {
                                        layer.msg("密码至少6位", {icon: 2});
                                        return false;
                                    }
                                    _data.name = name;
                                    _data.password = md5(p);
                                    _data.type = "verify";
                                    _data.dep = dep;
                                    _data.code = code;
                                    _data.abbr = abbr;
                                    _controller.addAdmin_C(_data, function () {
                                        layer.close(index);
                                        setTimeout(function () {
                                            $("#verifyList").trigger("click");
                                        }, loginDelayTime);
                                    });

                                });
                            }
                        });
                    },
                    /**
                     * 添加弹出框
                     * @param e
                     */
                    "showAddProductLogType": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                  /*      var tempStatus = $(this).data("type");
                        var name = $(this).closest("tr").find("td[data-name=name]").data("value");
                        var info = $(this).closest("tr").find("td[data-name=info]").data("value");*/
                        localStorage.setItem("tempName",$(this).closest("tr").find("td[data-name=name]").data("value"));
                        localStorage.setItem("tempInfo",$(this).closest("tr").find("td[data-name=info]").data("value"));
                        localStorage.setItem("tempId",$(this).data("id"));
                        localStorage.setItem("tempType",$(this).closest("tr").find("td[data-name=type]").data("value"));

                    //    setTimeout(function() {
                            layer.open({
                                title: "生产环节",
                                type: 2,
                                area: ['320px', '270px'],
                                fix: true, //固定
                                maxmin: true,
                                content: "inc/addProductLogType.html",
                                success: function (layero, index) {
                                    var $panel = $(window.frames[name ^= "layui-layer-iframe"].document).find("#addProductLogType");
                                    /*layer.msg(tempStatus)
                                     alert(name);
                                     alert(info);*/

                                    //编辑状态下
                                    if(localStorage.getItem("tempName") != 'null') {
                                        $($panel).find("[name=name]").val(localStorage.getItem("tempName"));
                                        $($panel).find("[name=info]").val(localStorage.getItem("tempInfo"));
                                        /*
                                        $($panel).find("[name=info] option[value=t]").select();*/
                                        var t = localStorage.getItem('tempType');
                                        $($panel).find("[name=type] option").each(function(index, item) {
                                            console.log($(this).attr("value"));
                                            if($(this).attr("value").trim() == t) {
                                                $(this).attr("selected","selected");
                                            }
                                        });
                                        var id = localStorage.getItem("tempId");
                                    }


                                   /* if(tempStatus == "edit") {//编辑状态下
                                        $($panel).find("[name=name]").val(name);
                                        $($panel).find("[name=info]").val(info);
                                    }*/

                                    $($panel).find("#addProductLogTypeSubmit").on("click", function () {
                                        _data = {};
                                        var name = $($panel).find("[name=name]").val();
                                        var info = $($panel).find("[name=info]").val();
                                        var type = $($panel).find("[name=type]").val();

                                        if (name.trim() === "") {
                                            layer.msg("请填写名称", {icon: 2});
                                            return false;
                                        }

                                        _data.name = name;
                                        _data.info = info;
                                        _data.type = type;
                                        if(localStorage.getItem("tempName") != 'null') {
                                            _data.id = id;
                                            console.log(_data)
                                            _controller.updateProductLogType_C(_data, function () {
                                                layer.close(index);
                                                setTimeout(function () {
                                                    $("#productLogTypeList").trigger("click");
                                                }, loginDelayTime);
                                                localStorage.removeItem("tempName");
                                                localStorage.removeItem("tempInfo");
                                                localStorage.removeItem("tempType");
                                                localStorage.removeItem("tempId");
                                            });
                                        } else {
                                            _controller.addProductLogType_C(_data, function () {
                                                layer.close(index);
                                                setTimeout(function () {
                                                    $("#productLogTypeList").trigger("click");
                                                }, loginDelayTime);
                                            });
                                        }


                                    });
                                }
                            });
                      //  },100);

                    },

                    /**
                     * 删除管理员弹出框
                     * @param e
                     */
                    "showDelAdmin": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var name = $(this).closest("tr").find("td[data-name=name]").data("value");
                        var id = $(this).data("id");
                        var type = $(this).data("type");
                        layer.msg("确定删除" + name + ",将无法恢复！！！", {
                            time: 0,//不自动关闭
                            btn: ["确定", "取消"],
                            yes: function (index) {
                                layer.close(index);
                                _data = {};
                                _data.id = id;
                                _controller.deleteUser_C(_data, function () {
                                    setTimeout(function () {
                                        if ("admin" === type) {
                                            $("#adminList").trigger("click");
                                        } else if ("verify" === type) {
                                            $("#verifyList").trigger("click");
                                        }
                                    }, loginDelayTime);
                                });
                            }
                        });
                    },

                    /**
                     * 删除ProductLogType弹出框
                     * @param e
                     */
                    "showDelProductLogType": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var name = $(this).closest("tr").find("td[data-name=name]").data("value");
                        var id = $(this).data("id");
                        layer.msg("确定删除'" + name + "',将无法恢复！！！", {
                            time: 0,//不自动关闭
                            btn: ["确定", "取消"],
                            yes: function (index) {
                                layer.close(index);
                                _data = {};
                                _data.id = id;
                                _controller.deleteProductLogType_C(_data, function () {
                                    setTimeout(function () {
                                        $("#productLogTypeList").trigger("click");
                                    }, loginDelayTime);
                                });
                            }
                        });
                    },
                    /**
                     * 删除公司弹出框
                     * @param e
                     */
                    "showDelCompany": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var name = $(this).closest("tr").find("td[data-name=companyName]").data("value");
                        var id = $(this).data("id");
                        layer.msg("确定删除公司" + name + ",将无法恢复！！！", {
                            time: 0,//不自动关闭
                            btn: ["确定", "取消"],
                            yes: function (index) {
                                _data = {};
                                _data.id = id;
                                _controller.deleteCompany_C(_data, function () {
                                    layer.close(index);
                                    setTimeout(function () {
                                        $("#companyList").trigger("click");
                                    }, loginDelayTime);
                                });
                            }
                        });
                    },
                    /**
                     * 删除news弹出框
                     * @param e
                     */
                    "showDelNews": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var name = $(this).closest("tr").find("td[data-name=title]").data("value");
                        var id = $(this).data("id");
                        layer.msg("确定删除新闻" + name + ",将无法恢复！！！", {
                            time: 0,//不自动关闭
                            btn: ["确定", "取消"],
                            yes: function (index) {
                                _data = {};
                                _data.id = id;
                                _controller.deleteNews_C(_data, function () {
                                    layer.close(index);
                                    setTimeout(function () {
                                        $("#newsList").trigger("click");
                                    }, loginDelayTime);
                                });
                            }
                        });
                    },

                    /**
                     * 编辑或添加新闻提交
                     * @param e
                     */
                    "addOrUpdateNewsSubmit": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        _data = {};
                        var $root = $("#admin-content");

                        var title = $($root).find("#title").val();
                        var digest = $($root).find("#digest").val();
                        var type = $($root).find("#type").val();
                        //var content = $("#content").val();//xhe0_iframe

                        //获取xheditor 内容
                        var edit = $("#content").xheditor();
                        var content = edit.getSource();

                        if (title.trim() === "" || content === "") {
                            layer.msg("请完全填写", {icon: 2});
                            return false;
                        }
                        _data.title = title;
                        _data.digest = digest;
                        _data.content = content;
                        _data.type = type;
                        var userType = localStorage.getItem("userType");
                        var userId = localStorage.getItem("userId");
                        if (!userType) {
                            layer.msg("没有登录，禁止提交");
                            return;
                        } else if (userType !== "admin") {
                            layer.msg("只有管理员可以发布文章！！");
                            return;
                        } else {
                            _data.userId = userId;
                        }
                        if ($(this).data("id") != "") {
                            _data.id = $(this).data("id");
                        }
                        console.log(_data);
                        var newsId = $(this).data("id");
                        if (newsId) {
                            _data.id = newsId;
                            _controller.updateNews_C(_data, function () {
                                setTimeout(function () {
                                    $("#newsList").trigger("click");
                                }, loginDelayTime);
                            });
                        } else {
                            _controller.addNews_C(_data, function () {
                                setTimeout(function () {
                                    $("#newsList").trigger("click");
                                }, loginDelayTime);
                            });
                        }


                    },
                    /**
                     *  删除产品id
                     * @param e
                     */
                    "showDelProducts": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var name = $(this).closest("tr").find("td[data-name=name]").data("value");
                        var id = $(this).data("id");

                        layer.msg("确定产品" + name + ",将无法恢复！！！", {
                            time: 0,//不自动关闭
                            btn: ["确定", "取消"],
                            yes: function (index) {
                                layer.close(index);
                                _data = {};
                                _data.id = id;
                                _controller.deleteProduct_C(_data, function () {
                                    setTimeout(function () {
                                        $("#productList").trigger("click");
                                    }, loginDelayTime);
                                });
                            }
                        });

                    },

                    "productLogTypeListFilter": function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var self = this;
                        var name = $(self).val();
                        $("#admin-content table tbody").eq(0).find("tr").each(function() {
                            if($(this).find("td[data-name='type']").data("value") !== name) {
                                $(this).addClass("hide");
                            } else {
                                $(this).removeClass("hide");
                            }
                        });
                    },

                },


                /**
                 * 动态绑定事件
                 * @param selector 选择器
                 * 根据选择器寻找需要绑定的元素给予绑定
                 */
                _bindEvents = function (selector) {
                    var self = this;
                    var handeler = _eventHandler;
                    console.log("绑定" + selector + ":" + $(selector).find("[data-event]").length);
                    $(selector).find("[data-event]").each(function () {
                        $(this).off("click").off($(this).data("event"), handeler[$(this).data("handler")]).on($(this).data("event"), handeler[$(this).data("handler")]);
                    });
                };


            //admin 欢迎
            scope.renderAdminWelcome = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "adminWelcome": true
                    });
                    $("#admin-content").html(htmlStr);
                    _bindEvents("#admin-content");

                });
            };
            //adminList渲染
            scope.renderAdminList = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "adminList": true,
                        "data": data
                    });
                    $("#admin-content").html(htmlStr);
                    _bindEvents("#admin-content");

                });
            };


            //verifyList渲染
            scope.renderVerifyList = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "verifyList": true,
                        "data": data
                    });
                    $("#admin-content").html(htmlStr);
                    _bindEvents("#admin-content");

                });
            };

            //商家列表
            scope.renderCompanyList = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "companyList": true,
                        "data": data
                    });
                    $("#admin-content").html(htmlStr);

                    $("td[data-name$='Time']").each(function () {
                        $(this).text(tools.mills2str(parseInt($(this).text())));
                    });
                    $("td[data-name='status']").each(function() {
                        if($(this).data("value") == 1) {
                            $(this).text("已通过");
                        } else {
                            $(this).text("待审核");
                        }
                    });
                    _bindEvents("#admin-content");

                });

            };

            //ProductLogType列表
            scope.renderProductLogTypeList = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "productLogTypeList": true,
                        "data": data
                    });
                    $("#admin-content").html(htmlStr);
                    $("#admin-content table tbody").eq(0).find("tr").each(function() {
                        if($(this).find("td[data-name='type']").data("value") !== "水果") {
                            $(this).addClass("hide");
                        }
                    });
                    _bindEvents("#admin-content");

                });

            };
            //news列表
            scope.renderNewsList = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "newsList": true,
                        "data": data
                    });
                    $("#admin-content").html(htmlStr);

                    //时间格式转化
                    $("td[data-name='time']").each(function () {
                        $(this).text(tools.mills2datetime(parseInt($(this).text())));
                    });

                    _bindEvents("#admin-content");

                });

            };
            //news新建 编辑
            scope.renderNewsEditOrAdd = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = "";
                    if (typeof data != "undefined") {
                        htmlStr = compiler({
                            "addNews": true,
                            "data": data
                        });
                    }
                    else {
                        htmlStr = compiler({
                            "addNews": true
                        });
                    }
                    $("#admin-content").html(htmlStr);
                    setTimeout(function() {
                        _controller.renderNewsTypeList_C(function(data) {
                            tools.loadTemplate(_tpl, function (compiler) {
                                var htmlStr1 = "";
                                htmlStr1 = compiler({
                                    "newsTypeList": true,
                                    "data": data
                                });

                                $("#type").html(htmlStr1);
                            });
                        });
                    },200);
                    _bindEvents("#admin-content");

                });

            };
            //产品列表
            scope.renderProductList = function (data) {
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "productsList": true,
                        "data": data
                    });
                    $("#admin-content").html(htmlStr);
                    _bindEvents("#admin-content");

                });

            };
            //资讯类别列表
            scope.renderNewsTypeList = function (data) {
                //TODO
                tools.loadTemplate(_tpl, function (compiler) {
                    var htmlStr = compiler({
                        "newsTypeList1": true,
                        "data": data
                    });
                    $("#admin-content").html(htmlStr);
                    _bindEvents("#admin-content");

                });

            };

            /**
             * 初始化：保存控制器对象
             * @param conctroller 控制器对象
             */
            scope.init = function (conctroller) {
                //绑定tabpanel
                _bindEvents("#accordion-561474");
                $("td[data-name='NO']").css({
                    "content": "counter(tr)"
                });
                _controller = conctroller;

                if (localStorage.getItem("userType") !== "admin") {
                    document.write("<h1 style='text-align: center; color: red'>管理员没有登录，禁止访问</h1>")
                }
            };
            return scope;
        }({}, jQuery)
    );

});