'use strict';

/* App Module */

var app = angular.module('ngAppDemo', []);
// Controller Usage
app.controller('ngAppDemoController', function($scope) {
  $scope.a = 1;
  $scope.b = 2;
});

// Using $scope
app.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2; };
}]);

// Model Updation through controllers
app.controller('SpicyController', ['$scope', function($scope) {
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);

// Service declaration & Usage
app.controller('ServiceTest', ['$scope','notify', function ($scope, notify) {
      $scope.clickCount = 0;
      $scope.callNotify = function(msg) {
      notify(msg);
    };
}])

// Custom Service
app.factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length == 3) {
        win.alert(msgs.join("\n"));
        msgs = [];
      }
    };
}]);
