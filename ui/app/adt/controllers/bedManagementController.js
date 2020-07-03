'use strict';

angular.module('bahmni.adt')
    .controller('BedManagementController', [
        '$scope', '$rootScope', '$stateParams', 'spinner', 'wardService', 'backlinkService',
        function ($scope, $rootScope, $stateParams, spinner, wardService, backlinkService) {
            $scope.wards = null;
            $scope.encounterUuid = $stateParams.encounterUuid;
            $scope.visitUuid = $stateParams.visitUuid;

            var init = function () {
                loadAllWards();
                $scope.$watch(function () {
                    return $rootScope.bedDetails;
                }, function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        loadAllWards();
                    }
                });
            };

            var loadAllWards = function () {
                spinner.forPromise(wardService.getWardsList().success(function (wardsList) {
                    // $scope.wards = wardsList.results; // old code

                    // show ward list as per the location visited
                    console.log(`laxmi's customisation`);
                    $scope.wards = _.filter(wardsList.results, function(result) { return (
                        result.ward.parentLocation && result.ward.parentLocation.uuid == $scope.$root.visitLocationUuid) });
                }));
            };

            $scope.$on('$stateChangeSuccess', function () {
                backlinkService.addUrl({
                    url: "#/patient/" + $scope.patient.uuid + "/visit/" + $scope.visitUuid + "/",
                    title: "Back to IPD dashboard",
                    icon: "fa-medkit fa-bed fa-white"
                });
            });

            init();
        }]);
