'use strict';

exports.inject = function(app) {
  app.directive('exampleDirective', exports.directive);
  return exports.directive;
};

exports.directive = function() {
  return {
    restrict: 'E',
    template: '<p>Hey, I\'m a directive!</p>'
  };
};
