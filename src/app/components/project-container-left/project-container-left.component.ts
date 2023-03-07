import { Component } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from 'src/app/mock-projects';

@Component({
    selector: 'app-project-container-left',
    templateUrl: './project-container-left.component.html',
    styleUrls: ['./project-container-left.component.scss'],
})
export class ProjectContainerLeftComponent {
    projects: Project[] = PROJECTS;
}
