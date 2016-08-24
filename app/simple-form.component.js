"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var form_model_1 = require("./form-model");
var SimpleFormComponent = (function () {
    //could be used for the future enhacements (custom validators, more advanced rules etc.)
    /*
    activePassControl: boolean;
    isSpecial: boolean;
    buttonSuccess: boolean;
    passLength: boolean;
    numberRegEx: RegExp;
*/
    function SimpleFormComponent() {
        // TO DO: move data related to date to the separate file
        this.listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.listOfDays = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
        this.listOfYears = ["1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
        // initialize form with blank data
        this.model = new form_model_1.FormModel("", "", "", "", "", "", "", false);
        this.submitted = false;
        this.active = true;
        //could be used for the future enhacements (custom validators, more advanced rules etc.)
        /*this.activePassControl = false;
        this.passLength = false;
        this.numberRegEx = /\d/;
        this.isSpecial = true;*/
    }
    SimpleFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(SimpleFormComponent.prototype, "diagnostic", {
        // TO DO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    SimpleFormComponent = __decorate([
        core_1.Component({
            selector: "simple-form",
            templateUrl: "app/simple-form.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleFormComponent);
    return SimpleFormComponent;
}());
exports.SimpleFormComponent = SimpleFormComponent;
//# sourceMappingURL=simple-form.component.js.map