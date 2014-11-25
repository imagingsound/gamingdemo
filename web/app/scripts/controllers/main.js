'use strict';

/**
 * @ngdoc function
 * @name tmaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tmaApp
 */
angular.module('tmaApp')
.controller('MainCtrl', function ($scope, playerFactory, assetsFactory) {
  $scope.videoPlayer;
  $scope.currentFeatured;
  $scope.featured = [];
  $scope.topLive = [];

  var randomNumber = function(){
    return Math.floor((Math.random() * 100000) + 30000);
  };

  $scope.featuredRow = {
    title: "Featured Streams",
  description: "Broadcasts people are watching now",
  videos: $scope.featured,
  randomNumber: randomNumber
  };

  $scope.topliveRow = {
    title: "Top Live Streams",
description: "Top live streams people are watching now",
videos: $scope.topLive,
randomNumber: randomNumber
  };

  var assetsPromise = assetsFactory.getAssets();
  assetsPromise.then(function(result){
    $scope.featuredRow.videos = result;

    for(var i = 0; i < 5; i++){
      var random = randomNumber();
      $scope.featuredRow.videos[i].viewers = random;
    }
  });

  var topStreamsPromise = assetsFactory.getAssets();
  topStreamsPromise.then(function(result){
    $scope.topliveRow.videos = result;
    for(var i = 0; i < 5; i++){
      var random = randomNumber();
      $scope.featuredRow.videos[i].viewers = random;
    }
  });

  var featuredPromise = assetsFactory.getFeatured();
  featuredPromise.then(function(result){
    var currentFeatured = result[0];
    currentFeatured.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    $scope.featured = result.slice(0, 15);
    $scope.currentFeatured = currentFeatured;
    $scope.videoPlayer = playerFactory.create({"embedCode": currentFeatured.embed_code, "videoContainer": "video-player", "autoplay": true});
    $scope.$on('$locationChangeStart', function(event) {
      $scope.videoPlayer.destroy();
    });
  });


  $scope.loadFeatured = function(embed){
    angular.forEach($scope.featured, function(item){
      if(embed === item.embed_code){
        $('.content-desc .desc h3').text(item.name);
        $('.content-desc .watch a').attr('href', '#/channel/' + item.embed_code);
        $scope.videoPlayer.setEmbedCode(item.embed_code);
        return;
      }
    });
  }
});
