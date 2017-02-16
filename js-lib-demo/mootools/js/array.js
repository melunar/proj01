/**
 * Created by web0304 on 2016/7/26.
 */
define([
    "mootools"
], function(mt) {
    //each方法
    ['apple','banana','lemon'].each(function(item, index){
        console.log(index + " = " + item);
    });
    ['apple','banana','lemon'].each(function(item){
        console.log(item);
    });

    //filter方法
    console.log([10,3,25,100].filter(function(item, index){
        return item > 20;
    }));

    //map方法
    console.log([10,3,25,100].map(function(item, index){
        return item - 20;
    }));

    //every方法
    console.log([10,3,25,100].every(function(item, index){
        return item < 20;
    }));//false

    //some方法
    console.log([10,3,25,100].some(function(item, index){
        return item < 20;
    }));//true

    //indexOf
    console.log(['apple','lemon','banana'].indexOf('lemon'));//1

    //copy(+-start,length) 报错 无copy方法
    //var letters = ["a","b","c"];
    //console.log(letters.copy());     //["a","b","c"]

    // 报错 无remove方法
    //console.log(["1","2","3","2"].remove("2")); 	//结果： ["1","3"];

    //contain方法
    console.log([1,2,3,4].contains(1));//true
    console.log([1,2,3,4].contains(5));//false

    //associate(keys)方法
    console.log(["A","B","C"].associate(["a","b","c"]));

    //extend([])、 merge([])接纳另一个数组,报错 没有该方法...
    console.log(['Cat', 'Dog', 'Coala'].concat(['man']));
    console.log(['Cat', 'Dog', 'Coala'].concat(['man']));

    //
    console.log(['Cat', 'Dog', 'Coala'].getLast());
    console.log(['Cat', 'Dog', 'Coala'].getRandom());

    console.log(mt);



});
