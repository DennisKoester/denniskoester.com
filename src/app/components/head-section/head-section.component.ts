import { Component } from '@angular/core';
import { NavigateService } from 'src/app/navigate.service';

@Component({
    selector: 'app-head-section',
    templateUrl: './head-section.component.html',
    styleUrls: ['./head-section.component.scss'],
})
export class HeadSectionComponent {
    constructor(public navigate: NavigateService) {}
}
