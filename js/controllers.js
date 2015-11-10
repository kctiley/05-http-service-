var app = angular.module('myApp', ['ngRoute'])

app.controller('myController', function($scope) {
  $scope.greeting = "myController";
});

app.controller('HomeController', function($scope) {
  $scope.greeting = "Home!";
});