var app = angular.module('ngpatternApp', []);

app.controller('ngpatternCtrl', function ($scope) {
  // Au click du bouton submit, une fonction se crée
  $scope.sendForm = function () {
    // Et envoie un merveilleux message !
    $scope.msg = 'C\'est dans la boîte !!!!!!';
  };
});
