'use script';

var Bahmni = Bahmni || {};
Bahmni.Department = Bahmni.Department || {};

Bahmni.Department.Constants = (function () {
    var hostURL = Bahmni.Common.Constants.hostURL + Bahmni.Common.Constants.RESTWS_V1;
    return {
        createDepartmentUrl: hostURL + '/depmodule/departments',
        listDepartmentUrl: hostURL + '/depmodule/departments',
        updateDepartmentUrl: hostURL + '/depmodule/departments',
        getSpecificDepartmentUrl: hostURL + '/depmodule/departments/{{departmentId}}',
        deleteDepartmentUrl: hostURL + '/depmodule/departments/{{departmentId}}',
    };
})();