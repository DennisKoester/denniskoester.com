import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    currentState: boolean;
    darkModeState: BehaviorSubject<boolean> = new BehaviorSubject(
        this.detectDarkMode()
    );

    constructor() {
        this.darkModeState.subscribe((state: boolean) => {
            this.currentState = state;
            this.setsTheme();
        });
    }

    /**
     * Toggles the state of the dark mode
     */
    toogleDarkMode(): void {
        this.darkModeState.next(!this.currentState);
        this.pushStateLocal();
    }

    /**
     * Sets the dark or light mode
     */
    setsTheme() {
        document.documentElement.setAttribute(
            'data-theme',
            this.currentState ? 'dark' : 'light'
        );
    }

    /**
     * Checks if dark mode theme is enabled on users system
     * @returns Boolean
     */
    detectDarkMode(): boolean {
        const mediaMatch = window.matchMedia(
            '(prefers-color-scheme: dark'
        ).matches;
        return typeof mediaMatch === 'boolean' ? mediaMatch : false;
    }

    pushStateLocal() {
        localStorage.setItem('themeMode', JSON.stringify(this.currentState));
        console.log('push', this.currentState);
    }

    getStateLocal() {
        let localState = JSON.parse(localStorage.getItem('themeMode'));
        this.currentState = localState;
        console.log('get', this.currentState);
        return this.currentState;
    }
}
