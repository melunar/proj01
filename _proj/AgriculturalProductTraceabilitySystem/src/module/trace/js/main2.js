/**
 * Created by haoyong on 2016/4/20.
 */
define(
    [
        "js/controller/trace-controller2",
        "jquery",
        "/src/module/common/js/commonRender.js"
    ],
    function (Controller, $,commonRender) {
        "use strict";
        $(document).ready(function () {
            console.log("load trace2 main.js");

            commonRender.init();
            Controller.init();
        });
    }
);