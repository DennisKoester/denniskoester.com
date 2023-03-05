import { Component, OnInit, HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router) {}

    // collapsed: boolean = true;

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
        console.log(verticalOffset);
    }

    toggleMenu() {
        const burgerMenu = document.getElementById('burgerMenu');
        const burgerMenuFooter = document.getElementById('burger-menu-footer');
        const burgerMenuIcon = document.getElementById('ham');
        const header = document.getElementById('header') as HTMLDivElement;
        const verticalOffset: number =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        burgerMenu.classList.toggle('menu-hidden');
        burgerMenuFooter.classList.toggle('menu-hidden');
        burgerMenuIcon.classList.toggle('active');
        document.documentElement.classList.toggle('preventScrolling');

        if (!burgerMenu.classList.contains('menu-hidden')) {
            header.classList.add('shadow');
        } else if (
            burgerMenu.classList.contains('menu-hidden') &&
            verticalOffset === 0
        ) {
            header.classList.remove('shadow');
        }
    }

    // toggleMenu() {
    //     this.collapsed = !this.collapsed;
    //     console.log(this.collapsed);
    // }

    forceNavigate(name: string) {
        this.router.navigate(['/'], { fragment: name });
    }

    // scrollToElement(element: any): void {
    //     element.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'start',
    //         inline: 'nearest',
    //     });
    //     console.log(element);
    // }

    // ScrollIntoView(elem: string) {
    //     console.log(elem);
    //     document
    //         .querySelector(elem)
    //         .scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
}
