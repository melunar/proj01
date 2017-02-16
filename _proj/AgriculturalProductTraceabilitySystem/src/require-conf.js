requirejs.config({
    urlArgs: "_v=" + (new Date()).getTime(),
    baseUrl: ".",
    paths : {
        "html5" : "/src/libs/html5/html5",
        "bootstrap" : "/src/libs/bootstrap/bootstrap.min",
        "jquery" : "/src/libs/jquery/jquery-1.10.2.min",
        "jqCookie" : "/src/libs/jquery/jquery.cookies.2.2.0",
        "underscore" : "/src/libs/underscore/underscore",
        "plupload" : "/src/libs/plupload/plupload.full",
        "pagination" : "/src/libs/jquery/pagination/jquery.pagination",
        "timepicker" : "/src/libs/jquery/jquery-ui-timepicker-addon",
        "handlebars" : "/src/libs/handlebars/handlebars",
        "mootools" : "/src/libs/mootools/mootools",
        "ajaxExtend" : "/src/module/common/js/ajaxExtend",
        "tools" : "/src/module/common/js/tools",
        "global" : "/src/module/common/js/global",


        "md5" : '/src/libs/md5/md5.min',

        /*需要shim的*/
        "qrcode" : "/src/libs/jquery/qrcode/jquery.qrcode.min",
        "jquery-ui" : "/src/libs/jquery/ui/jquery-ui.min",
        "layer" : "/src/libs/layer/layer",
        "layer.ext": "/src/libs/layer/extend/layer.ext",
        "xheditor":"/src/libs/xhEditor/js/xheditor-1.2.2.min",

        /*一些开放接口*/
       // "sina-iplookup": ["http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js","/src/libs/temp/ipJson"]
     },
    map: {
        /*"*": {
            "style": "/lbsplat/libs/requirejs/css.js",
            "text": "/lbsplat/libs/requirejs/text.js"
        }*/
    },
    shim : {
        "qrcode" : {
            deps : ["jquery"]
        },
        "layer" : {
            deps : ["jquery"],
            exports : "layer"
        },
        "layer.ext" : {
            deps : ["jquery","layer"]
        },
        "jquery-ui" : {
            deps : ["jquery"]
        },
        "jqCookie" : {
            deps : ["jquery"],
            exports : "jqCookie"
        },
        "timepicker" : {
            deps : ["jquery","jquery-ui"]
        },
        "bootstrap" : {
            deps : ["jquery"]
        },
        "xheditor" : {
            deps : ["jquery"]
        },
        "plupload" : {
            deps : ["jquery"]
        },
        "pagination" : {
            deps : ["jquery"]
        },
        "underscore" : {
            exports : "_"
        },
        "handlebars" : {
            exports : "Handlebars"
        },
        "mootools" : {
            exports : 'MooTools'
        }
    }
});