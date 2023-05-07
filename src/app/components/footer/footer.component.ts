import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    currentYear: number;

    constructor(public router: Router, public darkMode: DarkModeService) {}

    ngOnInit() {
        this.generateDate();
    }

    /**
     * Generates the current date
     */
    generateDate() {
        this.currentYear = Date.now();
    }

    /**
     * Scrolls to the top of the page
     */
    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}
