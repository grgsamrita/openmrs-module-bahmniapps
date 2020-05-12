'use strict';

angular.module('department', ['httpErrorInterceptor', 'bahmni.department', 'bahmni.common.routeErrorHandler', 'ngSanitize',
    'bahmni.common.uiHelper', 'bahmni.common.config', 'bahmni.common.orders', 'bahmni.common.i18n',
    'ngCookies', , 'bahmni.common.services']);
angular.module('department')
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$compileProvider', '$bahmniTranslateProvider',
        function ($stateProvider, $httpProvider, $urlRouterProvider, $compileProvider, $bahmniTranslateProvider) {
            $urlRouterProvider.otherwise('/list');
            $stateProvider.state('department', {
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    initialize: 'initialization'
                }
            }).state('department.list', {
                url: '/list',
                templateUrl: 'views/departmentsList.html',
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
            });
            $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;

            // this points to the i18n folder for the locale_en.json of the department folder
            $bahmniTranslateProvider.init({app: 'departments', shouldMerge: true});
        }
    ]).run(['$rootScope', '$templateCache', function ($rootScope, $templateCache) {
        // Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', $templateCache.removeAll);
    }]);
