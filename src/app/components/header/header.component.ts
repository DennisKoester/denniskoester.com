import {
    Component,
    OnInit,
    HostListener,
    ElementRef,
    ViewChild,
} from '@angular/core';

import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('burgerMenu') burgerMenu: ElementRef;

    ngOnInit() {}

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

    openMobileMenu() {
        // const burgerMenu = this.burgerMenu.nativeElement;
        this.burgerMenu.nativeElement.classList.toggle('d-none');
    }

    // toAboutMe() {
    //     document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
    // }
}
