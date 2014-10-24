'use strict';

exports.inject = function(app) {
  app.controller('GifCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function($scope) {
  //$scope.gifMe = false;

  $scope.gifs = [
    'https://i.imgur.com/66hHres.gif',
    'https://i.imgur.com/ThFlM3A.gif',
    'https://i.imgur.com/WZ1HnE7.gif',
    'https://i.imgur.com/GvfzqGE.gif',
    'https://i.imgur.com/EuCM6t9.gif',
    'https://i.imgur.com/Q5HTevU.gif',
    'https://i.imgur.com/C2MPrfh.gif',
    'https://i.imgur.com/CkRseuL.gif',
    'https://i.imgur.com/A4yxphQ.gif',
    'https://i.imgur.com/1GlHZbX.gif',
    'https://i.imgur.com/y4QDCGR.gif'
  ];

  $scope.gif = $scope.gifs[Math.floor(Math.random() * $scope.gifs.length)];

  $scope.randomGif = function() {
    $scope.gif = $scope.gifs[Math.floor(Math.random() * $scope.gifs.length)];
  };

};