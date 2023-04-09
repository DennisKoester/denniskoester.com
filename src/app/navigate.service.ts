import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigateService {
    @ViewChild('header') header: ElementRef<any>;
    menuCollapsed: boolean = false;

    constructor(private router: Router) {}

    toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
        document.documentElement.classList.toggle('preventScrolling');
        const header = document.getElementById('header') as HTMLDivElement;
        const verticalOffset: number =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (this.menuCollapsed) {
            header.classList.add('shadow');
            console.log('test');
            
        } else if (!this.menuCollapsed && verticalOffset === 0) {
            header.classList.remove('shadow');
        }
    }

    // toggleMenu1() {
    //     const burgerMenu = document.getElementById('burgerMenu');
    //     const burgerMenuFooter = document.getElementById('burger-menu-footer');
    //     const burgerMenuIcon = document.getElementById('ham');
    //     const header = document.getElementById('header') as HTMLDivElement;
    //     const verticalOffset: number =
    //         window.pageYOffset ||
    //         document.documentElement.scrollTop ||
    //         document.body.scrollTop ||
    //         0;

    //     burgerMenu.classList.toggle('menu-hidden');
    //     burgerMenuFooter.classList.toggle('menu-hidden');
    //     burgerMenuIcon.classList.toggle('active');
    //     document.documentElement.classList.toggle('preventScrolling');

    //     if (!burgerMenu.classList.contains('menu-hidden')) {
    //         header.classList.add('shadow');
    //     } else if (
    //         burgerMenu.classList.contains('menu-hidden') &&
    //         verticalOffset === 0
    //     ) {
    //         header.classList.remove('shadow');
    //     }
    // }

    forceNavigate(name: string) {
        this.router.navigate(['/'], { fragment: name });
    }
}
