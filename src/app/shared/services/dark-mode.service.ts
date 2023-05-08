import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    currentState: boolean;
    localState;
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

    /**
     * Pushes the state to the localstorage
     */
    pushStateLocal() {
        this.localState = localStorage.setItem(
            'themeMode',
            JSON.stringify(this.currentState)
        );
        console.log('push', this.localState);
    }

    /**
     * Get's the state from the localstorage
     */
    getStateLocal() {
        this.localState = JSON.parse(localStorage.getItem('themeMode'));
        console.log('get', this.localState);
    }
}
