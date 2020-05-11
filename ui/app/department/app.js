'use strict';

angular
    .module('bahmni.department')
    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', '$bahmniTranslateProvider', '$compileProvider',
        function ($urlRouterProvider, $stateProvider, $httpProvider, $bahmniTranslateProvider, $compileProvider) {
            $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
            $urlRouterProvider.otherwise('/list');
        // @if DEBUG='production'
            $compileProvider.debugInfoEnabled(false);
        // @endif

        // @if DEBUG='development'
            $compileProvider.debugInfoEnabled(true);
        // @endif
            $stateProvider
            .state('department', {
                url: '/department',
                abstract: true,
                views: {
                    // 'additional-header': {
                    //     templateUrl: 'views/appointmentsHeader.html',
                    //     controller: 'AppointmentsHeaderController'
                    // },
                    'departmentContent': {
                        template: '<div class="opd-wrapper department-page-wrapper">' +
                        '<div ui-view="content" class="opd-content-wrapper department-content-wrapper"></div>' +
                        '</div>'
                    }
                },
                data: {
                    backLinks: []
                },
                resolve: {
                    initializeConfig: function (initialization, $stateParams) {
                        return initialization($stateParams.appName);
                    }
                }
            }).state('department.create', {
                url: '/create',
                views: {
                    'content': {
                        templateUrl: 'views/departmentsCeate.html',
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

            $bahmniTranslateProvider.init({app: 'department', shouldMerge: true});
        }]);
