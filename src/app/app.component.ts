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
