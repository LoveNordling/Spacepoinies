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
    $scope.loginForm = {
      'email': '',
      'password': ''
    };

    $scope.login = function() {
      $http({
        method: 'POST',
        url: CONFIG.API_URL + 'login',
        data: JSON.stringify($scope.loginForm),
        headers: {'Content-Type': 'application/json'}
      }).then(function successCallback(response) {
        $rootScope.user = response.data;
        $rootScope.hasLoggedIn = true;

        if (!$rootScope.user.isCompany) {
          $location.path('/user');
        } else {
          $location.path('/company');
        }
      }, function errorCallback(response) {
        let responseMessage = response.data.message;

        if (responseMessage === 'USER_NOT_FOUND') {
          alert("Login credentials not correct");
        }
      });
    };

    $scope.logout = function() {
      delete $rootScope.user;
      delete $rootScope.hasLoggedIn;

      $location.path('/');
    };
  });
