'use strict';

angular.
  module('deviceHandbookApp').
  config(['$locationProvider', '$routeProvider',
    function config ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/devices', {
          template: '<device-list></device-list>'
        }).
        when('/devices/:deviceId', {
          template: '<device-detail></device-detail>'
        }).
        otherwise('/devices');
    }
  ]);