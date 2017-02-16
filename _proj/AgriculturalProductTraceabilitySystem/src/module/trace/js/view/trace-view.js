/**
 * @Date：2016.4.14
 * @Author: haoyong
 * @Description: company view层
 */
define([
    "jquery",
    "tools",
    "layer",
    "../model/trace-model",

    "qrcode",
    "jquery-ui",
    "global"
], function (jQuery, tools, layer, Model) {
    return (function (scope, $) {
        var _controller = null,//控制器对象
            _tabPanelsTpl = "/src/module/company/inc/tabPanelsTpl.html",
            _data = {},
            _stepsCount = 3,//环节树数计数 默认3个
            _eventHandler = {
                //显示第一板块base
                "showBase": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    $(this).addClass("active").siblings().removeClass("active");
                    _data = {};
                    //默认访问一个不存在的垃圾数据公司
                    var companyId = 0;
                    if (localStorage.getItem("companyId")) {
                        companyId = localStorage.getItem("companyId");
                    }
                    _data.id = companyId;
                    Model.getCompanyById(_data, function (res) {
                        if (res.code === 200) {
                            scope.renderPanelBase(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，访问失败", {icon: 2});
                    });

                },
                //显示第2板块-产品
                "showProduct": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    var companyId = localStorage.getItem("companyId");
                    _data = {};
                    _data.companyId = companyId;

                    Model.getProductListByCompanyId(_data, function (res) {
                        if (res.code === 200) {
                            //TODO 本地存储公司产品
                            localStorage.setItem("productList", JSON.stringify(res.data));
                            scope.renderPanelProduct(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，获取产品失败", {icon: 2});
                    });

                },
                //显示第3板块-detail
                "showDetail": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    var companyId = localStorage.getItem("companyId");
                    _data = {};
                    _data.companyId = companyId;

                    Model.getProductListByCompanyId(_data, function (res) {
                        if (res.code === 200) {
                            scope.renderPanelDetail(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，获取产品失败", {icon: 2});
                    });
                },
                //显示第4板块libs
                "showLibs": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).addClass("active").siblings().removeClass("active");
                    _data = {};
                    _data.productId = JSON.parse(localStorage.productList)[0].id;
                    //alert(JSON.parse(localStorage.productList)[0].id);
                    scope.renderPanelLibs();
                    Model.getBatchListByProductId(_data, function (res) {
                        if (res.code === 200) {
                            scope.renderPanelLibsList(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，获取产品失败", {icon: 2});
                    });

                },

                //进入编辑状态
                "turnToEdit": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".show-edit-content").find(".item-content").removeClass("disabled-edit").removeAttr("disabled");
                    //按钮切换显示
                    _btn3Toggle();

                },
                //提交编辑
                "submitEdit": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _data = {};//清空
                    $(".show-edit-content").find("[data-name]").each(function () {
                        _data[$(this).data("name")] = $(this).val();
                    });
                    _data.id = localStorage.getItem("userId");
                    console.log(_data);
                    Model.updateCompany(_data, function (res) {
                        if (res.code === 200) {
                            layer.msg(res.message, {icon: 1});
                            setTimeout(function () {
                                $(".pab-panel li").eq(0).trigger("click");
                            }, loginDelayTime);
                        } else if (res.code === 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，保存失败", {icon: 2});
                    });
                },
                //取消编辑
                "cancleEdit": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".show-edit-content").find(".item-content").addClass("disabled-edit").attr("disabled", "disabled");
                    //按钮切换
                    _btn3ToggleBack();
                },

                // 产品部分---------------------------------------------------------------

                //查看产品详情
                "seeDetailProduct": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    console.log($(".tr-product-info").length);
                    $(".tr-product-info").addClass("hide");
                    $(this).closest("tr").next("tr").removeClass("hide");
                },
                //删除产品
                "delProduct": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (!localStorage.getItem("userId") || localStorage.getItem("userType") !== "company" || localStorage.getItem("userId") !== localStorage.getItem("companyId")) {
                        layer.msg("您不是改公司主人，禁止操作", {icon: 2});
                        return;
                    }
                    var name = $(this).closest("tr").find("td[data-name=name]").data("value");
                    var id = $(this).data("id");

                    layer.msg("确定产品" + name + ",将无法恢复！！！", {
                        time: 0,//不自动关闭
                        btn: ["确定", "取消"],
                        yes: function (index) {
                            layer.close(index);
                            _data = {};
                            _data.id = id;
                            Model.deleteProduct(_data, function (res) {
                                if (res.code === 200) {
                                    layer.msg(res.message, {icon: 1});
                                    setTimeout(function () {
                                        $(".tab-item[data-type='product']").click();
                                    }, loginDelayTime);
                                } else if (res.code === 500) {
                                    layer.msg(res.message, {icon: 2});
                                }
                            }, function () {
                                layer.msg("服务器出错，删除失败", {icon: 2});
                            });
                        }
                    });

                },
                //添加一个环节文本域
                "addStep": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (_stepsCount <= 10) {
                        //最多11个
                        ($(".add-product-step").eq(0).clone().find("label").text((++_stepsCount) + "环节名称:")).end().find(".inputText").val("").end().find(".filename").val("请选择图片...").end().insertBefore(".add-product-step-button");
                        $("#delStep").removeClass("hide");
                        if (_stepsCount >= 11) {
                            layer.msg("不能再添了（3-11个环节）", {
                                icon: 4,
                                time: 3000 //3秒关闭（默认是3秒）
                            });
                            $(this).addClass("hide");
                            return false;
                        }
                    }
                },
                //删除一个环节文本域
                "delStep": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var eleLength = $(".add-product-step").length;
                    if (_stepsCount >= 4) {
                        //至少3个
                        $(".add-product-step").eq(eleLength - 2).remove();
                        _stepsCount--;
                        $("#addStep").removeClass("hide");
                        if (_stepsCount <= 3) {
                            layer.msg("不能再删了（3-11个环节）", {
                                icon: 4,
                                time: 3000 //3秒关闭（默认是3秒）
                            });
                            $(this).addClass("hide");
                            return false;
                        }
                    }
                },
                //点击添加一个产品
                "turnToAddProduct": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".add-product-box").eq(0).removeClass("hide");
                    //按钮切换显示
                    _btn3Toggle();
                },
                //取消添加一个产品
                "cancleAddProduct": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".add-product-box").eq(0).addClass("hide");
                    //按钮切换
                    _btn3ToggleBack();
                },
                //提交添加一个产品
                "submitAddProduct": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    /**
                     * 先提交产品 不管steps
                     */
                    _data = {};
                    var returnFlag = 0;
                    $(".add-product-base").find("[data-name]").each(function (index, item) {
                        if ($(this).closest(".product-item-box").find(".red").length > 0 && $(this).val().trim() === "") {
                            layer.tips("不能为空", this);
                            //layer.msg("请填写必填项", {icon: 2});
                            returnFlag = 1;
                            return false;
                        }
                        _data[$(this).data("name")] = $(this).val();
                    });
                    if (returnFlag) {
                        return;
                    }
                    if (!localStorage.getItem("userId") || localStorage.getItem("userType") !== "company" || localStorage.getItem("userId") !== localStorage.getItem("companyId")) {
                        layer.msg("您不是改公司主人，禁止操作", {icon: 2});
                        return;
                    }
                    _data.companyId = localStorage.getItem("companyId");
                    _data.code = "1212131233";
                    console.log(_data);

                    Model.addProduct(_data, function (res) {
                        if (res.code === 200) {
                            layer.msg(res.message, {icon: 1});
                            setTimeout(function () {
                                $(".tab-item[data-type='product']").click();
                            }, loginDelayTime);
                        } else if (res.code === 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，添加失败", {icon: 2});
                    });
                },


                //产品库--------------------------------------------------------------------------------

                //点击发布一个产品批次
                "turnToAddBatch": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".batchPanel").eq(0).removeClass("hide");
                    //按钮切换显示
                    _btn3Toggle();
                },
                //取消添加一个产品批次
                "cancleAddBatch": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".batchPanel").eq(0).addClass("hide");
                    //按钮切换
                    _btn3ToggleBack();
                },
                //提交添加一个产品批次
                "submitAddBatch": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    _data = {};
                    _data.count = $("input[data-name='count']").val();
                    _data.productId = $("#localProductList").val();
                    console.log(_data);
                    if (!_data.count) {
                        layer.tips("不能为空", "input[data-name='count']");
                        return;
                    }
                    Model.addBatch(_data, function (res) {
                        if (res.code === 200) {
                            layer.msg(res.message, {icon: 1});
                            setTimeout(function () {
                                $(".pab-panel li[data-type='libs']").trigger("click");
                            }, loginDelayTime)
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，添加失败", {icon: 2});
                    });
                },
                //删除一个产品批次
                "delOneProductBatch": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (confirm("确定删除该产品？无法恢复！！")) {
                        alert("del");
                        //TODO del a product
                    } else {
                        alert("取消删除成功");
                    }

                },
                //展示产品批次信息
                "ShowOneProductBatch": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(".batch-detail").addClass("hide");

                    //隐藏还要清空二维码 每次查看都会渲染的 不要重复叠加
                    $(this).closest("tr").next("tr").removeClass("hide").find(".QRcode-big-box").text("");

                    var text = $(this).closest("tr").find("[data-name='code']").data("value");
                    //绘制二维码
                    $(".QRcode-big-box:visible").qrcode({
                        text: tools.utf16to8(text),
                        width: 200,     //设置宽度
                        height: 200
                    });
                },
                "downloadQRCode": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    // 图片导出为 png 格式
                    var type = 'png';
                    var imgData = $(".QRcode-big-box").find("canvas")[0].toDataURL(type);

                    /**
                     * 获取mimeType
                     * @param  {String} type the old mime-type
                     * @return the new mime-type
                     */
                    var _fixType = function (type) {
                        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
                        var r = type.match(/png|jpeg|bmp|gif/)[0];
                        return 'image/' + r;
                    };

                    // 加工image data，替换mime type
                    imgData = imgData.replace(_fixType(type), 'image/octet-stream');

                    /**
                     * 在本地进行文件保存
                     * @param  {String} data     要保存到本地的图片数据
                     * @param  {String} filename 文件名
                     */

                    var batchNO = $(this).closest("tr").prev().find("[data-name='inBatchNO']").text().trim(),//批次号
                        filename = '批次二维码_' + batchNO + "_" + (new Date()).getTime() + '.' + type;
