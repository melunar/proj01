/**
 * @Date：1999.3.24
 * @Author:haoyong
 * @Description:[[]]
 */
define([
    "jquery",
    "js/login-model",
    "layer",
    "md5",

    "global",
    "xheditor"
    //"/src/libs/xhEditor/js/xheditor-1.2.2.min.js"
], function (jQuery, Model, layer, md5) {
    //console.log("----",xhEditor);
    /**
     * 返回一个带有自定义域scope的视图
     */
    return (function (scope, $) {
        var _data = {},
            _pwdDnoe = 0,
            /**
             * 事件处理handler
             * @private
             */
            _eventHandler = {
                "login": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var returnFlag = 0;
                    _data = {};
                    var $loginInput = $(".login-panel input");
                    $(".login-panel").find("[data-name]").each(function (index, item) {
                        if (_isEmpty(this)) {
                            _loginEmptyWarn(this);
                            returnFlag = 1;
                            return false;
                        }
                        _data[$(this).data("name")] = $(this).val();
                    });
                    if (returnFlag) {
                        return false;
                    }

                    _data.name = $($loginInput).eq(0).val();
                    _data.password = md5($($loginInput).eq(1).val());


                    /**
                     * 默认user登录 如果失败 在尝试Company登录
                     */
                    Model.login(_data, function (res) {
                        if (res.code === 200) {
                            /**
                             * 设置本地存储 有关用户信息
                             */
                            localStorage.setItem("userName", res.data.name);
                            localStorage.setItem("userType", res.data.type);
                            localStorage.setItem("userId", res.data.id);


                            if(localStorage.getItem("userType") === "company") {
                                localStorage.setItem("companyName", res.data.companyName);
                                localStorage.setItem("companyId", res.data.id);
                                localStorage.setItem("companyStatus", res.data.status);
                            }
                            if(localStorage.getItem("userType") === "verify") {
                                localStorage.setItem("dep", res.data.dep);
                                localStorage.setItem("code", res.data.code);
                                localStorage.setItem("abbr", res.data.abbr);
                            }
                            layer.msg(res.message, {icon: 1});
                            setTimeout(function () {
                                var url = "",
                                    host1 = location.host;
                                if (res.data.type === "admin") {
                                    url = "http://" + host1 + "/src/module/admin/index.html";
                                    location.href = url;
                                }
                                if (res.data.type === "verify") {
                                    url = "http://" + host1 + "/src/module/verify/index.html";
                                    location.href = url;
                                }
                                if (res.data.type === "company") {
                                    url = "http://" + host1 + "/src/module/company/index.html";
                                    location.href = url;
                                }

                            }, loginDelayTime);
                        } else if (res.code === 500) {
                            /**
                             * 默认user登录 如果失败 在尝试Company登录
                             */
                            //TODO
                         /*   Model.companyLogin(_data, function (res) {
                                if (res.code === 200) {
                                }
                            });*/

                            layer.msg(res.message, {icon: 2});

                        }
                    }, function () {
                        layer.msg("服务器异常，登录失败", {icon: 2});
                    });

                    /*      if(_data.name === "admin" && _data.password === "admin1") {
                     location.href = "http://localhost:8089/src/module/admin/index.html";
                     } else {
                     location.href = "http://localhost:8089/src/module/company/index.html";
                     }*/
                    //console.log(_data);
                    //TODO 调用控制器的业务


                    //TODO 还没有引入cookie插件成功
                    /*
                     alert("用户名：" + $.cookie("userName") + " 密码：" + $.cookie("passWord"));
                     if ($.cookie("rmbUser") == "true") {
                     $("#name").attr("checked", true);
                     $("#user").val($.cookie("userName"));
                     $("#pass").val($.cookie("passWord"));
                     }*/


                },
                "register": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    //input后面的让提示消失
                    //$("input").next().hide(0);

                    var returnFlag = 0;
                    _data = {};
                    $(".register-panel").find("[data-name]").each(function () {
                        if ($(this).closest("li").find(".red").length > 0 && _isEmpty(this)) {
                            layer.tips("不能为空", this);
                            layer.msg("请填写必填项", {icon: 2});
                            //_loginEmptyWarn(this);
                            returnFlag = 1;
                            return false;
                        }

                        _data[$(this).data("name")] = $(this).val();
                    });
                    if (!_pwdDnoe) {
                        //密码不统一
                        layer.msg("两次密码不统一", {icon: 2});
                        return false;
                    }
                    if (returnFlag) {
                        return false;
                    }
                    var edit = $("#info").xheditor();
                    var info = edit.getSource();
                    _data.info = info;
                    var pwd = _data.password;
                    _data.password = md5(pwd);
                    console.log(_data);
                    Model.companyRegister(_data, function (res) {
                        if (res.code === 200) {
                            layer.msg(res.message, {icon: 1});
                            setTimeout(function() {
                                var url = "/src/module/login/login.html";
                                location.href = url;
                            },loginDelayTime);
                        } else if (res.code === 500) {
                            layer.msg(res.message, {icon: 2});
                        }
                    }, function () {
                        layer.msg("服务器异常，注册失败", {icon: 2});
                    });
                },

                //密码的处理
                "comfirmPwd": function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var $p1 = $("[data-name='password1']");
                    var $p = $("[data-name='password']");
                    if ($p1.val() === "" || $p.val() === "") {
                        return false;
                    }
                    if ($p1.val() !== $p.val()) {
                        //_loginEmptyWarn(this);
                        //$p1.next().show();
                        layer.tips("两次密码不一样", $p1);
                        _pwdDnoe = 0;
                    } else {
                        $p1.next().hide();
                        _pwdDnoe = 1;
                    }
                },
                //文件上传
                "fileUpload": function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    layer.open({
                        title: "上传审核材料",
                        type: 2,
                        area: ['820px', '520px'],
                        fix: true, //固定
                        maxmin: true,
                        content: "inc/upload.html",
                        success: function (layero, index) {
                            /*var $panel = $(window.frames[name ^= "layui-layer-iframe"].document).find("#addVerify");

                            $($panel).find("#addAdminSubmit").on("click", function () {
                                _data = {};
                                var name = $($panel).find("[name=name]").val();
                                var p = $($panel).find("[name=password]").val();
                                var p1 = $($panel).find("[name=password1]").val();
                                var dep = $($panel).find("[name=dep]").val();

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
                                _data.type = "verify";
                                _data.dep = dep;
                                _controller.addAdmin_C(_data, function () {
                                    layer.close(index);
                                    setTimeout(function () {
                                        $("#verifyList").trigger("click");
                                    }, loginDelayTime);
                                });

                            });*/
                        }
                    });

                }


            },
        //判断是否为空值
            _isEmpty = function (selector) {
                return $(selector).val().trim() === "";
            },
        //错误提示
            _loginEmptyWarn = function (selecter) {
                layer.tips("不能为空", selecter);
                /*$(selecter).css({"border-color": "#e00"});
                 $(selecter).focus();
                 $(selecter).off("blur").on("blur", function () {
                 //为了避免重复绑定blur事件 先off
                 $(selecter).css({"border-color": "#999"});
                 });*/
            };
        //保存用户信息cookie
        _saveUserInfo = function (name, password) {
            if ($("#rememberme").attr("checked") === "checked") {
                var userName = name;
                var passWord = password;
                $.cookie("rememberme", "true", {
                    expires: 7
                });
                $.cookie("name", userName, {
                    expires: 7
                });
                $.cookie("password", passWord, {
                    expires: 7
                });
            } else {
                $.cookie("rememberme", "false", {
                    expires: -1
                });
                $.cookie("name", '', {
                    expires: -1
                });
                $.cookie("password", '', {
                    expires: -1
                });
            }
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


        /**
         * 渲染业务数据
         */
        scope.bindEvents = function () {
            if ($("body").data("module") === "login") {
                _bindEvents(".login-panel");
            } else {
                _bindEvents(".register-panel");
            }
        };


        /**
         * 初始化：保存控制器对象
         * @param conctroller 控制器对象
         */
        scope.init = function () {
            scope.bindEvents();
        };

        return scope;
    }({}, jQuery));

});