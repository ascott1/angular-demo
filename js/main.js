'use strict';

require('angular');

var uiRoute = require('angular-ui-router');
var app = angular.module('MyApp', [uiRoute]);

require('./directives/ExampleDirective').inject(app);

app.config(function($locationProvider, $stateProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: require('./controllers/ExampleCtrl').inject(app)
  })
  .state('second', {
    url: '/second',
    controller: require('./controllers/ExampleCtrl').inject(app),
    templateUrl: 'views/secondary.html'
  });

});

app.run();
