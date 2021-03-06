window.onload = function() {
    var viewModel = function(){
        var that = this,
            maxDate = new Date();
            
        maxDate.setYear(maxDate.getYear() - 21);
        
        // define validation rules
        that.loginValidationRules = {
            validationRules: [{
                type: "required",
                message: "Login is required"
            }]
        };
    
        that.passwordValidationRules = {
            validationRules: [{
                type: "required",
                message: "Password is required"
            }]
        };
    
        that.confirmPasswordValidationRules = {
            validationRules: [{
                type: "compare",
                comparisonTarget: function () {
                    var password = $("#password-validation").dxTextBox("instance");
                    if (password) {
                        return password.option("value");
                    }
                },
                message: "'Password' and 'Confirm Password' do not match."
            },
            {
                type: "required",
                message: "Confirm Password is required"
            }]
        };
    
        that.nameValidationRules = {
            validationRules: [{
                type: "required",
                message: "Name is required"
            }, {
                type: "pattern",
                pattern: /^[^0-9]+$/,
                message: "Do not use digits in the Name."
            }, {
                type: "stringLength",
                min: 2,
                message: "Name must have at least 2 symbols"
            }]
        };
        
        that.dobValidationRules = {
            validationRules: [{
                type: "required",
                message: "Date of birth is required"
            }, {
                type: "range", 
                max: maxDate, 
                message: "You must be at least 21 years old"
            }]
        };
        
        that.countryValidationRules = {
            validationRules: [{
                type: "required",
                message: "Country is required"
            }]
        };
        
        that.cityValidationRules = {
            validationRules: [{
                type: "required",
                message: "City is required"
            }, {
                type: "pattern",
                pattern: "^[^0-9]+$",
                message: "Do not use digits in the City name."
            }, {
                type: "stringLength",
                min: 2,
                message: "City must have at least 2 symbols"
            }]
        };
    
        that.addressValidationRules = {
            validationRules: [{
                type: "required",
                message: "Address is required"
            }]
        };
        
        that.phoneValidationRules = {
            validationRules: [{
                type: "pattern",
                pattern: /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/,
                message: "The phone must have a correct USA phone format"
            }]
        };
        
        that.phoneTextBoxOptions = {
            mask: "+1 (X00) 000-0000",
            maskRules: {
                X: /[02-9]/
            },
            maskInvalidMessage: "The phone must have a correct USA phone format",
            useMaskedValue: true
        };
        
        that.checkValidationRules = {
            validationRules: [{
                type: "compare",
                comparisonTarget: function(){ return true; },
                message: "You must agree to the Terms and Conditions"
            }]
        };
    
        that.dateboxOptions = {
            invalidDateMessage: "The date must have the following format: MM/dd/yyyy"
        };
        
        that.onFormSubmit = function() {
            DevExpress.ui.notify({
                message: "You have submitted the form",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "success", 3000);
            
            return false;
        };    
        
        that.submitButtonOptions = {
            text: '确定',
            type: 'success',        
            useSubmitBehavior: true
        };
    
        that.countries = countries;
    };
    ko.applyBindings(new viewModel(), document.getElementById("validation-demo"));
    
    
};