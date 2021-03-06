window.onload = function() {
    var viewModel = {
        formOptions: {        
            colCount: 2,
            formData: employee,
            items: ["ID", {
                    dataField: "FirstName",
                    editorOptions: {
                        disabled: true
                    }
                }, {
                    dataField: "LastName",
                    editorOptions: {
                        disabled: true
                    }
                }, {
                    dataField: "Position",
                    editorType: "dxSelectBox",
                    editorOptions: { 
                        items: positions,
                        value: ""
                    },
                    validationRules: [{
                        type: "required",
                        message: "Position is required"
                    }]
                }, {
                    dataField: "BirthDate",
                    editorType: "dxDateBox",
                    editorOptions: {
                        disabled: true
                    }
                }, {
                    dataField: "HireDate",
                    editorType: "dxDateBox",
                    editorOptions: { 
                        value: null
                    },
                    validationRules: [{
                        type: "required",
                        message: "Hire date is required"
                    }]
                }, {
                    colSpan: 2,
                    dataField: "Notes",
                    editorType: "dxTextArea",
                    editorOptions: {
                        height: 90
                    }
                }, "Address", {
                    dataField: "Phone",
                    editorOptions: {
                        mask: "+1 (X00) 000-0000",
                        maskRules: {"X": /[02-9]/}
                    }
                }
            ]
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("form-container"));
    
    $("#form").dxForm("instance").validate();
};