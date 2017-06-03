'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('CompanyCtrl', function ($scope, $http, CONFIG, $rootScope, $location, $sce, $filter) {
    //$scope.company = $rootScope.company;

    //$scope.mainMatches = [];

    for (let i = 0; i < $scope.company.mainReq.length; i++) {
      let id = $scope.company.mainReq[i];
    }
  });
