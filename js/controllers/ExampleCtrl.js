'use strict';

exports.inject = function(app) {
  app.controller('TestCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function($scope) {
  $scope.testvar = 'Aap';
};

