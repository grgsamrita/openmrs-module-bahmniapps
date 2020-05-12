// 'use strict';

// var Bahmni = Bahmni || {};
// Bahmni.Department = Bahmni.Department || {};

// angular.module('bahmni.department', ['bahmni.common.uiHelper', 'bahmni.common.domain', 'bahmni.common.util', 'bahmni.common.config',
//     'bahmni.common.orders', 'bahmni.common.appFramework', 'bahmni.common.logging', 'ui.router', 'angularFileUpload']);


var app = angular.module('bahmni.department', []);
    app.controller('PopupDemoController', ['$scope',    function($scope) {
            $scope.open = function() {
            	alert("hi");
                // var modalInstance = $modal.open({
                //     templateUrl: 'first.html',
                // });
            }
        }]);