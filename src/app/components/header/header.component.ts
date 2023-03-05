import {
    Component,
    OnInit,
    HostListener,
    ElementRef,
    ViewChild,
    Injectable,
} from '@angular/core';
import { Router } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Injectable({ providedIn: 'root' })
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    @HostListener('body:scroll', []) onWindowScroll() {
        const header = document.getElementById('header') as HTMLDivElement;
        const verticalOffset: number =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        if (verticalOffset > 0) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
        console.log(verticalOffset);
    }

    toggleMenu() {
        const burgerMenu = document.getElementById('burgerMenu');
        const burgerMenuFooter = document.getElementById('burger-menu-footer');
        const burgerMenuIcon = document.getElementById('ham');

        burgerMenu.classList.toggle('menu-hidden');
        burgerMenuFooter.classList.toggle('menu-hidden');
        document.documentElement.classList.toggle('preventScrolling');
        burgerMenuIcon.classList.toggle('active');
    }

    // hidden: boolean = true;

    // toggleMenu() {
    //     // this.hidden = !this.hidden;
    //     this.burgerMenu2.nativeElement.classList.remove('d-none');
    // }

    forceNavigate(name: string) {
        this.router
            .navigate(['/'], { fragment: name })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
