import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    ngOnInit() {
        console.log(
            '%cWelcome to my Portfolio',
            'color: orange; font-size: 40px;'
        );
        console.log(
            '%cFeel free to check out my code on www.github.com/DennisKoester',
            'color: orange; font-size: 18px;'
        );
    }
}
