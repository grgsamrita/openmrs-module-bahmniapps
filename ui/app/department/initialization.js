'use strict';

angular.module('bahmni.department')
.factory('initialization', ['$rootScope', '$q', 'appService', 'spinner',
    function ($rootScope, $q, appService, spinner) {
        var initApp = function () {
            return appService.initApp('department');
        };

        var checkPrivilege = function () {
            return appService.checkPrivilege("Manage Department");
        };

        return spinner.forPromise(initApp().then(checkPrivilege));
    }
]);
