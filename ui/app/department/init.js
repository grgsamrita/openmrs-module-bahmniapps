'use strict';

var Bahmni = Bahmni || {};
Bahmni.Depmodule = Bahmni.Depmodule || {};

angular.module('bahmni.depmodule', ['bahmni.common.uiHelper', 'bahmni.common.domain', 'bahmni.common.util', 'bahmni.common.config',
    'bahmni.common.orders', 'bahmni.common.appFramework', 'bahmni.common.logging', 'ui.router', 'angularFileUpload']);
