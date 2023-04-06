import { Component, Input } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from 'src/app/mock-projects';

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
    @Input() routerLink: string;
    @Input() totalProjects: number;
    project: Project[] = PROJECTS;
}
