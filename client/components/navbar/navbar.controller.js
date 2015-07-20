'use strict';

angular.module('searchHl7App')
  .controller('NavbarCtrl', function ($scope, $location, NavbarCtrl) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
