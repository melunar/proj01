/**
 * Created by haoyong on 2016/7/28.
 */

/**
 * 简单工厂模式
 */

//篮球基类
var Basketball = function() {
    this.intro = "篮球-美国";
};
Basketball.prototype = {
    getMember: function() {
        console.log("每支篮球队12人");
    },
    getSize: function() {
        console.log("Basketball is big.");
    }
};


//足球基类
var Football = function() {
    this.intro = "足球-全世界";
};
Football.prototype = {
    getMember: function() {
        console.log("每支足球队23人");
    },
    getSize: function() {
        console.log("football is Middle.");
    }
};

//网球基类
var Tennis = function() {
    this.intro = "网球-大满贯";
};
Tennis.prototype = {
    getMember: function() {
        console.log("网球是一家");
    },
    getSize: function() {
        console.log("Tennis is small.");
    }
};

//球类工厂
var SportsFactory = function(name) {
    switch(name) {
        case "NBA": return new Basketball();
        case "worldCup": return new Football();
        case "FrenchOpen": return new Tennis();
    }
};

var football = SportsFactory("worldCup");
console.log(football);
console.log(football.intro);
football.getMember();
football.getSize();




















