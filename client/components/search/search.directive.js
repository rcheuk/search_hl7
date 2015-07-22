(function() {
  'use strict';

  angular
    .module('searchHl7App')
    .directive('search', search);

  /** @ngInject */
  function search() {
    var directive = {
      require: '^MainCtrl',
      restrict: 'E',
      templateUrl: 'components/search/search.html',
      scope: {
          query: '&',
          selectedItem: '='
      },
      link: function(scope, element, attrs, mainCtrl) {
        mainCtrl.querySearch(scope.searchText);
      },
      controller: SearchController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SearchController($http, $q, $log, $timeout) {
      var self = this;
      self.simulateQuery = false;
      self.isDisabled    = false;
      self.noCache = false;
      self.topHits         = loadAll();
      self.querySearch   = query;
      self.selectedItemChange = selectedItemChange;
      self.searchTextChange   = searchTextChange;


      /*function querySearch (query) {
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

      $scope.searchTextChange = function(text) {
        $log.info('Text changed to ' + text);
        console.log('text changed to ' + text);
        $scope.searchText = text;
      }

      $scope.selectedItemChange = function(item) {
        $scope.selectedItem = item;
        console.log('item', item);
        $log.info('Item changed to ' + JSON.stringify(item));
        $http.get('/api/messages').success(function(messages) {
          $scope.results = messages;
          console.log("messages", messages);
        });
      }

      function loadAll() {
        $http.get('/api/suggestions').success(function(result) {
          self.result = result.map(function(v) {
            return {
              value: v,
              display: v
            }
          });
          console.log('result', self.result);
        });
        var topHits = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        /*return topHits.split(/, +/g).map( function (hit) {
          return {
            value: hit.toLowerCase(),
            display: hit
          }
        });*/
        return self.result;
      }
    }
  }

})();
