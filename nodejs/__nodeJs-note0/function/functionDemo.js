function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello yong");

//匿名函数
execute(function(word){ console.log(word) }, "Hello hao");