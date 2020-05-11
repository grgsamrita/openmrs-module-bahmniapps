
'use strict';

angular.module('department', ['httpErrorInterceptor', 'bahmni.department', 'bahmni.common.routeErrorHandler', 'ngSanitize',
    'bahmni.common.uiHelper', 'bahmni.common.config', 'bahmni.common.orders', 'bahmni.common.i18n', 'pascalprecht.translate',
    'ngCookies', 'angularFileUpload', 'bahmni.common.services']);
angular.module('department')
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$compileProvider', '$bahmniTranslateProvider',
        function ($stateProvider, $httpProvider, $urlRouterProvider, $compileProvider, $bahmniTranslateProvider) {
            $urlRouterProvider.otherwise('/create');
            $stateProvider.state('department', {
                abstract: true,
                views: {
                    'departmentContent': {
                        template: '<div class="opd-wrapper appointments-page-wrapper">' +
                        '<div ui-view="content" class="opd-content-wrapper appointments-content-wrapper"></div>' +
                        '</div>'
                    }
                },
                resolve: {
                    initialize: 'initialization'
                }
            }).state('department.create', {
                url: '/create',
                views: {
                    'content': {
                        templateUrl: 'views/departmentsCreate.html',
                        controller: 'DepartmentCreateController'
                    }
                }
            }).state('department.list', {
                url: '/list',
                views: {
                    'content': {
                        templateUrl: 'views/departmentsList.html',
                        controller: 'DepartmentListController'
                    }
                }
            });
            $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
            $bahmniTranslateProvider.init({app: 'depmodule', shouldMerge: true});
        }
    ]).run(['$rootScope', '$templateCache', function ($rootScope, $templateCache) {
        // Disable caching view template partials
        console.log("h");
        $rootScope.$on('$viewContentLoaded', $templateCache.removeAll);
    }]);
