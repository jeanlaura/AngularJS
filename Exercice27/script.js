var app = angular.module('app', []);
app.controller('appCtrl',['$scope', function($scope) {
    $scope.appButtonAlert = function(){
      alert('QUEL ERRREUR !');
    };
}]);
