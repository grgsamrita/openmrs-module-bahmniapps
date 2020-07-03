'use strict';

angular.module('bahmni.adt')
    .controller('WardsController', ['$scope', '$rootScope', '$window', '$document', 'spinner', 'wardService', 'sessionService',
        function ($scope, $rootScope, $window, $document, spinner, wardService, sessionService) {
            $scope.wards = null;

            var init = function () {
                return loadAllWards();
            };

            var loginLocationUuid = sessionService.getLoginLocationUuid();
                // return locationService.getVisitLocation(loginLocationUuid).then(function (response) {
                //     var visitLocationUuid = response.data ? response.data.uuid : null;
                //     return patientVisitHistoryService.getVisitHistory(patientUuid, visitLocationUuid);
                // });

            var loadAllWards = function () {
                return wardService.getWardsList().success(function (wardsList) {
                    // actual code
                    $scope.wards = wardsList.results;

                    // ---- show wards and beds as per location
                    // console.log(`laxmi's customisation`);
                    // $scope.wards = _.filter(wardsList.results, function(result) { return (

                    //     result.ward.parentLocation !== null && result.ward.parentLocation.uuid == loginLocationUuid
                    // )});
                });
            };
            spinner.forPromise(init());
        }]);
