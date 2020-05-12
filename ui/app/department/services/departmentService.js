'use strict';

angular.module('bahmni.department')
    .service('departmentService', ['$http', 'appService',
        function ($http, appService) {
            this.save = function (department) {
                return $http.post(Bahmni.Department.Constants.createDepartmentUrl, department, {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };
            // this.search = function (appointment) {
            //     return $http.post(Bahmni.Appointments.Constants.searchAppointmentUrl, appointment, {
            //         withCredentials: true,
            //         headers: {"Accept": "application/json", "Content-Type": "application/json"}
            //     });
            // };

            this.getAllDepartments = function (params) {
                return $http.get(Bahmni.Department.Constants.listDepartmentUrl, {
                    params: params,
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            // this.getAppointmentByUuid = function (appointmentUuid) {
            //     var params = {uuid: appointmentUuid};
            //     return $http.get(Bahmni.Appointments.Constants.getAppointmentByUuid, {
            //         params: params,
            //         withCredentials: true,
            //         headers: {"Accept": "application/json", "Content-Type": "application/json"}
            //     });
            // };

            this.getDepartmentById = function (depId) {
                var getDepUrl = appService.getAppDescriptor().formatUrl(Bahmni.Department.Constants.getSpecificDepartmentUrl, {departmentId: depId});
                return $http.get(getDepUrl, {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            this.update = function (department) {
                return $http.put(Bahmni.Department.Constants.updateDepartmentUrl, department, {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            this.delete = function (departmentId) {
                var deleteUrl = appService.getAppDescriptor().formatUrl(Bahmni.Department.Constants.deleteDepartmentUrl, {departmentId: departmentId});
                return $http.delete(deleteUrl, {
                    withCredentials: true,
                    headers: {"Accept": "application/json", "Content-Type": "application/json"}
                });
            };

            // this.changeStatus = function (appointmentUuid, toStatus, onDate) {
            //     var params = {toStatus: toStatus, onDate: onDate};
            //     var changeStatusUrl = appService.getAppDescriptor().formatUrl(Bahmni.Appointments.Constants.changeAppointmentStatusUrl, {appointmentUuid: appointmentUuid});
            //     return $http.post(changeStatusUrl, params, {
            //         withCredentials: true,
            //         headers: {"Accept": "application/json", "Content-Type": "application/json"}
            //     });
            // };

            // this.undoCheckIn = function (appointmentUuid) {
            //     return $http.post(Bahmni.Appointments.Constants.undoCheckInUrl + appointmentUuid, {
            //         withCredentials: true,
            //         headers: {"Accept": "application/json", "Content-Type": "application/json"}
            //     });
            // };
        }]);
