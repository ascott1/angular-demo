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
  .state('controllers', {
    url: '/controllers',
    controller: require('./controllers/ExampleCtrl').inject(app),
    templateUrl: 'views/controllers.html'
  })
  .state('directives', {
    url: '/directives',
    controller: require('./controllers/ExampleCtrl').inject(app),
    templateUrl: 'views/directives.html'
  })
  .state('gif', {
    url: '/gif',
    controller: require('./controllers/GifCtrl').inject(app),
    templateUrl: 'views/gif.html'
  });

});

app.run();
