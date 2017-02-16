/**
 * Created by web0304 on 2016/10/8.
 */

var app = angular.module('myApp', []);//AngularJS 模块
 app.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});


app.controller('myCtrl', function ($scope, $rootScope) {//AngularJS 控制器,这个参数名字好像不能有二
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});




app.controller("ctrl2", function ($scope, $rootScope) {
    $scope.name2 = "name2";
    $rootScope.globalName = "全世界都是我";
});

app.controller("ctrl3", function ($scope) {
    $scope.name3 = "name3";
});

app.controller("CGlobal", function($scope, $rootScope, $location) {
    $rootScope.url = $location.absUrl();
    $scope.myUrl = $location.absUrl();
});

//$http 服务
app.controller("ctrlHttp", function($scope, $http) {
    $http.get("package.json").success(function(res) {
        $scope.UrlNames = res;
        $scope.resType = typeof res;
    });
});

//自定义一个服务
app.service("myService", function() {
    this.myFun = function(num) {
      return num.toString(16);
    };
});
app.filter("myFormat", function(myService) {
    return function(x) {
        return myService.myFun(x);
    }
});
app.controller("ContFormat", function($scope) {
    $scope.counts = [255, 251, 100];
});









