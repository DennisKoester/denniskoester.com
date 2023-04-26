import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    currentSection: BehaviorSubject<String> = new BehaviorSubject('home');

    sections: string[] = [
        'head-section',
        'about-me',
        'my-skills',
        'portfolio',
        'contact-section',
    ];

    clamp = (value: number) => Math.max(0, value);
    isBetween = (value: number, floor: number, ceil: number) =>
        value >= floor && value <= ceil;

    constructor() {
        document.addEventListener('scroll', () => {
            this.keepTrack();
        });
    }

    /**
     * Checks the scroll location
     */
    keepTrack() {
        const scroll = window.pageYOffset;
        for (let section of this.sections) {
            const element = document.getElementById(section);
            if (element != null) {
                const rect = element.getBoundingClientRect();
                const top = this.clamp(rect.top + scroll - 300);
                const bottom = this.clamp(rect.bottom + scroll - 0);
                if (this.isBetween(scroll, top, bottom)) {
                    this.currentSection.next(section);
                }
            }
        }
    }
}
