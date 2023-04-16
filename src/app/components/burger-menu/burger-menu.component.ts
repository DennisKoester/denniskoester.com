import { Component } from '@angular/core';
import { NavigateService } from 'src/app/navigate.service';

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
    constructor(public navigate: NavigateService) {}
}
