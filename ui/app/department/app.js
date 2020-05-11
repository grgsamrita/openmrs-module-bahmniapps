'use strict';

angular
    .module('bahmni.depmodule')
    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', '$bahmniTranslateProvider', '$compileProvider',
        function ($urlRouterProvider, $stateProvider, $httpProvider, $bahmniTranslateProvider, $compileProvider) {
            $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
            $urlRouterProvider.otherwise('/home/manage/summary');
            $urlRouterProvider.when('/home/manage', '/home/manage/summary');
        // @if DEBUG='production'
            $compileProvider.debugInfoEnabled(false);
        // @endif

        // @if DEBUG='development'
            $compileProvider.debugInfoEnabled(true);
        // @endif
            $stateProvider
            .state('departments', {
                url: '/departments',
                abstract: true,
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
                data: {
                    backLinks: []
                },
                resolve: {
                    initializeConfig: function (initialization, $stateParams) {
                        return initialization($stateParams.appName);
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
            }).state('departments.create', {
                url: '/create',
                views: {
                    'content': {
                        templateUrl: 'views/departmentsCreate.html',
                        controller: 'DepartmentCreateController'
                    }
                }
            }).state('departments.edit', {
                url: '/:uuid',
                views: {
                    'content@admin': {
                        templateUrl: 'views/departmentsCreate.html',
                        controller: 'DepartmentCreateController'
                    }
                }
            });

            $bahmniTranslateProvider.init({app: 'appointments', shouldMerge: true});
        }]);
