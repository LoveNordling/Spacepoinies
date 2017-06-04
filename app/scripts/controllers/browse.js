'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:MatchCtrl
 * @description
 * # MatchCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('BrowseCtrl', function ($scope, $http, CONFIG, $rootScope) {
    $scope.clickStupidButton = function() {
      document.body.className = 'transform';
      setTimeout(function(){ document.body.className = ''; },200);
    }
  });
