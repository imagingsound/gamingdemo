'use strict';

/**
 * @ngdoc function
 * @name tmaApp.controller:ChannelCtrl
 * @description
 * # ChannelCtrl
 * Controller of the tmaApp
 */
angular.module('tmaApp')
  .controller('ChannelCtrl', function ($scope, $routeParams, playerFactory) {
    var embed_code = $routeParams.embed;
    var options = {};
    options['videoContainer'] = 'ooyala-videoplayer';
    options['embedCode'] = embed_code;
    options['autoplay'] = true;
    var mainPlayer = playerFactory.create(options);
    options['videoContainer'] = 'ooyala-video2';
    options['embedCode'] = 'J4aWRzbzqqBwwXr_bvmI-_onl8AxlZU1';
    var secondPlayer = playerFactory.create(options);
    var videoOption = true;
    setTimeout(function(){
      secondPlayer.setVolume(0);
    }, 1000);

    $scope.changeVideo = function() {
      OO.$('.ooyala-video2').addClass('animation-full-video');
      OO.$('.main-video').addClass('animation-min-video');
      setTimeout(function(){
        var element = OO.$('.ooyala-video2');
        OO.$('.ooyala-video2').removeClass('ooyala-video2');
        OO.$('.main-video').removeClass('main-video').addClass('ooyala-video2').append($('.video-overlay'));
        element.addClass('main-video').children('.video-overlay').remove();
        OO.$('.ooyala-video2').removeClass('animation-min-video');
        OO.$('.main-video').removeClass('animation-full-video');
      }, 1000);
      if (videoOption) {
        videoOption = false;
        secondPlayer.setVolume(mainPlayer.getVolume());
        mainPlayer.setVolume(0);
      }
      else {
        videoOption = true;
        mainPlayer.setVolume(secondPlayer.getVolume());
        secondPlayer.setVolume(0);
      }
    }
    $scope.$on("$locationChangeStart", function(event) {
      mainPlayer.destroy();
      secondPlayer.destroy();
    });
  });
