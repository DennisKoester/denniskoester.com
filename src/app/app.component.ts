import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

        this.checkDevice();
        this.hideScrollbar();
    }

    /**
     * Checks the current used device.
     */
    checkDevice() {
        this.isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
        );
        this.isChrome = /Chrome/.test(navigator.userAgent);
    }

    /**
     * Hides the scrollbar for chrome.
     */
    hideScrollbar() {
        if (this.isChrome) {
            document.body.classList.add('hideScrollbar');
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
