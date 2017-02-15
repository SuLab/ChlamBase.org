'use strict';

angular.module('cmod', [
    //external
    'ui.bootstrap',
    'ngResource',
    'ngRoute',
    'ngTable',

    //internal
    'filters',
    'browserPage',
    'mainPage',
    'geneForm',
    'organismForm',
    'resources',
    'geneView',
    'proteinView',
    'organismView',
    'jbrowseView',
    'annotationsView',
    'landingPage',
    'geneOntology',
    'interPro',
    'operonAnnotations',
    'goForm',
    'operonForm',
    'genomicPosition',
    'enzymeView',
    'allgenesDownload',
    'angularUtils.directives.dirPagination',
    'oauthView',
    'genesKeyword',
    'keywordForm',
    'keywordPaginated'
]);