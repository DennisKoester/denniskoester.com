import {
    Component,
    OnInit,
    HostListener,
    ElementRef,
    ViewChild,
    Renderer2,
} from '@angular/core';

import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('burgerMenu') burgerMenu: ElementRef<HTMLInputElement>;

    constructor(private renderer: Renderer2) {}

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
        const burgerMenu = document.getElementById('burgerMenu');
        burgerMenu.classList.toggle('d-none');
        // const burgerMenu = burgerMenu<HTMLDivElement>(null);
        // this.burgerMenu.nativeElement.classList.toggle('d-none');
    }

    // toAboutMe() {
    //     document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
    // }
}
