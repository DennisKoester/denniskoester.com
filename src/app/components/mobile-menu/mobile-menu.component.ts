import { Component } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
    constructor(public navigate: NavigateService) {}
}
