'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, $http) {
    $scope.userForm = {
      'username': '',
      'password': ''
    };

    $scope.login = function() {
      $http.post(API_URL + '/login', $scope.userForm).then(function(res) {
        $rootScope.user = res;
        $rootScope.hasLoggedIn = true;
      });
    };

    $scope.logout = function() {
      delete $rootScope.user;
      delete $rootScope.hasLoggedIn;
    };
  });
