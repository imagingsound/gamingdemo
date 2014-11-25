'use strict';

/**
 * @ngdoc function
 * @name tmaApp.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the tmaApp
 */
angular.module('tmaApp')
.controller('VideosCtrl', function ($scope, assetsFactory) {
  $scope.recent = {};
  $scope.popular = {};
  $scope.watch = {};
  var recentPromise = assetsFactory.getAssets();
  recentPromise.then(function(result){
    $scope.recent = {
      title: "Recent Now",
      description: "Popular Broadcasts",
      videos: result,
      randomNumber: 1520
    };
  });
  var popularPromise = assetsFactory.getAssets();
  popularPromise.then(function(result){
    $scope.popular = {
      title: "Popular Now",
      description: "Popular Broadcasts",
      videos: result,
      randomNumber: 1520
    };
  });
  var watchAgain = assetsFactory.getAssets();
  watchAgain.then(function(result){
    $scope.watch = {
      title: "Watch Now",
      description: "Watch Past Broadcasts",
      videos: result,
      randomNumber: 1520
    };
  });
});
