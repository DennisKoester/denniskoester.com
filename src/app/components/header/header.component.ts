import { Component, HostListener } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    section: any;

    constructor(
        public navigate: NavigateService,
        private scrollService: ScrollService
    ) {
        this.setsSection();
    }

    /**
     * Handles the visibility of the header shadow
     */
    @HostListener('window:scroll', []) onWindowScroll() {
        const header = document.getElementById('header') as HTMLDivElement;
        const verticalOffset: number =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        if (verticalOffset > 0) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
    }

    /**
     * Sets the current section which is in view
     */
    setsSection() {
        this.scrollService.currentSection.subscribe((res) => {
            console.log('current section: ', res);
            this.section = res;
        });
    }
}
