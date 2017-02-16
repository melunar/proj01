function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function() {
	alert(2);
}
Foo.getName();//2

function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function() {
	alert(2);
}
Foo().getName();//1
var foo = new Foo();
foo.getName();// foo = {}; foo is not a function