'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, $http, CONFIG, $location) {
    $scope.toggleMatch = function() {
      $rootScope.clicked = false;

      if (typeof $rootScope.matchType == 'undefined') {
        $rootScope.matchType = "comp";
      } else {
        $rootScope.matchType = ($rootScope.matchType == "comp") ? "user" : "comp";
      }
    }
  });
