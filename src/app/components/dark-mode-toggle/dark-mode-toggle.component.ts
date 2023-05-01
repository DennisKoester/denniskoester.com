import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
    selector: 'app-dark-mode-toggle',
    templateUrl: './dark-mode-toggle.component.html',
    styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent {
    constructor(public darkMode: DarkModeService) {}
}
