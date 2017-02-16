/**
 * @Date：2016.4.26
 * @Author: haoyong
 * @Description: verify view层
 */
define([
    "jquery",
    "tools",
    //"plupload",

    "qrcode",
    "jquery-ui",
    "layer"
], function (jQuery, tools) {
    return (function (scope, $) {
        var _controller = null,//控制器对象
            _tabPanelsTpl = "/src/module/verify/inc/tabPanelsTpl.html",
            _data = null,//传给接口的数据

            _eventHandler = {
                //CompanyList
                "showCompanyList": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _controller.renderCompanyList_C();
                    //scope.renderCompanyList({});
                },
                //showCheckAll
                "showCheckAll": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _data = {};
                    _data.status = "未检验";
                    _controller.renderCheckAllList_C(_data);
                },

                //showCheckHistoryGood
                "showCheckHistoryGood": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _data = {};
                    _data.status = "合格";
                    _controller.renderCheckAllList_C(_data);
                },

                //showCheckHistoryBad
                "showCheckHistoryBad": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _data = {};
                    _data.status = "不合格";
                    _controller.renderCheckAllList_C(_data);
                },
                //显示第3板块-showReportAll
                "showReportAll": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _controller.renderReportAllList_C();
                },
                //显示第4板块showReportOne
                "showReportOne": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    scope.renderReportOneOptionsList();

                },
                //显示第5板块 审核公司
                "showCheckCompany": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _data = {};
                    _data.status = 0;
                    _controller.renderCheckCompanyList_C(_data);

                }, //显示第6板块 审核公司历史记录
                "showCheckCompanyHistory": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _data = {};
                    _data.status = 1;
                    _controller.renderCheckCompanyListHistory_C(_data);

                },
                //商家=====================================================================================
                //事实检索商家
                "filterCompany": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    //TODO 检索商家渲染

                },
                //查看商家审核细节
                "setSearchBoxContent": function (e) {
                    //e.stopPropagation();
                    e.preventDefault();
                    var self = this;
                    $(".search-company-top-penal .inputText").attr("data-id", $(self).data("id")).val($(self).data("name"));

                },
                //审查公司的
                "checkTheCompanyProduct": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _data = $(".search-company-top-penal .inputText").attr("data-id");
                    if (!_data) {
                        layer.msg("公司不存在,输入或选择正确名称", {icon: 2});
                        return false;
                    }

                    layer.msg("该公司id" + _data);
                    // TODO


                    _data = null;//注销
                },
                //查看公司
                "goToCompanyDetail": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _data = {};
                    //多个地方调用,id 存放位置不同
                    if($(".search-company-top-penal .inputText").attr("data-id")) {
                        _data.id = $(".search-company-top-penal .inputText").attr("data-id");
                    } else if($(this).data("id")) {
                        _data.id = $(this).data("id")
                    }
                    if (!_data.id ) {
                        layer.msg("公司不存在,输入或选择正确名称", {icon: 2});
                        return false;
                    }
                    layer.msg("该公司id" + _data.id);
                    // TODO
                    localStorage.setItem("companyId",_data.id);
                   location.href = "/src/module/trace/index.html?companyId=" + _data.id;

                },

                //审核弹出层
                "ShowCheckAllPanel": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var info = $(this).closest("tr").find("[data-name=companyName]").attr("title") + " " + $(this).closest("tr").find("[data-name=batchID]").attr("title");

                    //声明两个变量存储string类型 存储批次产品编码范围
                    startCodeTemp = $(this).closest("tr").find("[data-name=startCode]").attr("title");
                    endCodeTemp = $(this).closest("tr").find("[data-name=endCode]").attr("title");
                    countTemp = $(this).closest("tr").find("[data-name=count]").attr("title");

                    var batchId = $(this).data("id");

                    layer.open({
                        title: info + " 批次审核",
                        type: 2,
                        area: ['500px', '150px'],
                        fix: true, //固定
                        maxmin: true,
                        content: "inc/checkBatch.html",
                        success: function (layero, index) {
                            var $panel = $(window.frames[name ^= "layui-layer-iframe"].document).find("#checkBatch");
                            var _data = {};
                            // console.log($($panel).find("#rate").length);
                            $($panel).find("#rate").on("change", function () {
                                var value = parseInt($(this).val());
                                if (value && value <= 100 && value >= 0) {
                                    if (value < 60) {
                                        $panel.find("#rateGood").addClass("bg-gray");
                                        $panel.find("#rateBad").removeClass("bg-gray");
                                    } else {
                                        $panel.find("#rateGood").removeClass("bg-gray");
                                        $panel.find("#rateBad").addClass("bg-gray");
                                    }
                                } else {
                                    layer.msg("输入0-100之间的数字", {icon: 2});
                                    $panel.find("#rateGood").addClass("bg-gray");
                                    $panel.find("#rateBad").addClass("bg-gray");
                                }
                            });
                            $($panel).find("#rateBad").on("click", function () {
                                if ($(this).is(".bg-gray")) {
                                    return;
                                }
                                _data.rate = parseFloat($($panel).find("#rate").val());
                                layer.msg("好的，您输入的合格率为" + _data.rate, {icon: 1});

                                _data = {};
                                _data.id = batchId;
                                _data.userId = localStorage.getItem("userId");
                                _data.status = "不合格";
                                _data.rate = $($panel).find("#rate").val();
                                console.log(_data);
                                _controller.updateBatch_C(_data,function() {
                                    layer.close(index);
                                    setTimeout(function () {
                                        $("li[data-type='checkAll']").trigger("click");
                                    }, loginDelayTime);
                                });

                            });
                            $($panel).find("#rateGood").on("click", function () {
                                if ($(this).is(".bg-gray")) {
                                    return;
                                }
                                _data.rate = parseFloat($($panel).find("#rate").val());
                                layer.msg("好的，您输入的合格率为" + _data.rate, {icon: 1});
                                //TODO 调接口传后台

                            });
                        }
                    });


                },

                //公司内部报表==================================================================================================
                // 删选公司得到的报表 showReportOneList
                "showReportOneList": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _data = {};
                    _data.companyId = $("#inputSelectCompanyTemp option:selected").val();
                    console.log(_data);
                    _controller.renderReportOneList_C(_data);
                },

                //显示留言窗口
                "showLeaveWordBox": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    var info = $(this).closest("tr").find("[data-name=companyName]").attr("title");
                    layer.open({
                        title: "给\"" + info + "\"的留言：",
                        type: 2,
                        area: ['500px', '260px'],
                        fix: true, //固定
                        maxmin: true,
                        content: "inc/leaveWord.html",
                        success: function (layero, index) {
                            var $panel = $(window.frames[name ^= "layui-layer-iframe"].document).find("#leaveWord");
                            var _data = {};

                            $($panel).find("#submitLeaveWord").on("click", function () {
                                var value = $($panel).find("textArea").val();
                                if (value.trim() === "") {
                                    layer.msg("请输入留言内容", {icon: 2});
                                    return;
                                }
                                _data.content = value;
                                layer.msg("好:" + _data.content, {icon: 1});
                                //TODO 调接口传后台

                            });
                        }
                    });
                },

                //verifyCompany
                "verifyCompany": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var $root = $(this).closest("tr").next(".companyCheckInfo");
