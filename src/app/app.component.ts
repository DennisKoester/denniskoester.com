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
    isSafari: boolean = false;
    isChrome: boolean = false;

    ngOnInit(): void {
        /**
         * Starts the AOS library. Animation on scroll.
         */
        AOS.init({
            offset: 200,
            once: true,
        });

        this.isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
        );
        this.isChrome =
            /Chrome/.test(navigator.userAgent) &&
            /Google Inc/.test(navigator.vendor);
        // console.log(this.isSafari);
        // console.log(this.isChrome);

        this.hideScrollbar();
    }

    /**
     * Hides the scrollbar for chrome.
     */
    hideScrollbar() {
        if (this.isChrome) {
            document.body.classList.add('hideScrollbar');
            console.log(this.isChrome);
        }
    }

    /**
     * Hides scrollbar when not scrolling. Safari not supported.
     */
    @HostListener('window:scroll', []) onWindowScroll() {
        document.body.classList.remove('hideScrollbar');

        if (!this.isSafari) {
            if (this.timer) {
                clearTimeout(this.timer);
            }

            this.timer = setTimeout(() => {
                document.body.classList.add('hideScrollbar');
            }, 1000);
        }
    }
}
