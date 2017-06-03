'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, $http, CONFIG) {
    $scope.loginForm = {
      'email': '',
      'password': ''
    };

    $scope.login = function() {
      console.log("hej");

      $http({
        method: 'POST',
        url: CONFIG.API_URL + 'login',
        data: JSON.stringify($scope.loginForm),
        headers: {'Content-Type': 'application/json'}
      }).then(function successCallback(response) {
        console.log(response)

        $rootScope.user = response.data;
        $rootScope.hasLoggedIn = true;

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
    };
  });
