/**
 * Created by haoyong on 2016/4/14.
 */
define(
    [
        "js/controller/home-controller",
        "jquery",
        "/src/module/common/js/commonRender.js"
    ],
    function (Controller, $, commonRender) {
        "use strict";
        $(document).ready(function () {
            console.log("load home main.js");

            //加载公共模块
            commonRender.init();
            Controller.init();
        });
    }
);