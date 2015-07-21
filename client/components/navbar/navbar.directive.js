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
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($location, $mdSidenav) {
      var ctrl = this;
      ctrl.menu = [{
        'title': 'Data Visualizations Sample',
        'link': '/dataViz'
      }];

      ctrl.isCollapsed = true;

      ctrl.isActive = function(route) {
        return route === $location.path();
      };

      ctrl.toggleSidenav = function() {
        $mdSidenav('left').toggle();
      }

    }
  }

})();
