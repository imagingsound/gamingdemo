'use strict';

/**
 * @ngdoc directive
 * @name tmaApp.directive:itemsCarousel
 * @description
 * # itemsCarousel
 */
angular.module('tmaApp')
  .directive('itemsCarousel', function () {
    return {
      restrict: 'E',
      replace: 'true',
      link: function postLink(scope, element) {
        var options = {
          paginatinSpeed: 300,
          navigation: true,
          navigationText: [
            "<i></i>",
            "<i></i>"
          ]
        };

        scope.$watch('featured', function(value){
          if(value.length === 0) {
            return;
          }
          $('.featured-carousel .item').on('click', function(e){console.log(e.currentTarget.attributes)});

          angular.forEach(scope.featured, function(value){
            $(element).append('<div class="item" data-embed="' + value.embed_code + '"><img src="' + value.preview_image_url + '"></div>');
          });
          $(element).owlCarousel(options);
          $('.featured-carousel .item').on('click', function(e){
            var attr = e.currentTarget;
            var embed = $(attr).data("embed");
            scope.loadFeatured(embed);
          });
        });
      }
    };
  });
