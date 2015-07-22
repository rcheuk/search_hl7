'use strict';

angular.module('searchHl7App')
  .controller('MainCtrl', function ($scope, $mdComponentRegistry) {
    $scope.messages = [];
    $scope.results = null;

    var initialize = function() {
      $mdComponentRegistry.when('left').then(function(it){
        it.close();
      });
    }


    initialize();

    /*$scope.querySearch = function (query) {
      var results = query ? ctrl.topHits.filter( createFilterFor(query) ) : ctrl.topHits,
          deferred;
      if (ctrl.simulateQuery) {
        deferred = $q.defer();
        $timeout(
          function () {
            deferred.resolve( results );
          }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }*/

    $scope.querySearch = function(item) {
      $scope.selectedItem = item;
      console.log('item', item);
      $log.info('Item changed to ' + JSON.stringify(item));
      $http.get('/api/messages').success(function(messages) {
        $scope.results = messages;
        console.log("messages", messages);
      });
    }


    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(query) {
        return (query.value.indexOf(lowercaseQuery) === 0);
      };
    }

  });
