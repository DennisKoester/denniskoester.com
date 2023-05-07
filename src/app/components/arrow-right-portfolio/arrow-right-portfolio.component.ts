import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
    selector: 'app-arrow-right-portfolio',
    templateUrl: './arrow-right-portfolio.component.html',
    styleUrls: ['./arrow-right-portfolio.component.scss'],
})
export class ArrowRightPortfolioComponent {
    constructor(public darkMode: DarkModeService) {}
}