/*
                    alert($root);
                    alert($($root).find(".registrationNumberCheck").is(':checked'));
                    alert($($root).find(".linkSrcCheck").is(':checked'));*/
                    if($($root).find(".registrationNumberCheck").is(':checked') && $($root).find(".linkSrcCheck").is(':checked')) {
                        if ($(this).data("status") == 1) {
                            layer.alert("公司已经处于通过状态", {
                                title: "审核通过"
                            });
                            return false;
                        }
                        _data = {};
                        _data.id = $(this).data("id");
                        if(localStorage.getItem("userId")) {
                            _data.userId = localStorage.getItem("userId");
                        } else {
                            _data.userId = 0;
                        }
                        if(!localStorage.getItem("userType") || localStorage.getItem("userType") !== "verify") {
                            layer.msg("您不是监管员，禁止审核",{icon: 2});
                            return;
                        }
                        _data.code = "123121111";
                        console.log("verify", _data);
                        _controller.verifyCompany_C(_data,function () {
                            setTimeout(function () {
                                $("li[data-type='checkCompany']").trigger("click");
                            }, loginDelayTime);
                        });

                    } else {
                        layer.alert("必须先审核'认证材料'通过", {
                            title: "审核无法通过"
                        });
                    }

                },

                //unverifyCompany
                "unVerifyCompany": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if ($(this).data("status") == 0) {
                        layer.alert("公司已经处于待审核状态", {
                            title: "审核踢下"
                        });
                        return false;
                    }
                    _data = {};
                    _data.id = $(this).data("id");
                    if(localStorage.getItem("userId")) {
                        _data.userId = localStorage.getItem("userId");
                    } else {
                        _data.userId = 0;
                    }
                    _controller.unVerifyCompany_C(_data,function () {
                        setTimeout(function () {
                            $("li[data-type='checkCompany']").trigger("click");
                        }, loginDelayTime);
                    });
                },

                //显示有机审核
                "showCheckProduct": function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".tr-check-product").addClass("hide");
                    var $root = $(this).closest("tr").next(".tr-check-product");
                    $($root).removeClass("hide");
                    $($root).find(".check-info i[data-name='jigou']").html(localStorage.getItem("dep"));
                    $($root).find(".check-info i[data-name='code']").html(localStorage.getItem("code"));

                },
                //有机认证通过
                "checkProduct": function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    //TODO 有机认证通过
                    //alert("OK");
                    var $root = $(this).closest("tr");
                    _data = {};
                    _data.dep = $($root).find(".check-info i[data-name='jigou']").text().trim();
                    _data.depCode = $($root).find(".check-info i[data-name='code']").text().trim();
                    _data.id = $(this).data("id");

                    console.log(_data);
                    _controller.checkProduct_C(_data,function() {

                    });

                },

                //显示公司下载资料
                "showCompanyCheckInfo": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".companyCheckInfo").addClass("hide");
                    $(this).closest("tr").next(".companyCheckInfo").removeClass("hide");
                }
            },

            /**
             * 绑定事件
             * @param selector
             * @private
             */
            _bindEvents = function (selector) {
                var handler = _eventHandler;
                console.log("绑定" + selector + ":" + $(selector).find("[data-event]").length);
                $(selector).find("[data-event]").each(function () {
                    $(this).off("click").off($(this).data("event"), handler[$(this).data("handler")]).on($(this).data("event"), handler[$(this).data("handler")]);
                });
            };

        //CompanyList渲染
        scope.renderCompanyList = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "companyList": true,
                    "data": data
                });
                $(".company-list-penal").removeClass("hide").siblings().addClass("hide");
                $(".company-list-penal .company-lists").html(htmlStr);
                $("tr.load").remove();

                //使列表可选 jquery UI
                $(".company-lists").selectable();

                //文本框自动填充功能
                var companyList = data;
                console.log("companyList1",companyList[1]);
                for(var i = 0; i < companyList.length; i++) {
                    companyList[i].label = companyList[i].companyName;
                }
                console.log("companyList",companyList);

                $(".search-company-top-penal .inputText").autocomplete({
                    minLength: 0,
                    source: companyList,//默认检索的是label属性
                    focus: function (event, ui) {
                        $(".search-company-top-penal .inputText").val(ui.item.companyName);
                        return false;
                    },
                    select: function (event, ui) {
                        $(".search-company-top-penal .inputText").val(ui.item.companyName);
                        $(".search-company-top-penal .inputText").attr("data-id", ui.item.id);
                        return false;
                    }
                });

                _bindEvents(".company-list-penal");

            });

        };

        //check-all面板渲染
        scope.renderCheckAllList = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "checkAllList": true,
                    "data": data
                });
                $(".check-all-penal").removeClass("hide").siblings().addClass("hide");
                $(".check-all-penal .body-insert").html(htmlStr);
                $("tr.load").remove();


                _bindEvents(".check-all-penal");

            });

            $("td[data-name='inTime']").each(function () {
                $(this).text(tools.mills2datetime(parseInt($(this).text())));
            });
        };

        //report-all-panel面板渲染
        scope.renderReportAllList = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "reportAllList": true,
                    "data": data
                });
                $(".report-all-panel").removeClass("hide").siblings().addClass("hide");
                $(".report-all-panel .body-insert").html(htmlStr);
                $("tr.load").remove();


                _bindEvents(".report-all-panel");

            });

        };

        //report-one-panel面板列表渲染
        scope.renderReportOneList = function (data) {
            console.log(data);
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "reportOneList": true,
                    "data": data
                });
                $(".report-one-panel .body-insert").html(htmlStr);
                $("tr.load").remove();


                _bindEvents(".report-one-panel");

            });

        };


        //report-one-panel面板中公司下拉菜单渲染
        scope.renderReportOneOptionsList = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "localCompanyList": true,
                    "data": JSON.parse(localStorage.companyList)
                });
                $(".report-one-panel").removeClass("hide").siblings().addClass("hide");
                $(".report-one-panel .inputSelect").html(htmlStr);
                _bindEvents(".report-one-panel");

            });
        };

        //CheckCompanyList审查公司列表切换
        scope.renderCheckCompanyList = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "checkCompanyList": true,
                    "data": data
                });
                $(".check-company-panel").removeClass("hide").siblings().addClass("hide");
                $(".check-company-panel .body-insert").html(htmlStr);
                $("tr.load").remove();

                //时间格式转换
                $("td[data-name$='Time']").each(function () {
                    $(this).text(tools.mills2datetime(parseInt($(this).text())));
                });

                _bindEvents(".check-company-panel");

            });

        };

        //CheckCompanyList审查公司列表历史
        scope.renderCheckCompanyListHistory = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "checkCompanyListHistory": true,
                    "data": data
                });
                $(".check-company-panel-history").removeClass("hide").siblings().addClass("hide");
                $(".check-company-panel-history .body-insert").html(htmlStr);
                $("tr.load").remove();

                //时间格式转换
                $("td[data-name$='Time']").each(function () {
                    $(this).text(tools.mills2datetime(parseInt($(this).text())));
                });

                _bindEvents(".check-company-panel-history");

            });

        };


        /**
         * 初始化：保存控制器对象
         * @param conctroller 控制器对象
         */
        scope.init = function (conctroller) {
            //绑定tabpanel
            _bindEvents(".pab-panel");

            _controller = conctroller;

        };

        return scope;
    }({}, jQuery));

});