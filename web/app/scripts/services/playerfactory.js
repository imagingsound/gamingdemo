'use strict';

/**
 * @ngdoc service
 * @name tmaApp.player
 * @description
 * # player
 * Factory in the tmaApp.
 */
angular.module('tmaApp')
  .factory('playerFactory', function () {
    return {
      create: function (options) {
        return OO.Player.create(options['videoContainer'], options['embedCode'], {
          autoplay:options['autoplay']
        });;
      }
    };
  });
