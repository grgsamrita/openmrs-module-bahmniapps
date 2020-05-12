'use strict';

angular.module('bahmni.department')
    .controller('DepartmentListController', ['$scope', '$state', '$location', 'spinner',
        function ($scope, $state, $location, spinner) {            
            $scope.navigateToAdd = function () {
                $state.go("department.create");
            };
        }]);
