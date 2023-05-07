import { Component } from '@angular/core';
import { Skills } from 'src/app/mock-skills';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
    selector: 'app-skill-section',
    templateUrl: './skill-section.component.html',
    styleUrls: ['./skill-section.component.scss'],
})
export class SkillSectionComponent {
    constructor(public darkMode: DarkModeService) {}
    skills: Array<any> = Skills;
}
