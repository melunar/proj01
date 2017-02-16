/**
 * 定义一些公用的函数
 * Created by haoyong on 2016/4/3.
 */
define([
    "jquery",
    "mootools",
    "handlebars",
    "pagination"
], function ($) {
    var tools = {
        /**
         * 计算字符串的字节长度
         * @param str 字符串
         * @returns {number} 字符串的字节数
         */
        countByte: function (str) {
            var size = 0;
            for (var i = 0, l = str.length; i < l; i++) {
                size += str.charCodeAt(i) > 255 ? 2 : 1;
            }
            return size;
        },

        /**
         * 根据字节截取长度
         * @param str 字符串
         * @param limitNumber 字节数
         * @returns {*}
         */
        substrByByte: function (str, limitNumber) {
            for (var i = 1, l = str.length + 1; i < l; i++) {
                if (this.countByte(str.substring(0, i)) > limitNumber) {
                    return str.substring(0, i - 1);
                }
            }
            return str;
        },

        /**
         * 去掉所有html标记
         * @param str 字符串
         * @returns {string|void|XML} 去掉所有html标记后的字符
         */
        delHtmlTag: function (str) {
            return str.replace(/<[^>]+>/g, "");
        },

        /**
         * 获取项目的根路径
         * @returns {string} 返回的根路径
         *
         * ****
         * ！！！准确性待审核！！
         * ****
         */
        getRootPath: function () {
            //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
            var curWwwPath = window.document.location.href;

            if (curWwwPath.lastIndexOf("/") == 6) {
                //如果没有pathname（"/"）,直接返回即可
                return curWwwPath;
            }

            //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
            var pathName = window.document.location.pathname;
            var pos = curWwwPath.indexOf(pathName);
            //获取主机地址，如： http://localhost:8083
            var localhostPaht = curWwwPath.substring(0, pos);
            //获取带"/"的项目名，如：/uimcardprj
            var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);

            return (localhostPaht + projectName);
        },

        /**
         * 地址栏只有一个参数的情况下 获取键值对（数组）
         * @returns {string}
         * @constructor
         */
        "GetRequest1": function () {
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
           var strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
          var result = [];
            result[0] = strs[0];
            result[1] = strs[1];
           return result;

        }
    },
        /**
         * 地址栏多个参数的情况下
         * @returns {string}(aa=2&bb=3)
         * @constructor
         */
        "GetRequest": function () {
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf("?") != -1) {    //判断是否有参数
            var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
           //var strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
           return str;

        }
    },

        /**
         * 加载模板
         * @param url
         * @param force
         * @returns {*}
         */
        loadTempl: function (url, force) {
            this.templHash = this.templHash || new Hash();

            if (this.templHash.has(url) && !force) {
                return this.templHash.get(url);
            }

            var self = this;
            return jQuery.get(url, function (templ) {
                self.templHash.set(url, templ);
            });
        },
        /**
         * 加载模板通用函数
         * @param url - 模板地址url
         * @param callbackSuccess - 模板加载成功后的执行函数
         * @param callbackError - 模板加载失败后的执行函数
         */
        loadTemplate: function (url, callbackSuccess, callbackError) {
            var compiler = null;
            //加载模板
            $.when(this.loadTempl(url)).done(function (timeTemplate) {
                if (timeTemplate instanceof Array) {
                    timeTemplate = timeTemplate[0];
                }
                //模板加载成功
                compiler = Handlebars.compile(timeTemplate);
                //成功的回调函数
                if (callbackSuccess && typeof callbackSuccess === "function") {
                    callbackSuccess(compiler);
                }
            }).fail(function () {
                //错误的函数
                if (callbackError && typeof callbackError === "function") {
                    callbackError();
                }
            });
        },

        /**
         * jquery-qrcode这个库是采用 charCodeAt() 这个方式进行编码转换的，
         而这个方法默认会获取它的 Unicode 编码，一般的解码器都是采用UTF-8, ISO-8859-1等方式，
         英文是没有问题，如果是中文，一般情况下Unicode是UTF-16实现，长度2位，而UTF-8编码是3位，这样二维码的编解码就不匹配了。 解决方式是，在二维码编码前把字符串转换成UTF-8
         参考：http://www.51xuediannao.com/qd63/index.php/page-2-94-1.html
         */
        utf16to8: function (str) {
            var out, i, len, c;
            out = "";
            len = str.length;
            for (i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                }
            }
            return out;
        },

        /**
         * 分页
         * @param total
         * @param selector
         * @param pageSize
         * @param currentPage
         * @param callback
         */
        setPagination: function(total, selector, pageSize, currentPage, callback) {
            $(selector).pagination(total, {
                //orhide: true,

                callback: function(pageIndex, jq) {
                    callback(pageIndex + 1);
                },
                prev_show_always: false,
                next_show_always: false,
                prev_text: "上一页",
                next_text: "下一页",
                items_per_page: pageSize,
                first_loading: false,
                current_page: currentPage

                /**
                 * 当点击链接的时候此函数被调用，两个参数，
                 * 新一页的id和pagination容器（一个DOM元素）。
                 * 如果回调函数返回false，则pagination事件停止执行
                 * @param pageIndex
                 * @param jq
                 */
                //callback: callback1()
            });
        },



        /**
         * 工具函数 给下面的时间格式化函数使用
         * @param x
         * @param len
         * @returns {string|*}
         */
        formatLenth: function(x, len) {
            x = '' + x;
            len = len || 2;
            while (x.length < len) {
                x = '0' + x;
            }
            return x;
        },

        //如：1441672045568  -->  "2015-09-08"
        mills2str: function (num) {
            if (num) {
                var date = new Date(num);
                return date.getFullYear() + '-' + this.formatLenth(date.getMonth() + 1) + '-' + this.formatLenth(date.getDate());
            }
            return "";
        },
        //如：1441672045568  -->  "2015-09-08 08:27:25"
        mills2datetime: function (num) {
            if (num) {
                var date = new Date(num);
                return date.getFullYear() + '-' + this.formatLenth(date.getMonth() + 1) + '-' + this.formatLenth(date.getDate()) + " " + this.formatLenth(date.getHours()) + ":" + this.formatLenth(date.getMinutes()) + ":" + this.formatLenth(date.getSeconds());
            }
            return "";
        },
        //如：1441672045568  -->  "2015-09-08 08:27:25:568"
        mills2timestamp: function (num) {
            if (num) {
                var date = new Date(num);
                return date.getFullYear() + '-' + this.formatLenth(date.getMonth() + 1) + '-' + this.formatLenth(date.getDate()) + " " + this.formatLenth(date.getHours()) + ":" + this.formatLenth(date.getMinutes()) + ":" + this.formatLenth(date.getSeconds()) + ":" + this.formatLenth(date.getMilliseconds(), 3);
            }
            return "";
        },

    };
    return tools;
});