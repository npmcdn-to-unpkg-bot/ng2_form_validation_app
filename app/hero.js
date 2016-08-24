"use strict";
var FormModel = (function () {
    function FormModel(firstName, lastName, email, password, monthOfBirth, dayOfBirth, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.monthOfBirth = monthOfBirth;
        this.dayOfBirth = dayOfBirth;
        this.yearOfBirth = yearOfBirth;
    }
    return FormModel;
}());
exports.FormModel = FormModel;
//# sourceMappingURL=hero.js.map