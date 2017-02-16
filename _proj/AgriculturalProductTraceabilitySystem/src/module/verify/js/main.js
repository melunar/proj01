/**
 * Created by haoyong on 2016/4/26.
 */
define(
    [
        "js/controller/verify-controller",
        "jquery",
        "/src/module/common/js/commonRender.js"
    ],
    function (Controller, $, commonRender) {
        "use strict";
        $(document).ready(function () {
            console.log("load verify main.js");

            //加载公共模块
            commonRender.init();
            Controller.init();
        });
    }
);