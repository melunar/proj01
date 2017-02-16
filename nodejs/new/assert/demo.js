// 断言 assert 模块，用于单元测试用例
var assert = require("assert");
assert.throws(
	function() {
		throw new Error("wrong value");
	},
	Error
);
