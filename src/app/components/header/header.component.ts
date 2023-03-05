import {
    Component,
    OnInit,
    HostListener,
    ElementRef,
    ViewChild,
    Injectable,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('burgerMenu') burgerMenu: ElementRef<HTMLInputElement>;

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

        burgerMenu.classList.toggle('d-none');
        burgerMenuFooter.classList.toggle('d-none');
        document.documentElement.classList.toggle('preventScrolling');
        burgerMenuIcon.classList.toggle('active');
    }


    // toAboutMe() {
    //     document.getElementById('about-me').scrollIntoView({behavior: 'smooth'});
    // }
}
