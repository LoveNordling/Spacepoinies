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
    $scope.userForm = {
      'username': '',
      'password': ''
    };

    $scope.login = function() {
      console.log("hej");

      $http({
        method: 'POST',
        url: CONFIG.API_URL + 'login',
        data: JSON.stringify($scope.userForm),
        headers: {'Content-Type': 'application/json'}
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available

        console.log(response)
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response)
      });

      /*$http.post(CONFIG.API_URL, {'text':$scope.userForm.username}).success(function(res) {
        console.log(res);
      }).error(function(res) {
        console.log(res);
      });*/

      /*$http.post(CONFIG.API_URL + 'login', $scope.userForm).success(function(res) {
        console.log(res);

        $rootScope.user = res;
        $rootScope.hasLoggedIn = true;
      }).error(function(res) {
        console.log(res);
      });*/
    };

    $scope.logout = function() {
      delete $rootScope.user;
      delete $rootScope.hasLoggedIn;
    };
  });
