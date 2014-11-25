'use strict';

/**
 * @ngdoc function
 * @name tmaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tmaApp
 */
angular.module('tmaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
