
'use strict';

angular.module('bahmni.depmodule', ['httpErrorInterceptor', 'bahmni.admin', 'bahmni.common.routeErrorHandler', 'ngSanitize',
    'bahmni.common.uiHelper', 'bahmni.common.config', 'bahmni.common.orders', 'bahmni.common.i18n', 'pascalprecht.translate',
    'ngCookies', 'angularFileUpload', 'bahmni.common.services']);
angular.module('bahmni.depmodule')
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$compileProvider', '$bahmniTranslateProvider',
        function ($stateProvider, $httpProvider, $urlRouterProvider, $compileProvider, $bahmniTranslateProvider) {
            $urlRouterProvider.otherwise('/dashboard');
            $stateProvider.state('departments', {
                abstract: true,
                // template: '<ui-view/>',
                views: {
                    // 'additional-header': {
                    //     templateUrl: 'views/appointmentsHeader.html',
                    //     controller: 'AppointmentsHeaderController'
                    // },
                    'departmentContent': {
                        template: '<div class="opd-wrapper appointments-page-wrapper">' +
                        '<div ui-view="content" class="opd-content-wrapper appointments-content-wrapper"></div>' +
                        '</div>'
                    }
                },
                resolve: {
                    initialize: 'initialization'
                }
            }).state('departments.create', {
                url: '/create',
                // templateUrl: 'views/departmentsCreate.html',
                // controller: 'DepartmentCreateController',
                views: {
                    'content': {
                        templateUrl: 'views/departmentsCreate.html',
                        controller: 'DepartmentCreateController'
                    } 
                },
            }).state('departments.list', {
                url: '/list',
                // templateUrl: 'views/departmentsList.html',
                // controller: 'DepartmentListController',
                views: {
                    'content': {
                        templateUrl: 'views/departmentsList.html',
                        controller: 'DepartmentListController'
                    } 
                },
            });
            $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
            $bahmniTranslateProvider.init({app: 'depmodule', shouldMerge: true});
        }
    ]).run(['$rootScope', '$templateCache', function ($rootScope, $templateCache) {
        // Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', $templateCache.removeAll);
    }]);
