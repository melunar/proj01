/**
 * Created by web0304 on 2016/10/10.
 */
var app = angular.module("myNoteApp", []);
app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left = function() {
        return 100 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
    }
    $scope.save = function() {
        alert("OK");
        $scope.message = "";
    }
});

