'use strict';

angular.module('searchHl7App')
  .controller('MainCtrl', function ($scope, $http, $mdComponentRegistry) {
    $scope.messages = [];

    $http.get('/api/messages').success(function(messages) {
      $scope.messages = messages;
      console.log("messages", messages);
    });

    var query = function() {

    }

    var initialize = function() {
      $mdComponentRegistry.when('left').then(function(it){
        it.close();
      });
    }

    initialize();



  });
