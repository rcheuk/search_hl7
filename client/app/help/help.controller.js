'use strict';

angular.module('searchHl7App')
  .controller('HelpController', function ($scope, $http, $mdSidenav) {
    $scope.messages = [];

    $http.get('/api/messages').success(function(messages) {
      $scope.messages = messages;
    });


  });
