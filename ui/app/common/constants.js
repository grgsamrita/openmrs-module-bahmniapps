var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};

Bahmni.Common.Constants = {
    dateFormat: "dd/mm/yyyy",
    dateDisplayFormat: "dd-MMM-yyyy",
    emrapiDiagnosisUrl :"/openmrs/ws/rest/emrapi/diagnosis",
    emrapiConceptUrl :"/openmrs/ws/rest/emrapi/concept",
    encounterConfigurationUrl: "/openmrs/ws/rest/v1/bahmnicore/bahmniencounter/config",
    patientConfigurationUrl:"/openmrs/ws/rest/v1/bahmnicore/patient/config",
    encounterUrl: "/openmrs/ws/rest/emrapi/encounter",
    bahmniEncounterUrl: "/openmrs/ws/rest/v1/bahmnicore/bahmniencounter",
    recentEncounterUrl: "/openmrs/ws/rest/emrapi/encounter/active",
    conceptUrl: "/openmrs/ws/rest/v1/concept",
    visitUrl: "/openmrs/ws/rest/v1/visit",
    endVisitUrl: "/openmrs/ws/rest/v1/bahmnicore/visit/endVisit",
    visitTypeUrl: "/openmrs/ws/rest/v1/visittype",
    visitSummaryUrl: "/openmrs/ws/rest/v1/bahmnicore/visitsummary",
    openmrsUrl: "/openmrs",
    idgenConfigurationURL: "/openmrs/ws/rest/v1/idgen/identifiersources",
    bahmniRESTBaseURL: "/openmrs/ws/rest/v1/bahmnicore",
    dosageFrequencyConceptName : 'Dosage Frequency',
    dosageInstructionConceptName : 'Dosage Instructions',
    consultationNoteConceptName : 'Consultation Note',
    radiologyOrderType : 'Radiology Order',
    radiologyResultConceptName :"Radiology Result",
    investigationEncounterType:"INVESTIGATION",
    labOrderNotesConcept: "Lab Order Notes",
    dispositionConcept : "Disposition",
    dispositionGroupConcept : "Disposition Set",
    dispositionNoteConcept : "Disposition Note",
    ruledOutDiagnosisConceptName : 'Ruled Out Diagnosis',
    ruledOutCertainty : 'RULED OUT',
    emrapiConceptMappingSource :"org.openmrs.module.emrapi",
    includeAllObservations: false,
    openmrsObsUrl :"/openmrs/ws/rest/v1/obs",
    openmrsObsRepresentation :"custom:(uuid,obsDatetime,value:(uuid,name:(uuid,name)))" ,
    compoundObservationConceptName:"XCompoundObservation"
};
