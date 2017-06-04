'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:MatchCtrl
 * @description
 * # MatchCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('MatchCtrl', function ($scope, $http, CONFIG, $rootScope, $location) {
    $scope.clicked = false;

    $scope.clickButton = function() {
      $scope.clicked = true;
    }

    $scope.clickButtonTwo = function() {
      $location.path('/browse');
    }
  });
