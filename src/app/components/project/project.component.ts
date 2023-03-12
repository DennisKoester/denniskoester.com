import { Component, Input } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from 'src/app/mock-projects';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
    @Input () index;
    @Input () name;
    @Input () subheadline;
    @Input () desc;
    @Input () image;
    project: Project[] = PROJECTS;
}
