import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
    selector: 'app-arrow-left-skills',
    templateUrl: './arrow-left-skills.component.html',
    styleUrls: ['./arrow-left-skills.component.scss'],
})
export class ArrowLeftSkillsComponent {
    constructor(public darkMode: DarkModeService) {}
}
