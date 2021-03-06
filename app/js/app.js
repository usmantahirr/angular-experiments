'use strict';

/* App Module */

var app = angular.module('ngAppDemo', []);
// Controller Usage
app.controller('ngAppDemoController', function($scope) {
  $scope.aValue = 1;
  $scope.bValue = 2;
});

// Using $scope
app.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2; };
    $scope.browserVersion = bowser.version;
    if (bowser.webkit) {
        console.log(bowser.webkit);
    }
    if (bowser.version) {
        console.log(bowser.version);
    }
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
      $scope.clickCount += 1;
      notify(msg);
    };
}]);

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

// Custom Filter
app.filter('greet', function($sce){
    return function(name){
        return $sce.trustAsHtml("Hello <strong>" + name + "</strong> !!");
    };
});

// Value Provider
app.value('clientId', 'a12345654321x');
app.controller('VPTest', ['clientId', function VPTest(id) {
  this.clientId = id;
}]);