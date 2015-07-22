(function() {
  'use strict';

  angular
    .module('searchHl7App')
    .directive('hl7Navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($location, $mdComponentRegistry) {
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

      ctrl.goToHelp = function() {
        $location.path('/help').replace();
      }

      ctrl.goToDataViz = function() {
        $location.path('/dataViz').replace();
      }

    }
  }

})();
