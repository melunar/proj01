/**
 * Created by web0304 on 2016/3/21.
 */


window.ajaxArray = []; //全局ajax对象存储区域

$.ajaxSetup({
    cache: false
});

var Model = {
    /**
     * [cacheAjaxObject 缓存ajax的对象，以便于查看和取消]
     * @author yuqiu
     * @date   2014-12-02T14:23:21+0800
     * @param  {[type]}                 ajaxUrl [后端接口地址]
     * @param  {[type]}                 params  [参数]
     * @param  {[type]}                 type    [GET or POST]
     * @param  {[type]}                 custom  [ajax 更多参数配置项]
     * @return {[type]}                         [返回一个ajax对象] 最新的ajax对象 还有数组长度
     */
    cacheAjaxObject: function (ajaxUrl, params, type, custom) {

        var ppArray = _.pairs(custom),
            ajaxParams = {
                url: ajaxUrl,
                type: type || 'GET',
                dataType: 'json',
                data: params
            },
            ajaxObject, ajaxArrayItem;

        _.each(ppArray, function (item, index, list) {
            ajaxParams[item[0]] = item[1];
        });

        ajaxObject = $.ajax(ajaxParams);
        ajaxArrayItem = {
            url: ajaxUrl,
            params: params,
            type: type,
            ajaxObj: ajaxObject
        };

        if (window.ajaxArray.length >= 5) {
            window.ajaxArray.shift();
            window.ajaxArray.push(ajaxArrayItem);
        } else {
            window.ajaxArray.push(ajaxArrayItem);
        }

        return [ajaxObject, window.ajaxArray.length];
    },
    /**
     * [getTml 获取handlebars模板内容]
     * @author yuqiu
     * @date   2014-12-02T14:25:05+0800
     * @param  {[type]}                 tmlUrl [模板地址]
     * @return {[type]}                        [返回结果]
     */
    getTml: function (tmlUrl) {

        return $.get(tmlUrl).then(function (result) {
            return result;
        }, function (error) {
            return error;
        });
    },

    /**
     * [getData get方式获取数据]
     * @author yuqiu
     * @date   2014-12-02T17:28:18+0800
     * @param  {[type]}                 ajaxUrl [接口地址]
     * @param  {[type]}                 params  [接口参数]
     * @param  {[type]}                 custom  [定制化参数，用ajax的参数项，否则会出错]
     * @return {[type]}                         [ajax对象]
     */
    getData: function (ajaxUrl, params, custom) {
        var cacheArray = this.cacheAjaxObject(ajaxUrl, params, 'GET', custom);
        return cacheArray[0]
            .then(function (result) {
                window.ajaxArray[cacheArray[1] - 1].result = result;
                window.ajaxArray[cacheArray[1] - 1].error = 'success';
                return result;
            }, function () {
                window.ajaxArray[cacheArray[1] - 1].result = 'error';
                window.ajaxArray[cacheArray[1] - 1].error = arguments;
                return arguments;
            });
    },

    /**
     * [getData get方式获取数据,直接返回ajax对象，以便用abort进行取消]
     * @author zhangyu
     * @date   2015-03-12T10:38:18+0800
     * @param  {[type]}                 ajaxUrl [接口地址]
     * @param  {[type]}                 params  [接口参数]
     * @param  {[type]}                 custom  [定制化参数，用ajax的参数项，否则会出错]
     * @return {[type]}                         [ajax对象]
     */
    getDataByAjaxObj: function (ajaxUrl, params, custom) {
        var cacheArray = this.cacheAjaxObject(ajaxUrl, params, 'GET', custom);
        //记录请求
        cacheArray[0]
            .then(function (result) {
                window.ajaxArray[cacheArray[1] - 1].result = result;
                window.ajaxArray[cacheArray[1] - 1].error = 'success';
            }, function () {
                window.ajaxArray[cacheArray[1] - 1].result = 'error';
                window.ajaxArray[cacheArray[1] - 1].error = arguments;
            });
        return cacheArray[0];
    },

    /**
     * [getData post方式获取数据,直接返回ajax对象，以便用abort进行取消]
     * @author zhangyu
     * @date   2015-03-12T10:38:18+0800
     * @param  {[type]}                 ajaxUrl [接口地址]
     * @param  {[type]}                 params  [接口参数]
     * @param  {[type]}                 custom  [定制化参数，用ajax的参数项，否则会出错]
     * @return {[type]}                         [ajax对象]
     */
    postDataByAjaxObj: function (ajaxUrl, params, custom) {
        var cacheArray = this.cacheAjaxObject(ajaxUrl, params, 'Post', custom);
        //记录请求
        cacheArray[0]
            .then(function (result) {
                window.ajaxArray[cacheArray[1] - 1].result = result;
                window.ajaxArray[cacheArray[1] - 1].error = 'success';
            }, function () {
                window.ajaxArray[cacheArray[1] - 1].result = 'error';
                window.ajaxArray[cacheArray[1] - 1].error = arguments;
            });
        return cacheArray[0];
    },

    /**
     * [postData post方式获取数据]
     * @author yuqiu
     * @date   2014-12-02T17:31:53+0800
     * @param  {[type]}                 ajaxUrl [接口地址]
     * @param  {[type]}                 params  [接口参数]
     * @param  {[type]}                 custom  [定制化参数，用ajax的参数项，否则会出错]
     * @return {[type]}                         [ajax对象]
     */
    postData: function (ajaxUrl, params, custom) {
        var cacheArray = this.cacheAjaxObject(ajaxUrl, params, 'POST', custom);
        return cacheArray[0]
            .then(function (result) {
                window.ajaxArray[cacheArray[1] - 1].result = result;
                window.ajaxArray[cacheArray[1] - 1].error = 'success';
                return result;
            }, function () {
                window.ajaxArray[cacheArray[1] - 1].result = 'error';
                window.ajaxArray[cacheArray[1] - 1].error = arguments;
                return arguments;
            });
    },

    /**
     * [abortAjax 取消上一个ajax请求，用来取消重复请求。添加参数来控制取消对象]
     * @author yuqiu
     * @date   2014-12-05T17:59:54+0800
     * @param  {[type]}                 ajaxUrl [传递url，取消跟此对应的ajax请求]
     * @return {[type]}                         [返回当前Model对象]
     */
    abortAjax: function (ajaxUrl) {
        if (ajaxUrl) {
            _.each(window.ajaxArray.sort(), function (item, index) {
                if (item.url === ajaxUrl) {
                    item.ajaxObj.abort();
                    return;
                }
            });
        } else {
            window.ajaxArray[window.ajaxArray.length - 1].ajaxObj.abort();
        }
        return this;
    }
};
