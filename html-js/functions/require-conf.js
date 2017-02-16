/**
 * Created by web0304 on 2016/3/15.
 * requireJS functions模块配置文件
 */
requirejs.config({
    urlArgs: "v=" + (new Date()).getTime(),
    baseUrl: '.',
    paths: {
        'isDigit': '/html-js/functions/isDigit.js',
        'json2': '/js/json.js',
        'jquery': '/js/jquery.min.js'
    }
});