/**
 * Created by web0304 on 2016/7/26.
 */
define([
    "mootools"
], function() {

    /**
     * initialize方法
     */
    var Animal = new Class({
        initialize: function(age){
            this.age = age;
        }
    });


    /**
     * extend 返回该Class的一个经过传入参数属性扩展的对象副本
     * @type {void|*}
     */
    var Cat = Animal.extend({
        initialize: function(name,age) {
            this.parent(age);//调用animal的initialize方法
            this.name = name;
        },
        hobby: ["eat","sleep"]
    });


    /**
     * implement  要添加到基础类中属性集合
     */
    Animal.implement({
        setName: function(name){
            this.name = name
        }
    });
    var myAnimal = new Animal(20);
    myAnimal.setName('caaa');
    console.log(myAnimal.name);

    return Cat;
});
