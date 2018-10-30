var app = angular.module('myApp', []);

app.controller('carsCtrl', function($scope, $http) {
  $http.get('voiture.json')
  .then(function(response){
    $scope.cars = response.data;
  })
})
