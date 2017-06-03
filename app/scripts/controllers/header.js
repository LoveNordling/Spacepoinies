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
    $scope.setUser = function(id) {
      $rootScope.user = $rootScope.users[id];
    }

    $scope.setCompany = function(id) {
      $rootScope.company = $rootScope.companies[id];
      $rootScope.companyId = id;
    }


  });
