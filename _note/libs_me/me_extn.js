/*!
* mx v0.0.1_snap
* @Author: melunar
* @Date:   2017-06-17 20:00:55
* @Last Modified by:   melunar
* @Last Modified time: 2017-06-18 01:19:45
* @Description: Some tools function, include global function and prototype extend.
*
* (c) 2017 melunar <haoyong94520@outlook.com>
* not release yet
* //Released under the MIT License.
*/

(function (global, factory) {
	//CMD or ES6 || AMD || factory
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MX = factory());
}(this, (function () { 
	//'use strict';
	/**
	 * 原型链扩展
	 */
	/**
	 * 对象深复制
	 * Object.deepClone(obj)
	 */
	var deepCopy = function(source) { 
		var result = {};
		for (var key in source) {
			result[key] = typeof source[key]=== 'object' ? Object.deepClone(source[key]): source[key];
		} 
		return result; 
	}
	Object.prototype.deepClone = deepCopy;
	Object.defineProperty(Object.prototype, "deepClone", {
		"enumerable": false
	})

	/**
	 * 日期格式化
	 * Data.formate(formateType)
	 */
	// TODO

	var MX = {
		Version: "0.0.1_snap",
		Author: "melunar",
		Build: "000000000000000000000000000"
	}

	/**
	 * 浏览器判断
	 */
	MX.browserType = function () {
		var browserType = "";
		if ((navigator.userAgent.indexOf('MSIE') >= 0) 
			&& (navigator.userAgent.indexOf('Opera') < 0)) {
			browserType = "IE";
		} else if (navigator.userAgent.indexOf('Firefox') >= 0) {
			browserType = "Firefox";
		} else if (navigator.userAgent.indexOf('Opera') >= 0) {
			browserType = "Opera";
		} else if (navigator.userAgent.indexOf('Chrome') >= 0) {
			browserType = "Chrome";
		} else {
			browserType = "Others";
		}
		return browserType;	
	}
	/**
	 * 浏览器判断
	 */
	MX.browserTypeEx = function () {
		var Sys = {};
		var ua = navigator.userAgent.toLowerCase();
		var s;
		(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

		if (Sys.ie) return ('IE: ' + Sys.ie);
		else if (Sys.firefox) return ('Firefox: ' + Sys.firefox);
		else if (Sys.chrome) return ('Chrome: ' + Sys.chrome);
		else if (Sys.opera) return ('Opera: ' + Sys.opera);
		else if (Sys.safari) return ('Safari: ' + Sys.safari);
		else  return ('others: unknown');
	}

return MX;

})));



