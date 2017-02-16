/**
 * Created by web0304 on 2016/10/10.
 *
 * 路由：通过不同的 URL 访问不同的内容。
 * 实现多视图的单页Web应用（single page web application，SPA）。
 * 通常我们的URL形式为 http://runoob.com/first/page，但在单页Web应用中 AngularJS 通过 # + 标记 实现
 * ----（在客户端实现 # 号后面内容的功能实现，服务器的请求不变）。
 */


/**
 * 模块的 config 函数用于配置路由规则。
 * 通过使用 config() API，请求把$routeProvider注入到我们的配置函数并且使用$routeProvider.when  API来定义我们的路由规则。
 * $routeProvider 提供了 when(path,object) & otherwise(object) 函数按顺序定义所有路由，包含两个参数:
 *      第一个参数是 URL 或者 URL 正则规则。
 *      第二个参数是路由配置对象。
 *
 *
 $routeProvider.when(url, {
        template: string,   //在 ng-view 中插入简单的 HTML 内容
        templateUrl: string, //在 ng-view 中插入 HTML 模板文件
        controller: param, //function、string或数组类型，在当前模板上执行的controller函数，生成新的scope
        controllerAs: string, //string类型，为controller指定别名
        redirectTo: string, function, //重定向的地址
        resolve: object<key, function> //指定当前controller所依赖的其他模块
        });
 */
angular.module('routingDemoApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'pages/page_home.html',
            controller: 'homeCtrl'
        })
        .when('/computers', {
            templateUrl: 'pages/page_computers.html',
            controller: 'computersCtrl'
        })
        .when('/printers', {
            templateUrl: 'pages/page_printers.html',
            controller: 'printersCtrl'
        })
        .otherwise({redirectTo: '/home'});
}]).controller('homeCtrl', function ($scope, $route) { $scope.$route = $route;})
    .controller('computersCtrl', function ($scope, $route) { $scope.$route = $route;})
    .controller('printersCtrl', function ($scope, $route) { $scope.$route = $route;});

