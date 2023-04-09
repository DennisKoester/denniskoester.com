import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    currentYear: number;

    constructor(public router: Router) {}

    ngOnInit() {
        this.generateDate();
        console.log(this.router.url);
    }

    generateDate() {
        this.currentYear = Date.now();
    }

    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}
