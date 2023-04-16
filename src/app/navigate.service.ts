import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigateService {
    menuCollapsed: boolean = true;

    constructor(private router: Router) {}
    /**
     * Toggles burger menu and handles shadow for header
     */
    toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
        this.toggleShadow();
        document.documentElement.classList.toggle('preventScrolling');
    }

    toggleShadow() {
        const header = document.getElementById('header') as HTMLDivElement;
        const verticalOffset: number =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (!this.menuCollapsed) {
            header.classList.add('shadow');
        } else if (this.menuCollapsed && verticalOffset === 0) {
            header.classList.remove('shadow');
        }
    }

    /**
     * Closes the burger menu
     */
    closeMenu() {
        this.menuCollapsed = true;
    }

    /**
     * Forces the navigation to a fragment
     */
    forceNavigate(name: string) {
        this.router.navigate(['/'], { fragment: name });
    }

    /**
     * Refreshes the current page
     */
    refreshPage() {
        window.location.reload();
    }
}
