(function() {
  'use strict';

  angular
    .module('searchHl7App')
    .directive('results', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/results/results.html',
      controller: ResultsController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ResultsController($location, $mdComponentRegistry) {
      var ctrl = this;

      ctrl.isActive = function(route) {
        return route === $location.path();
      };

      ctrl.toggleSidenav = function() {
        $mdComponentRegistry.when('left').then(function(it){
          it.open();
        });
        console.log("gtoggle");
      }

    }
  }

})();
