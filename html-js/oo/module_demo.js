/* 
* @Author: haoy
* @Date:   2017-04-08 13:44:18
* @Last Modified by:   haoy
* @Last Modified time: 2017-04-08 14:05:58
*/

function A() {
    return {
        /**
         * [func01 description]
         * @return {[type]} [description]
         */
        func01: function() {
            console.log(1);
            console.log(this);
            this.func02(this.func03);
        },
        /**
         * [func02 description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        func02: function(callback) {
            console.log(2);
            console.log(this);
            callback && callback();
        },
        /**
         * [func03 description]
         * @return {[type]} [description]
         */
        func03: function() {
            console.log(3);
            console.log(this);
        }
    };
};
A.func01();
/**
 * func03作为回调函数执行 它的this指向window！！！
 */
