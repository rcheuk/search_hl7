(function() {
  'use strict';

  angular
    .module('searchHl7App')
    .directive('search', search);

  /** @ngInject */
  function search() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/search/search.html',
      scope: {
          query: '&'
      },
      controller: SearchController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SearchController($http, $q, $log, $timeout) {
      var ctrl = this;
      self.simulateQuery = false;
      self.isDisabled    = false;
      self.topHits         = loadAll();
      self.querySearch   = querySearch;
      self.selectedItemChange = selectedItemChange;
      self.searchTextChange   = searchTextChange;
      // ******************************
      // Internal methods
      // ******************************
      /**
       * Search for states... use $timeout to simulate
       * remote dataservice call.
       */
      function querySearch (query) {
        var results = query ? ctrl.topHits.filter( createFilterFor(query) ) : ctrl.topHits,
            deferred;
        if (ctrl.simulateQuery) {
          deferred = $q.defer();
          $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }
      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }
      function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
      }
      /**
       * Build `states` list of key/value pairs
       */
      function loadAll() {
        var topHits = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        return topHits.split(/, +/g).map( function (hit) {
          return {
            value: hit
          };
        });
      }
      /**
       * Create filter function for a query string
       */
      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(hit) {
          return (hit.value.indexOf(lowercaseQuery) === 0);
        };
      }

    }
  }

})();
