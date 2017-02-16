/**
 * Created by haoyong on 2016/5/12.
 */
define(
    [
        "js/controller/news-controller",
        "jquery",
        "/src/module/common/js/commonRender.js"
    ],
    function (Controller, $, commonRender) {
        "use strict";
        $(document).ready(function () {
            console.log("load news main.js");

            commonRender.init();
            Controller.init();
        });
    }
);