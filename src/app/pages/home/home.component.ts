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
            'color: #ff9900; font-size: 30px;'
        );
        console.log(
            '%cFeel free to check out my code on www.github.com/DennisKoester',
            'color: #ff9900; font-size: 18px;'
        );
    }
}
