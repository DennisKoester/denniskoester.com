import { Component } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from 'src/app/mock-projects';

@Component({
    selector: 'app-portfolio-section',
    templateUrl: './portfolio-section.component.html',
    styleUrls: ['./portfolio-section.component.scss'],
})
export class PortfolioSectionComponent {
    projects: Project[] = PROJECTS;
}
