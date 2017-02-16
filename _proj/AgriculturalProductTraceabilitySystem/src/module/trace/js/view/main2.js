/**
 * Created by haoyong on 2016/4/20.
 */
define(
    [
        "js/controller/trace-controller2",
        "jquery"
    ],
    function (Controller, $) {
        "use strict";
        $(document).ready(function () {
            console.log("load trace1 main.js");

            Controller.init();
        });
    }
);