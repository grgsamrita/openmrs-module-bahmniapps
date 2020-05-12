'use strict';

angular.module('department', ['httpErrorInterceptor', 'bahmni.department', 'bahmni.common.routeErrorHandler', 'ngSanitize',
    'bahmni.common.uiHelper', 'bahmni.common.config', 'bahmni.common.orders',
    'ngCookies', , 'bahmni.common.services']);
angular.module('department')
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$compileProvider',
        function ($stateProvider, $httpProvider, $urlRouterProvider, $compileProvider) {
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
            // $bahmniTranslateProvider.init({app: 'department', shouldMerge: true});
        }
    ]).run(['$rootScope', '$templateCache', function ($rootScope, $templateCache) {
        // Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', $templateCache.removeAll);
    }]);
