'use strict';

/**
 * @ngdoc function
 * @name tmaApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the tmaApp
 */
angular.module('tmaApp')
  .controller('ChatCtrl', function ($scope, chatFactory) {
    var user = 'OOGamer' + (Math.floor(Math.random()*1000)), count = 0;
    $scope.messages = [[user,'Chat Ready']];
    var colorByUser = {};
    var colors = ['blue', 'fuchsia', 'red', 'green', 'IndianRed'];
    var chat = chatFactory.createChat();
    $scope.message = '';
    chat.on('broadcast', function(from, msg){
      if (from !== user) {
        $scope.$apply(function(){$scope.messages.push(Array(from,msg));});
        $(".messages").animate({ scrollTop: $(document).height() }, "slow");
      }
    });
    $scope.evaluateEvent = function(e){
      if (e.keyCode === 13) {
        $scope.sendMessage();
        e.preventDefault();
      }
    };

    $scope.sendMessage = function(){
      var message = $scope.message;

      $scope.message = '';
      if (!message || message.length === 0 || !message.trim()){
        return;
      }

      chat.emit('message', user, message);
      $scope.messages.push(Array(user, message));
    };
    $scope.getColor = function(nick){
      if (!colorByUser[nick]){
        colorByUser[nick] = colors[count % colors.length];
        count += 1;
      }
      return colorByUser[nick];
    };
  });
