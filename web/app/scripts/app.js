'use strict';

/**
 * @ngdoc overview
 * @name tmaApp
 * @description
 * # tmaApp
 *
 * Main module of the application.
 */
angular
  .module('tmaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .when('/channel/:embed', {
        templateUrl: 'views/channel.html',
        controller: 'ChannelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
