import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'denniskoester.com';

    timer: any;

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


    // ngOnInit(): void {
    //     function hasTouch() {
    //         return (
    //             'ontouchstart' in document.documentElement ||
    //             navigator.maxTouchPoints > 0
    //         );
    //         //  || navigator.msMaxTouchPoints > 0;
    //     }

    //     if (hasTouch()) {
    //         // remove all the :hover stylesheets
    //         try {
    //             // prevent exception on browsers not supporting DOM styleSheets properly
    //             for (var si in document.styleSheets) {
    //                 var styleSheet = document.styleSheets[si];
    //                 if (!styleSheet.rules) continue;

    //                 for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
    //                     if (!styleSheet.rules[ri].selectorText) continue;

    //                     if (styleSheet.rules[ri].selectorText.match(':hover')) {
    //                         styleSheet.deleteRule(ri);
    //                     }
    //                 }
    //             }
    //         } catch (ex) {}
    //     }
    // }

