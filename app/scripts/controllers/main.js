'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    $scope.myFunction = function() {
        console.log("hej");
    };

    $scope.myArray = [
      "tjena",
      "hejdå",
      "dinmamma",
      "blaha"
    ];
  });
