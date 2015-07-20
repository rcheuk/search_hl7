'use strict';

angular.module('searchHl7App')
  .controller('MainCtrl', function ($scope, $http, $mdSidenav) {
    $scope.messages = [];

    $http.get('/api/messages').success(function(messages) {
      $scope.messages = messages;
    });

    var initialize = function() {
      $mdSidenav('left').close();
    }

    initialize();

  });
