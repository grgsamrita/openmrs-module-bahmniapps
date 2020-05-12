'use strict';

angular.module('bahmni.department')
    .controller('DepartmentCreateController', ['$scope', '$state', '$location', 'spinner',
        function ($scope, $state, $location, spinner) {
            $scope.department = {};
            
            $scope.createDepartment = function() {
                console.log("inside submit");
            }
            var init = function () {
                // return appointmentsServiceService.getAllServices().then(function (response) {
                //     $scope.appointmentServices = response.data;
                // });
                console.log("department create");
                return "hi";
            };

            return spinner.forPromise(init());
        }]);
