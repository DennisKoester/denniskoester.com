import { Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
    constructor(public header: HeaderComponent) {}

}
