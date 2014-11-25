'use strict';

/**
 * @ngdoc directive
 * @name tmaApp.directive:videoRow
 * @description
 * # videoRow
 */
angular.module('tmaApp')
  .directive('videoRow', function () {
    return {
      templateUrl: 'templates/directives/video_row.html',
      restrict: 'E',
      scope: {
        videoRowName : "=videoRowName"
      }
    };
  });
