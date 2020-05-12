'use strict';

angular.module('bahmni.department')
    .controller('DepartmentListController', ['$scope', '$state', '$location', 'spinner', 'departmentService',
        function ($scope, $state, $location, spinner, departmentService) {
            
            var init = function () {
                var params = {};
                return departmentService.getAllDepartments(params).then(function (response) {
                    $scope.departments = response.data;
                });
                console.log("department create");
                return "hi";
            };

            return spinner.forPromise(init());
        }]);
