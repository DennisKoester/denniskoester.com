import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
    selector: 'app-arrow-left-contact',
    templateUrl: './arrow-left-contact.component.html',
    styleUrls: ['./arrow-left-contact.component.scss'],
})
export class ArrowLeftContactComponent  {
    constructor(public darkMode: DarkModeService){}
}
