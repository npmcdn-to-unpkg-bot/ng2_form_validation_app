import { Component } from "@angular/core";

import { FormModel } from "./hero";

@Component({
    selector: "simple-form",
    templateUrl: "app/simple-form.component.html"
})
export class SimpleFormComponent {
    // TO DO: move data related to date to the separate file (each variable should be defined as const)
    listOfMonths: string[];
    listOfDays: string[];
    listOfYears: string[];
    model: FormModel;
    submitted: boolean;
    active: boolean;
    //main additions
    activePassControl: boolean;
    isSpecial: boolean;
    buttonSuccess: boolean;
    passLength: boolean;
    numberRegEx: RegExp;
    // passValue: string;

    constructor() {
        // TO DO: move data related to date to the separate file
        this.listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.listOfDays = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
        this.listOfYears = ["1930","1931","1932","1933","1934","1935","1936","1937","1938","1939","1940","1941","1942","1943","1944","1945","1946","1947","1948","1949","1950","1951","1952","1953","1954","1955","1956","1957","1958","1959","1960","1961","1962","1963","1964","1965","1966","1967","1968","1969","1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"];

        // initialize form with blank data
        this.model = new FormModel("", "", "", "", "", "", "");
        this.submitted = false;
        this.active = true;
        //main additions
        this.activePassControl = false;
        this.passLength = false;
        this.numberRegEx = /\d/;
        this.isSpecial = true;
    }

/*    onTouchPassControl() {
        this.activePassControl = true;
        console.log(this.model.alterEgo);
        if ((this.numberRegEx).test(this.model.alterEgo)) {
            console.log("OKI DOKI");
        }
    }*/

    onSubmit() { this.submitted = true; }

/*    newHero() {
        this.model = new Hero(42, "", "");
        this.active = false;
        // this.active = true;
        setTimeout(() => this.active = true, 0);
    }*/

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
