'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('UserCtrl', function ($scope, $http, CONFIG, $rootScope, $location) {
    if (typeof $rootScope.user === 'undefined') {
      $location.path('/');
    } else {
      $http({
        method: 'POST',
        url: CONFIG.API_URL + 'get_user',
        data: {'token': $rootScope.user.token},
        headers: {'Content-Type': 'application/json'}
      }).then(function successCallback(response) {

      }, function errorCallback(response) {

      });
    }
  });
