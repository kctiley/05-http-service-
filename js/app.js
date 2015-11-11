var app = angular.module('myApp', ['ngRoute'])

  app.config(function($routeProvider,$locationProvider){
     $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      $routeProvider
      .when('/service', {
        templateUrl: 'partials/service.html',
        controller: 'ServiceController'
      })
    $locationProvider.html5Mode(true);
  })