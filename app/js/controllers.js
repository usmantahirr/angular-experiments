'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });
  $scope.orderProp = 'age'; // Default ordering value
});

// Other way of doing the same
//////////////////////////////////////////////////////////////
// function PhoneListCtrl($scope, $http) {
//   $http.get('phones/phones.json').success(function(data) {
//     $scope.phones = data;
//   });
//   $scope.orderProp = 'age'; // Default ordering value
// }
// PhoneListCtrl.$inject = ['$scope', '$http'];
// phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);

// Other way arround
//////////////////////////////////////////////////////////////////////////
// function PhoneListCtrl($scope, $http) {
//   $http.get('phones/phones.json').success(function(data) {
//     $scope.phones = data;
//   });
//   $scope.orderProp = 'age'; // Default ordering value
// }
// phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);
