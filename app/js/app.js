'use strict';

/* App Module */

var app = angular.module('ngAppDemo', []);

app.controller('ngAppDemoController', function($scope) {
  $scope.a = 1;
  $scope.b = 2;
});

app.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2; };
}]);

app.controller('SpicyController', ['$scope', function($scope) {
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]);
