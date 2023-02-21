import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    ngOnInit() {
        var header = document.getElementById('header');

        onscroll = (event) => {
            if (header.offsetTop !== 0) {
                if (!header.classList.contains('shadow')) {
                    header.classList.add('shadow');
                    console.log('at top');
                    console.log(header.offsetTop);
                    
                }
            } else {
                header.classList.remove('shadow');
                console.log('not at top');
                    console.log(header.offsetTop);
            }
        };
    }
}
