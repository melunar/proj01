/**
 * Created by web0304 on 2016/10/8.
 */

var app = angular.module('myApp', []);//AngularJS 模块

app.controller('selectCtrl', function($scope) {
    $scope.sites = [
        {site : "Google", url : "http://www.google.com"},
        {site : "Runoob", url : "http://www.runoob.com"},
        {site : "Taobao", url : "http://www.taobao.com"}
    ];
    $scope.cars = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    }
});

app.controller("tableCtrl",function($scope, $http) {
    $http.get("package.json").success(function(response) {
        $scope.names = response.records;
    });
});
app.controller("clickCtrl",function($scope) {
    //$scope.name = "DUDU";
    $scope.isShow = false;
    $scope.handler = function() {
        $scope.isShow = !$scope.isShow;
    };

});


app.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
    $scope.user = angular.uppercase($scope.user);
});





