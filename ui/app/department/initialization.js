'use strict';

angular.module('bahmni.depmodule').factory('initialization',
    ['authenticator', 'appService', 'spinner', 'configurations',
        function (authenticator, appService, spinner, configurations) {
            return function () {
                var loadConfigPromise = function () {
                    return configurations.load([]);
                };
                var initApp = function () {
                    return appService.initApp('depmodule', {'app': true, 'extension': true});
                };

                return spinner.forPromise(authenticator.authenticateUser()
                    .then(initApp)
                    .then(loadConfigPromise));
            };
        }
    ]
);
