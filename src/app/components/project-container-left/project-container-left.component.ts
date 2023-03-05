import { Component } from '@angular/core';

@Component({
    selector: 'app-project-container-left',
    templateUrl: './project-container-left.component.html',
    styleUrls: ['./project-container-left.component.scss'],
})
export class ProjectContainerLeftComponent {
    projects = [
        {
            name: 'Join',
            subheadline: 'Angular | Typescript | HTML | CSS | Firebase',
            desc: ' Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            image: 'join-project.png',
        },

        {
            name: 'Pokedex',
            subheadline: 'Javascript | HTML | CSS | Rest API',
            desc: ' Pokedex using Rest API',
            image: 'join-project.png',
        },
    ];
}
