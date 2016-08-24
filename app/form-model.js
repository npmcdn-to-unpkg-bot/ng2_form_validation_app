"use strict";
var FormModel = (function () {
    function FormModel(firstName, lastName, email, password, monthOfBirth, dayOfBirth, yearOfBirth, agreement) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.monthOfBirth = monthOfBirth;
        this.dayOfBirth = dayOfBirth;
        this.yearOfBirth = yearOfBirth;
        this.agreement = agreement;
    }
    return FormModel;
}());
exports.FormModel = FormModel;
//# sourceMappingURL=form-model.js.map