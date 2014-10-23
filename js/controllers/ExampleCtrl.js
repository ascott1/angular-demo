'use strict';

exports.inject = function(app) {
  app.controller('AlbumsCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function($scope) {
  $scope.albums = [
    { 'title': 'Ride the Tiger' },
    { 'title': 'New Wave Hot Dogs' },
    { 'title': 'President Yo La Tengo' },
    { 'title': 'Fakebook' },
    { 'title': 'May I Sing with Me' },
    { 'title': 'Painful' },
    { 'title': 'Electr-O-Pura' },
    { 'title': 'I Can Hear the Heart Beating as One' },
    { 'title': 'And Then Nothing Turned Itself Inside-Out' },
    { 'title': 'Mishmoshi-Moshi' },
    { 'title': 'The Sounds of the Sounds of Science' },
    { 'title': 'Summer Sun' },
    { 'title': 'I\'m Not Afraid of You and I will Beat Your Ass' },
    { 'title': 'Popular Songs' },
    { 'title': 'Fade' },
  ];
};

