import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title: string = 'denniskoester.com';
    timer: any;

    ngOnInit(): void {
        /**
         * Starts the AOS library. Animation on scroll.
         */
        AOS.init({
            offset: 200,
            once: true,
        });
    }

    /**
     * Hides scrollbar when not scrolling
     */
    @HostListener('window:scroll', []) onWindowScroll() {
        document.body.classList.remove('hideScrollbar');

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
            document.body.classList.add('hideScrollbar');
        }, 1000);
    }
}
