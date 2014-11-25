'use strict';

/**
 * @ngdoc directive
 * @name tmaApp.directive:chat
 * @description
 * # chat
 */
angular.module('tmaApp')
  .directive('chat', function () {
    return {
      templateUrl: 'templates/chat.html',
      restrict: 'E',
      controller: 'ChatCtrl'
    };
  });
