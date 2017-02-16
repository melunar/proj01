/**
 * Created by haoyong on 2016/5/11.
 */
define(
    [
        "js/controller/admin-controller",
        "jquery"
    ],
    function (Controller, $) {
        "use strict";
        $(document).ready(function () {
            console.log("load admin main.js");
            Controller.init();
        });
    }
);