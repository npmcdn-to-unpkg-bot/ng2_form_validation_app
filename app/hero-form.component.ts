import { Component } from "@angular/core";

import { Hero } from "./hero";

@Component({
    selector: "hero-form",
    templateUrl: "app/hero-form.component.html"
})
export class HeroFormComponent {
    powers: string[];
    model: Hero;
    submitted: boolean;
    active: boolean;

    constructor() {
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        this.model = new Hero(18, 'Dr IQ', this.powers[1], 'Chuck Overstreet');
        this.submitted = false;
        this.active = true;
    }

    onSubmit() { this.submitted = true; }

    newHero() {
        this.model = new Hero(42, "", "");
        this.active = false;
        // this.active = true;
        setTimeout(() => this.active = true, 0);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
