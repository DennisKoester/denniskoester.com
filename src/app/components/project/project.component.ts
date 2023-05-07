import { Component, Input } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from 'src/app/mock-projects';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
    @Input() index: number;
    @Input() name: string;
    @Input() subheadline: string;
    @Input() desc: string;
    @Input() image: string;
    @Input() URL: string;
    @Input() gitHub: string;
    @Input() totalProjects: number;
    project: Project[] = PROJECTS;

    constructor(public darkMode: DarkModeService) {}
}
