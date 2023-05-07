import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DarkModeService {
    constructor() {
        this.darkModeState.subscribe((state: boolean) => {
            this.currentState = state;
            if (state) {
                this.setDarkMode();
            } else {
                this.setLightMode();
            }
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

    private setLightMode(): void {
        // document.body.classList.add('lightMode');
        // document.body.classList.remove('darkMode');
        document.documentElement.setAttribute(
            'data-theme',
            this.currentState ? 'dark' : 'light'
        );
        
    }

    private setDarkMode(): void {
        // document.body.classList.add('darkMode');
        // document.body.classList.remove('lightMode');
        document.documentElement.setAttribute(
            'data-theme',
            this.currentState ? 'dark' : 'light'
        );
    }
}
