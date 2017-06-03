'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('RegisterCtrl', function ($scope, $http, CONFIG) {
    $scope.test = "hejhej";

    $scope.newUser = {
      "email": "",
      "password": ""
    };

    $scope.registerNewUser = function() {

      $http({
        method: 'POST',
        url: CONFIG.API_URL + 'register',
        data: $scope.userForm,
        headers: {'Content-Type': 'application/json'}
      }).then(function successCallback(response) {
        console.log(response)

        $rootScope.user = response.data;
        $rootScope.hasLoggedIn = true;

      }, function errorCallback(response) {
        let responseMessage = response.data.message;

        if (responseMessage === 'EMAIL_NOT_VALID') {
          alert("Your email address is not a valid email address");
        }
      });

    };


  });
