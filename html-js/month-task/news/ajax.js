/**
 * Created by web0304 on 2016/3/24.
 */
/*
function loadTempl(url, force) {
    this.templHash = this.templHash || new Hash();

    if (this.templHash.has(url) && !force) {
        return this.templHash.get(url);
    }

    var self = this;
    return jQuery.get(url, function(templ) {
        self.templHash.set(url, templ);
    });
}*/

function loadTemplate(url, callbackSuccess, callbackError) {
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
}