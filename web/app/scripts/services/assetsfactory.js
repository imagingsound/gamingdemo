'use strict';

/**
 * @ngdoc service
 * @name tmaApp.assetsFactory
 * @description
 * # assetsFactory
 * Factory in the tmaApp.
 */
angular.module('tmaApp')
.factory('assetsFactory', function ($http, $q) {
  var baseUrl = 'http://localhost:4567';
  var request = function(path, method){
    var deferred = $q.defer();
    if(!method) method = 'GET';
    $http({
      method: method,
      url: baseUrl + path
    }).success(function(data){
      deferred.resolve(data);
    }).error(function(data){
      deferred.resolve(data);
    });
    return deferred.promise;
  }
  return {
    getAll: function () {
        return request('/');
     },
    getFeatured: function() { 
        return request('/assets/featured');
    },
    getAssets: function() { 
        return request('/assets');
    }
  };
});
