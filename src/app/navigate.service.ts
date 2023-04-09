import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigateService {
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

    forceNavigate(name: string) {
        this.router.navigate(['/'], { fragment: name });
    }
}
