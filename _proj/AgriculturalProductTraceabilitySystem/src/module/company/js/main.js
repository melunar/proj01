/**
 * Created by haoyong on 2016/4/20.
 */
define(
    [
        "js/controller/company-controller",
        "jquery",
        "/src/module/common/js/commonRender.js"
    ],
    function (Controller, $, commonRender) {
        "use strict";
        $(document).ready(function () {
            console.log("load company main.js");

            //加载公共模块
            commonRender.init();
            Controller.init();
        });
    }
);