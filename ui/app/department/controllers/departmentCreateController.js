'use strict';

angular.module('bahmni.department')
    .controller('DepartmentCreateController', ['$scope', '$state', '$location', 'spinner', 'departmentService',
        function ($scope, $state, $location, spinner, departmentService) {
            $scope.department = {};
            
            $scope.createDepartment = function() {
                departmentService.save($scope.department).then(function (response) {
                    console.log("created");
                    $state.go("department.list.view");
                });
            }
            // var init = function () {
            //     // return appointmentsServiceService.getAllServices().then(function (response) {
            //     //     $scope.appointmentServices = response.data;
            //     // });
            //     console.log("department create");
            //     return "hi";
            // };

            // return spinner.forPromise(init());
        }])
    .controller('DepartmentEditController', ['$scope', '$state', '$location', 'spinner', '$stateParams', 'departmentService',
        function ($scope, $state, $location, spinner, $stateParams, departmentService) {
            $scope.department = {};
            var depId = $stateParams.uuid;
            if(!depId) {
                $state.go("department.list.view");
            } else {
                $scope.getDepartment(depId);            
            }
            

            $scope.getDepartment = function(id) {
                departmentService.getDepartmentById($stateParams.uuid).then(function (response) {
                    $scope.department = response.data;
                });
            }
            
            $scope.updateDepartment = function() {
                departmentService.update($scope.department).then(function (response) {
                    console.log("updated");
                    $state.go("department.list.view");
                });
            }
            // var init = function () {
            //     // return appointmentsServiceService.getAllServices().then(function (response) {
            //     //     $scope.appointmentServices = response.data;
            //     // });
            //     console.log("department create");
            //     return "hi";
            // };

            // return spinner.forPromise(init());
        }]);
