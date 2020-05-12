'use strict';

angular.module('bahmni.department')
    .controller('DepartmentListViewController', ['$scope', '$state', '$location', 'spinner', 'departmentService',
        function ($scope, $state, $location, spinner, departmentService) {
            
            var init = function () {
                var params = {};
                return departmentService.getAllDepartments(params).then(function (response) {
                    $scope.departments = response.data;
                    console.log($scope.departments);
                });
                console.log("department list view");
                return "hi";
            };

            return spinner.forPromise(init());
        }]);
