'use strict';

angular.module('searchHl7App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMaterial'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/dataViz', {
        templateUrl: 'app/dataViz/dataViz.html',
        controller: 'DataVizController',
        controllerAs: 'dataViz'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
