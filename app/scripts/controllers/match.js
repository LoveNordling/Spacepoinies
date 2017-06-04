'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:MatchCtrl
 * @description
 * # MatchCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('MatchCtrl', function ($scope, $http, CONFIG, $rootScope, $location, $timeout) {
    $rootScope.clicked = false;
    $scope.changed = false;

    let countUp = function() {
        $scope.changed = true;
    }

    $timeout(countUp, 500);


    $scope.clickButton = function() {
      $rootScope.clicked = true;
    }

    $scope.clickButtonTwo = function() {
      $location.path('/browse');
    }
  });
