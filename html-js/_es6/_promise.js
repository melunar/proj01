/* 
* @Author: haoy
* @Date:   2017-07-18 18:56:48
* @Last Modified by:   melunar
* @Last Modified time: 2018-04-20 01:08:25
*/

/** 
 * Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
 * 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
 * Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
 *
 * 对象的状态不受外界影响。Promise对象代表一个异步操作，
 * 有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。
 * 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 * 这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
 * 
 * Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。
 * 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
 * 如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
 * 这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
 */

function makePromiss() {
	var promise = new Promise(function(resolve, reject) {
		var result = Math.random() > 0.5;
		setTimeout(function() {
			if(result) {
				resolve(result); //resolve 方法会触发then回调中的第一个参数
			} else {
				reject(result); //reject 方法会触发then回调中的第二个参数
			}    
		}, 1000);
	});
	return promise;
}

/**
 * Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。
 * then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
 * 因此可以采用链式写法，即then方法后面再调用另一个then方法。
 */

makePromiss().then(function(value) {
	console.log("1:" + value);
	return makePromiss();
}, function(error) {
	console.warn("1:" + error);
	return makePromiss();
}).then(function(value) {
	console.log("2:" + value);
}, function(error) {
	console.warn("2:" + error);
});

// ex_0: 图片加载的异步处理
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
	var image = new Image();
	image.onload = function() {
		resolve(image);
	};
	image.onerror = function() {
		reject(new Error('Could not load image at ' + url));
	};
	image.src = url;
  });
}

loadImageAsync("").then(function(img) {
	//console.log(img.src);
}, function(error){
	//console.log(error.toString());
});

/**
 * Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
 * 错误来源可以是promise对象内部 也可以是then回调
 * 如果出错没来得及做错误处理会造成代码报错
 *
 * 如果Promise状态已经变成Resolved，再抛出错误是无效的。
 */
makePromiss().then(function(value) {
	throw new Error('test');
}, function(error) {
	throw new Error('test');
}).catch(function(err) {
	console.warn("捕获异常");
});
// <==>
var proErr = makePromiss();
proErr.then(function(value) {
	throw new Error('test');
}, function(error) {
	throw new Error('test');
});
proErr.catch(function(err) {
	console.warn("捕获异常-catch分开写");
});

/**
 * 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
 */

/**
 * Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。
 * 因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
 */

/**
 * finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。
 * 它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
 */


/**
 * 有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。
 * 1.参数是一个Promise实例: Promise.resolve将不做任何修改、原封不动地返回这个实例。
 * 2.参数是一个thenable对象(指的是具有then方法的对象): 
 * 		Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法
 * 3.参数不是具有then方法的对象，或根本就不是对象: 返回一个新的Promise对象，状态为Resolved。
 * 4.不带有任何参数: Promise.resolve方法允许调用时不带参数，直接返回一个Resolved状态的Promise对象
 * 
 * Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
 */

/**
 * promiss 对象是可以缓存 随时多次调用then等方法
 * Promise.resolve(1).then(function(res){console.log(res);return res;}).then(function(res){console.log(res)}) // 1,1 
//promise 每次调用 .then 或者 .catch 都会返回一个新的 promise
 */
console.log(1);// 0/
new Promise(function (resolve, reject){
    resolve(true); //3.
    console.log(99) //1.先执行
    window.setTimeout(function (){
        console.log(100) // 由于延迟 最后执行
        reject(false); //执行了一个状态 这里不会触发
    }, 0);
}).then(function(){
    console.log(2);//3.
}, function(){
    console.log(3);//-1
});
console.log(4);//2

//1-99-4-2-100