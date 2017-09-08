/**
 * Created by web0304 on 2016/10/10.
 */

// 定义一个模块
var mainApp = angular.module("mainApp", []);

// 创建 value 对象 "defaultInput" 并传递数据
/**
 * Value 是一个简单的 javascript 对象，
 * 用于向控制器传递值（配置阶段）
 */
mainApp.value("defaultInput", 5);

/**
 * constant(常量)用来在配置阶段传递数值，
 * 这个常量在配置阶段是不可用的。
 */
mainApp.constant("configParam", "constant ");


// 将 "defaultInput" 注入到控制器
mainApp.controller('CalcController', function($scope, CalcService, defaultInput, configParam) {
    $scope.number = defaultInput;
    $scope.configParam = configParam + "*";
    $scope.result = CalcService.square($scope.number);

    $scope.square = function() {
        $scope.result = CalcService.square($scope.number);
    }
});

// 创建 factory "MathService" 用于两数的乘积
/**
 * factory 是一个函数,用于返回值。在 service 和 controller 需要时创建。
 * 通常使用 factory 函数来计算或返回值。
 */
mainApp.factory('MathService', function() {
    var factory = {};

    factory.multiply = function(a, b) {
        return a * b
    };
    return factory;
});

// 在 service 中注入 factory "MathService"
/**
 * 服务是一个函数或对象
 */
mainApp.service('CalcService', function(MathService){
    this.square = function(a) {
        return MathService.multiply(a,a);
    }
});


// 使用 provider 创建 service 定义一个方法用于计算两数乘积
/**
 * provider 创建一个 service、factory等(配置阶段)。
 * Provider 中提供了一个 factory 方法 get()，它用于返回 value/service/factory。
 */
mainApp.config(function($provide) {
    $provide.provider('MathService', function() {
        this.$get = function() {
            var factory = {};

            factory.multiply = function(a, b) {
                return a * b;
            };
            return factory;
        };
    });
});

