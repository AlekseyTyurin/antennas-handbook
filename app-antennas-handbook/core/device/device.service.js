'use strict';

angular.
  module('core.device').
  factory('Device', ['$resource',
    function($resource) {
      return $resource('devices/:deviceId.json', {}, {
        query: {
          method: 'GET',
          params: {deviceId: 'antennas'},
          isArray: true
        }
      });
    }
  ]);