'use strict';

angular.module('bahmni.department')
    .controller('DepartmentListViewController', ['$scope', '$state', '$location', 'spinner', 'departmentService',
        function ($scope, $state, $location, spinner, departmentService) {
            
            $scope.delete = function (depId) {
                departmentService.delete(depId).then(function (response) {
                    console.log("deleted successfully");
                });
            }

            var init = function () {
                console.log("department list view");
                var params = {};
                return departmentService.getAllDepartments(params).then(function (response) {
                    $scope.departments = response.data;
                    console.log($scope.departments);
                });
                
                // return "hi";
            };

            return spinner.forPromise(init());
        }]);
