import { Component, Injectable } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
    constructor(public header: HeaderComponent) {}

    // hidden: boolean = false;

    // menuToggle(){
    //     this.hidden = !this.hidden;
    // }
}
