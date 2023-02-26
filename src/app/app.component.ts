import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'denniskoester.com';

    timer;

    @HostListener('window:scroll', []) onWindowScroll() {
        document.body.classList.remove('hideScrollbar');
        console.log('visiable');

        // this.timer && clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            document.body.classList.add('hideScrollbar');
            console.log('hidden');
        }, 1000);
    }
}
