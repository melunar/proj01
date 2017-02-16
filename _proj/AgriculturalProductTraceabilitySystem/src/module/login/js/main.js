/**
 * Created by haoyong on 2016/4/17.
 */
define(
    [
        "js/login-views",
        "jquery",
    ],
    function (View, $) {
        "use strict";
        $(document).ready(function () {
            console.log("load index main.js");
            View.init();
        });
    }
);