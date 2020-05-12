'use strict';

angular.module('department', ['httpErrorInterceptor', 'bahmni.department', 'bahmni.common.routeErrorHandler', 'ngSanitize',
    'bahmni.common.uiHelper', 'bahmni.common.orders', 'bahmni.common.i18n', 'bahmni.common.services']);
angular.module('department')
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$compileProvider', '$bahmniTranslateProvider',
        function ($stateProvider, $httpProvider, $urlRouterProvider, $compileProvider, $bahmniTranslateProvider) {
            $urlRouterProvider.otherwise('/list/view');
            $urlRouterProvider.when('/list', '/list/view');
            $stateProvider.state('department', {
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    initialize: 'initialization'
                }
            }).state('department.list', {
                url: '/list',
                templateUrl: 'views/manage.html',
                controller: 'DepartmentListController',
                data: {
                    backLinks: [{label: "Home", accessKey: "h", url: "../home/", icon: "fa-home"}],
                    extensionPointId: 'org.bahmni.department'
                }
            }).state('department.create', {
                url: '/create',
                templateUrl: 'views/departmentsCreate.html',
                controller: 'DepartmentCreateController',
                data: {
                    backLinks: [{label: "Home", state: "department.list", icon: "fa-home"}]
                }
            }).state('department.list.view', {
                url: '/view',
                views: {
                    'content@viewDepartments': {
                        templateUrl: 'views/departmentsList.html',
                        controller: 'DepartmentListViewController'
                    }
                }
                // resolve: {
                //     appointmentsContext: function (appointmentsInitialization) {
                //         return appointmentsInitialization();
                //     }
                // }
            }).state('department.edit', {
                url: '/edit/:uuid',
                templateUrl: 'views/departmentsCreate.html',
                controller: 'DepartmentEditController',
                data: {
                    backLinks: [{label: "Home", state: "department.list", icon: "fa-home"}]
                }
            });
            $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;

            // this points to the i18n folder for the locale_en.json of the department folder
            // here 'department' is the name of the folder that you kept inside i18n.
            // shouldMerge merges the locale_en.json files from the local i18n department directory and from the custom i18n directory of the default-config
            $bahmniTranslateProvider.init({app: 'department', shouldMerge: true});
        }
    ]).run(['$rootScope', '$templateCache', function ($rootScope, $templateCache) {
        // Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', $templateCache.removeAll);
    }]);
