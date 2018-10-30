var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.afficher = "Ceci est mon paragraphe",
    $scope.cacher = ""
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});
