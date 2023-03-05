import { Component } from '@angular/core';

@Component({
    selector: 'app-burger-menu',
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
    toggleMenu() {
        const burgerMenu = document.getElementById('burgerMenu');
        const burgerMenuFooter = document.getElementById('burger-menu-footer');
        const burgerMenuIcon = document.getElementById('ham');
        burgerMenuIcon.classList.remove('active');
        burgerMenu.classList.toggle('d-none');
        burgerMenuFooter.classList.toggle('d-none');
        document.documentElement.classList.toggle('preventScrolling');
    }
}
