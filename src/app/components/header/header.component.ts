import { Component, OnInit, HostListener, Injectable } from '@angular/core';
import { NavigateService } from 'src/app/navigate.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(public navigate: NavigateService) {}

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
        // console.log(verticalOffset);
    }

    // toggleMenu() {
    //     this.collapsed = !this.collapsed;
    //     console.log(this.collapsed);
    // }

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
