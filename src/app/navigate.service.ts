import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class NavigateService {
    menuCollapsed: boolean = true;

    constructor(private router: Router, private location: Location) {}
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
        this.handleScrollSmooth();
        this.router.navigate(['/'], { fragment: name });
    }

    /**
     * Leeds back to main page and refreshes it
     */
    redirectToMainPage() {
        this.location.go('');
        window.location.reload();
    }

    /**
     * Handels the scroll smooth to
     */
    handleScrollSmooth() {
        document.documentElement.style.scrollBehavior = 'smooth';
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'auto';
        }, 1000);
    }
}
