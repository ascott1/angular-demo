'use strict';

exports.inject = function(app) {
  app.controller('GifCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function($scope, $http) {
  $http.get('../images.json').success(function(data) {
    $scope.gifs = data.data['images'];

    $scope.randomGif = function() {
      $scope.gif = $scope.gifs[Math.floor(Math.random() * $scope.gifs.length)].link;
    };

    $scope.randomGif();
  });
};