'use strict';
var flip = require('flip-text');

exports.inject = function(app) {
  app.directive('exampleDirective', exports.directive);
  return exports.directive;
};

exports.directive = function() {
  return {
    restrict: 'EA',
    template: '<p class="lead">Flip me!</p>',
    link: function ($scope, elem, attrs) {
      elem.on('click', function ($event) {
        elem.replaceWith(flip(elem.text()));
      });
    }
  };
};
