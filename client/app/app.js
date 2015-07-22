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
      .when('/help', {
        templateUrl: 'app/help/help.html',
        controller: 'HelpController',
        controllerAs: 'help'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
