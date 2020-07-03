'use strict';

angular.module('bahmni.adt')
    .controller('WardsController', ['$scope', '$rootScope', '$window', '$document', 'spinner', 'wardService',
        function ($scope, $rootScope, $window, $document, spinner, wardService) {
            $scope.wards = null;

            var init = function () {
                return loadAllWards();
            };

            var loadAllWards = function () {
                return wardService.getWardsList().success(function (wardsList) {
                    // $scope.wards = wardsList.results;

                    console.log(`laxmi's customisation`);
                    $scope.wards = _.filter(wardsList.results, function(result) { return (result.ward.parentLocation.uuid == $scope.$root.visitLocationUuid) });
                });
            };
            spinner.forPromise(init());
        }]);
