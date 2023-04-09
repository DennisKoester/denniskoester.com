import { Component } from '@angular/core';
import { Skills } from 'src/app/skills';

@Component({
    selector: 'app-skill-section',
    templateUrl: './skill-section.component.html',
    styleUrls: ['./skill-section.component.scss'],
})
export class SkillSectionComponent {
    skills: Array<any> = Skills;
}
