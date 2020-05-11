'use strict';

angular.module('bahmni.depmodule')
.factory('initialization', ['$rootScope', '$q', 'appService', 'spinner',
    function ($rootScope, $q, appService, spinner) {
        var initApp = function () {
            return appService.initApp('depmodule');
        };

        var checkPrivilege = function () {
            return appService.checkPrivilege("Manage Department");
        };

        return spinner.forPromise(initApp().then(checkPrivilege));
    }
]);
