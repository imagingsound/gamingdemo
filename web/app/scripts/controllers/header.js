'use strict';

/**
 * @ngdoc function
 * @name tmaApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the tmaApp
 */
angular.module('tmaApp')
  .controller('HeaderCtrl', function ($scope, $modal) {
    $scope.doLogin = function(){
      $modal.open({
        templateUrl: 'templates/login.html',
        size: 'sm'
      });
    }
  });
