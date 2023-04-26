import { Component } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
    constructor(public navigate: NavigateService) {}
}
