'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('UserCtrl', function ($scope, $http, CONFIG, $rootScope, $location, $sce, $filter) {
    $scope.checkChildren = function(index, choosen) {
      if (!choosen) {
        angular.forEach($rootScope.user[index].frameworks, function(fw) {
          fw.choosen = false;
        });
      }
    };
  });
