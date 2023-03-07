import { Component } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from 'src/app/mock-projects';

@Component({
    selector: 'app-project-container-right',
    templateUrl: './project-container-right.component.html',
    styleUrls: ['./project-container-right.component.scss'],
})
export class ProjectContainerRightComponent {
    projects: Project[] = PROJECTS;
}
