'use strict';

var amortize = require('amortize');

exports.inject = function(app) {
  app.controller('CalcCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function($scope) {
  $scope.master = {};

  $scope.update = function(loan) {
    $scope.master = amortize(angular.copy(loan));
  };

  $scope.loan = {
    amount: 240000,
    rate: 4.25,
    totalTerm: 360,
    amortizeTerm: 60
  };

  $scope.update($scope.loan);

};