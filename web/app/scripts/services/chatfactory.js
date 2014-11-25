'use strict';

/**
 * @ngdoc service
 * @name tmaApp.chatFactory
 * @description
 * # chatFactory
 * Factory in the tmaApp.
 */
angular.module('tmaApp')
  .factory('chatFactory', function () {

    //var socket = io('http://0.0.0.0:3000');
    var socket = io('http://localhost:3000');
    return {
      createChat: function(){
        return socket;
      }
    };
  });