// download
                    _saveCanvasFile(imgData, filename);


                },
                "searchProduct": function (e) {
                    e.stopPropagation();
                    //这里不要阻止按钮选择
                    //e.preventDefault();
                    // alert("load");
                    $(".libs-radio-group input[type='radio']").attr("checked", false);
                    _data = {};
                    _data.productId = $("#localProductList").val();
                    Model.getBatchListByProductId(_data, function (res) {
                        if (res.code === 200) {
                            scope.renderPanelLibsList(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，获取产品失败", {icon: 2});
                    });
                },
                "searchProductWithStatus": function (e) {
                    e.stopPropagation();
                    //这里不要阻止按钮选择
                    //e.preventDefault();
                    // alert("load");

                    _data = {};
                    _data.productId = $("#localProductList").val();
                    if ($(this).data("value")) {
                        _data.status = $(this).data("value");
                    }
                    console.log(_data);
                    Model.getBatchListByProductIdAndStatus(_data, function (res) {
                        if (res.code === 200) {
                            scope.renderPanelLibsList(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，获取产品失败", {icon: 2});
                    });
                },
                //显示二维码大图
                "showBigQRCode": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                },
                //文件上传
                "fileUpload": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    layer.open({
                        title: "上传资料",
                        type: 2,
                        area: ['820px', '420px'],
                        fix: true, //固定
                        maxmin: true,
                        content: "inc/uploadLink.html",
                        success: function (layero, index) {
                        }
                    });

                },

                //head上传
                "fileUploadHead": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    layer.open({
                        title: "上传头像",
                        type: 2,
                        area: ['820px', '420px'],
                        fix: true, //固定
                        maxmin: true,
                        content: "inc/uploadHead.html",
                        success: function (layero, index) {
                        }
                    });

                },

                //LogPic上传
                "fileUploadLogPic": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    layer.open({
                        title: "上传产品相关图片",
                        type: 2,
                        area: ['820px', '420px'],
                        fix: true, //固定
                        maxmin: true,
                        content: "inc/uploadLogPic.html",
                        success: function (layero, index) {
                        }
                    });

                },

                //===================================================================日志=====================日志=======
                "showLogs": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    var $flag = $('input:radio[name="selectBatch"]:checked');
                    if ($($flag).length < 1) {
                        layer.msg("请先选一个批次再操作", {icon: 2});
                        return;
                    }
                    var $root = $($flag).closest("tr");
                    _data = {};
                    _data.batchId = $($root).data("id");
                    Model.getProductLogListByBatch(_data, function (res) {
                        if (res.code === 200) {
                            scope.renderPanelLogsList(res.data);
                            layer.msg(res.message, {icon: 1});
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {

                    });

                },
                "logsViewClose": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $("#showLog").empty();
                },

                "showAddLog": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var $flag = $('input:radio[name="selectBatch"]:checked');
                    if ($($flag).length < 1) {
                        layer.msg("请先选一个批次再操作", {icon: 2});
                        return;
                    }
                    var $root = $($flag).closest("tr");
                    if($($root.find("td[data-name='status']")).data("value") === "上市") {
                        layer.msg("这批产品已经上市，禁止添加日志", {icon: 1});
                    }
                    /*var $root = $($flag).closest("tr");
                    _data = {};
                    _data.id = $($root).data("id");
                    _data.productId = $($root).data("productId");
                    _data.productName = $("#localProductList option:selected").text();
                    console.log(_data);*/

                    scope.renderPanelLogsAdd();


                },
                //提交添加的日志
                "submitAddLog": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var r = $("#showLog");
                    if($(r).find("[data-name=time]").val().trim() === "") {
                        layer.tips("选择时间",this);
                        return;
                    }
                    var $flag = $('input:radio[name="selectBatch"]:checked');
                    var $root = $($flag).closest("tr");
                    _data = {};
                    _data.batchId = $($root).data("id");
                    _data.productName = $("#localProductList option:selected").text();

                    _data.productId = $(r).find("#logTypeSelect").val();
                    _data.name = $(r).find("#logTypeSelect option:selected").text();
                    _data.info = $(r).find("[data-name=info]").val();
                    _data.time = $(r).find("[data-name=time]").val();
                    _data.position = $(r).find("[data-name=position]").val();
                    _data.logSrc = localStorage.getItem("tempLogSrc");

                    console.log(_data);
                    Model.addProductLog(_data,function(res) {
                        if (res.code === 200) {
                            layer.msg(res.message, {icon: 1});
                            setTimeout(function () {
                                //$(".pab-panel li[data-type='libs']").trigger("click");
                                localStorage.removeItem("tempLogSrc");
                            }, loginDelayTime)
                        } else if (res.code == 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器出错，添加失败", {icon: 2});
                    });
                },
                //取消添加日志
                "cancelAddLog": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $("#showLog").empty();
                    localStorage.removeItem("tempLogSrc");
                }

            },
            _saveCanvasFile = function (data, filename) {
                var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                save_link.href = data;
                save_link.download = filename;

                var event = document.createEvent('MouseEvents');
                event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                save_link.dispatchEvent(event);
            },
            _btn3Toggle = function () {
                var btns = $(".btn-group .button");
                btns.eq(1).removeClass("hide");
                btns.eq(2).removeClass("hide");
                btns.eq(0).addClass("hide");
            },
            _btn3ToggleBack = function () {
                var btns = $(".btn-group .button");
                btns.eq(1).addClass("hide");
                btns.eq(2).addClass("hide");
                btns.eq(0).removeClass("hide");
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


                //点击任意地方取消产品详情查看
                if (!($tempSelector = $(".tr-product-info")).hasClass("hide")) {
                    $(document).on("click", function () {
                        $tempSelector.addClass("hide");
                    });
                }
            };

        //公司基本信息
        scope.renderPanelBase = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "base": true,
                    "data": data
                });

                $("#panel-content").html(htmlStr);
                if (typeof data.info !== "undefined") {
                    $("#htmlInfo").html(data.info);
                }

                if ($("input[data-name='status']").data("value") == "0") {
                    $("input[data-name='status']").val("还没有审核通过 尽快上传资料");
                } else {
                    $("input[data-name='status']").val("已经审核通过");
                }

                //时间格式
                var timeTamp = $("#outTime").val();
                $("#outTime").val(tools.mills2str(parseInt(timeTamp)));


                var type = localStorage.getItem("userType");
                if (type !== "company") {
                    $("button[data-handler='turnToEdit']").addClass("hide");
                    $("button[data-handler='fileUploadHead']").addClass("hide");
                    $("button[data-handler='fileUpload']").addClass("hide");
                }
                // console.log(htmlStr);
                _bindEvents("#base");
            });


        };
        //产品板块渲染和事件
        scope.renderPanelProduct = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "product": true,
                    "data": data
                });

                $("#panel-content").html(htmlStr);
                //图片上传部分的控件
                $(".add-product-step input[type=file]").change(function () {
                    var filePath = $(this).val();
                    //TODO 把文件路径传给后台进行上传处理
                    $(this).parents(".add-product-step .uploader").find(".filename").val($(this).val());
                });
                $(".add-product-step input[type=file]").each(function () {
                    if ($(this).val() == "") {
                        $(this).parents(".add-product-step .uploader").find(".filename").val("请上传图片...");
                    }
                });
                _bindEvents("#product");
            });

            $("#product table td[data-name='inTime']").each(function () {
                $(this).text(tools.mills2datetime(parseInt($(this).text())));
            });

        };
        //detail板块渲染和事件
        scope.renderPanelDetail = function (data) {
            var data1 = [
                {

                    "name": "饺子韭菜猪肉",
                    "info": "饺子饺子饺子饺子，饺子饺子饺子饺子，饺子饺子饺子。饺子饺子饺子饺子饺子饺子饺子饺子，饺子饺子饺子饺子饺子，饺子饺子饺子。",
                    "steps": [
                        {
                            "name": "环节步骤1",
                            "imgUrl": "images/steps/step001.jpg"
                        }, {
                            "name": "环节步骤2",
                            "imgUrl": "images/steps/step002.jpg"
                        }, {
                            "name": "环节步骤3",
                            "imgUrl": "images/steps/step003.jpg"
                        }, {
                            "name": "环节步骤4",
                            "imgUrl": "images/steps/step004.jpg"
                        }
                    ]
                }, {

                    "name": "饺子2",
                    "info": "饺子饺子饺子饺子，饺子饺子饺子饺子，饺子饺子饺子。饺子饺子饺子饺子饺子饺子饺子饺子，饺子饺子饺子饺子饺子，饺子饺子饺子。",
                    "steps": [
                        {
                            "name": "环节步骤一",
                            "imgUrl": "images/steps/step001.jpg"
                        }, {
                            "name": "环节步骤4",
                            "imgUrl": "images/steps/step004.jpg"
                        }
                    ]
                }, {

                    "name": "饺子3",
                    "info": "饺子饺子饺子饺子，饺子饺子饺子饺子，饺子饺子饺子。饺子饺子饺子饺子饺子饺子饺子饺子，饺子饺子饺子饺子饺子，饺子饺子饺子。",
                    "steps": [
                        {
                            "name": "环节步骤一",
                            "imgUrl": "images/steps/step001.jpg"
                        }, {
                            "name": "环节步骤4",
                            "imgUrl": "images/steps/step004.jpg"
                        }, {
                            "name": "环节步骤4",
                            "imgUrl": "images/steps/step004.jpg"
                        }, {
                            "name": "环节步骤4",
                            "imgUrl": "images/steps/step004.jpg"
                        }, {
                            "name": "环节步骤4",
                            "imgUrl": "images/steps/step004.jpg"
                        }, {
                            "name": "环节步骤4",
                            "imgUrl": "images/steps/step004.jpg"
                        }
                    ]
                }
            ];
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "detail": true,
                    "tempDate": data1,
                    "data": data
                });

                $("#panel-content").html(htmlStr);

                //手风琴部分的控件 jquery ui
                $("#accordion").accordion();

                //生成公司二维码
                $("#QR-code").qrcode({
                    text: tools.utf16to8("abc"),
                    width: 200,     //设置宽度
                    height: 200,     //设置高度
                    typeNumber: -1,      //计算模式
                    background: "#fff",//背景颜色
                    foreground: "#000" //前景颜色
                });

                _bindEvents("#detail");
            });

        };


        //产品下啦菜单
        scope.renderPanelDetailOptionsList = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "localProductList": true,
                    "data": JSON.parse(localStorage.productList)
                });
                $("#localProductList").append(htmlStr);


                _bindEvents(".report-one-panel");

            });
        };

        //libs板块渲染和事件1
        scope.renderPanelLibs = function () {

            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "libs": true,
                    "data": JSON.parse(localStorage.productList)
                });
                $("#panel-content").html(htmlStr);

                //渲染表格
                //scope.renderPanelLibsList(data);
                _bindEvents("#libs");
            });

        };
        //libs板块渲染和事件2
        scope.renderPanelLibsList = function (data) {
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "libsList": true,
                    "data": data
                });

                $(".body-insert").eq(0).html(htmlStr);

                $("[data-name='QRCode']").each(function () {
                    $(this).find("#QRCode").qrcode({
                        text: tools.utf16to8($(this).siblings().filter("[data-name='code']").text()),
                        width: 25,     //宽度
                        height: 25     //高度
                    });
                });

                _bindEvents("#libs");
            });
            $("#libs table td[data-name$='Time']").each(function () {
                $(this).text(tools.mills2datetime(parseInt($(this).text())));
            });

        };

        //日志内容
        scope.renderPanelLogsList = function (data) {
            //首先清空
            $("#showLog").empty();
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "logList": true,
                    "data": data
                });

                $("#showLog").html(htmlStr);

                _bindEvents("#showLog");
            });
            $(".timeTamp").each(function () {
                $(this).html(tools.mills2datetime(parseInt($(this).text())));
            });


        };

        //添加日志面板
        scope.renderPanelLogsAdd = function () {
            //清空
            $("#showLog").empty();
            tools.loadTemplate(_tabPanelsTpl, function (compiler) {
                var htmlStr = compiler({
                    "addLogPanel": true
                });

                $("#showLog").html(htmlStr);

                //渲染日志类型列表
                var htmlStrOptions = [];
                var datas = JSON.parse(localStorage.getItem("logTypes"));
                console.log(datas);
                for (var i = 0, le = datas.length; i < le; i++) {
                    htmlStrOptions.push('<option value="' + datas[i].id + '">' + datas[i].name + "</option>");
                }
               $("#logTypeSelect").html(htmlStrOptions.join(""));

                _bindEvents("#showLog");
            });
            $(".timeTamp").each(function () {
                $(this).html(tools.mills2datetime(parseInt($(this).text())));
            });


        };


        /**
         * 初始化：保存控制器对象
         * @param conctroller 控制器对象
         */
        scope.init = function (conctroller) {

            var userType = localStorage.getItem("userType");

            /**
             * 根据CompanyId渲染
             * 根据usertype 权限控制
             */
            if (userType === "company") {
                layer.msg("欢迎公司:" + localStorage.getItem("companyName"));
            } else if (userType === "verify") {
                layer.msg("欢迎监管者:" + localStorage.getItem("userName") + " 来访");
            } else if (userType === "admin") {
                layer.msg("欢迎管理员:" + localStorage.getItem("userName") + " 来访");
            } else {
                layer.msg("欢迎游客来访");
            }

            //alert($(".pab-panel li").eq(0).length);
            setTimeout(function () {
                $(".pab-panel li").eq(0).trigger("click");
            }, 200);

            Model.getProductLogTypeList({}, function (res) {
                if (res.code === 200) {
                    localStorage.setItem("logTypes",JSON.stringify(res.data));
                }
            }, function () {
                layer.msg("加载日志列表失败", {icon: 2});
            });

            //绑定tabpanel
            _bindEvents(".pab-panel");

            _controller = conctroller;
        };

        return scope;
    }({}, jQuery));

});