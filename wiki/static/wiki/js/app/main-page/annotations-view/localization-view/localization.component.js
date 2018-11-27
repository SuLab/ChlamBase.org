angular
    .module('localizationView')
    .component('localizationView', {
        templateUrl: '/static/build/js/angular_templates/localization-view.min.html',
        bindings: {
            components: '<',
            gene: '<'
        },
        controller: function ($location) {
            'use strict';
            var ctrl = this;
            ctrl.$onChanges = function () {

            	if (ctrl.components) {
	            	angular.forEach(ctrl.components, function(value) {
	            		value.determinationLabel.values = value.determinationLabel.value.split(";");
	            	});
            	}
            };

            ctrl.checkAuthorization = function(modal) {
                if (!$location.path().includes("authorized")) {
                    // alert('Please authorize ChlamBase to edit Wikidata on your behalf!');
                    $("#errorLocalizations").modal('show');
                } else {
                    $("#" + modal).modal('show');
                }
            };

            ctrl.evidenceCodes = {
                    "IEA": "Inferred From Electronic Annotation",
                    "EXP": "Inferred from Experiment",
                    "IDA": "Inferred from Direct Assay",
                    "IPI": "Inferred From Physical Interaction",
                    "IMP": "Inferred from Mutant Phenotype",
                    "IGI": "Inferred from Genetic Interaction",
                    "IEP": "Inferred from Expression Pattern",
                    "ISS": "Inferred From Sequence or structural Similarity",
                    "ISO": "Inferred from Sequence Orthology",
                    "ISA": "Inferred from Sequence Alignment",
                    "ISM": "Inferred From Sequence Model",
                    "IGC": "Inferred from Genomic Context",
                    "IBA": "Inferred from Biological aspect of Ancestor",
                    "IBD": "Inferred from Biological aspect of Descendant",
                    "IKR": "Inferred From Key Residues",
                    "IRD": "Inferred from Rapid Divergence",
                    "RCA": "Inferred from Reviewed Computational Analysis",
                    "TAS": "Traceable Author Statement",
                    "NAS": "Non traceable author statement",
                    "IC": "Inferred by Curator",
                    "ND": "No biological Data available"
            };
        }
    });
