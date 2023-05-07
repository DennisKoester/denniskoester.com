import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    constructor() {
        this.darkModeState.subscribe((state: boolean) => {
            this.currentState = state;
            document.documentElement.setAttribute(
                'data-theme',
                this.currentState ? 'dark' : 'light'
            );
        });
    }

    private darkModeState: BehaviorSubject<boolean> = new BehaviorSubject(
        this.detectDarkMode()
    );

    public currentState: boolean;

    public toogleDarkMode(): void {
        this.darkModeState.next(!this.currentState);
    }

    private detectDarkMode(): boolean {
        const mediaMatch = window.matchMedia(
            '(prefers-color-scheme: dark'
        ).matches;
        return typeof mediaMatch === 'boolean' ? mediaMatch : false;
    }
}
