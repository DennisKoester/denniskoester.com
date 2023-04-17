import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadSectionComponent } from './components/head-section/head-section.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { ArrowLeftContactComponent } from './components/arrow-left-contact/arrow-left-contact.component';
import { ArrowLeftSkillsComponent } from './components/arrow-left-skills/arrow-left-skills.component';
import { ArrowRightPortfolioComponent } from './components/arrow-right-portfolio/arrow-right-portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { BurgerMenuFooterComponent } from './components/burger-menu-footer/burger-menu-footer.component';
import { Router, Scroll } from '@angular/router';
import {
    ViewportScroller,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { filter } from 'rxjs';
import { ProjectComponent } from './components/project/project.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeadSectionComponent,
        AboutMeComponent,
        SkillSectionComponent,
        PortfolioSectionComponent,
        ArrowLeftContactComponent,
        ContactSectionComponent,
        ArrowLeftSkillsComponent,
        ArrowRightPortfolioComponent,
        FooterComponent,
        BurgerMenuComponent,
        HomeComponent,
        BurgerMenuFooterComponent,
        ProjectComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {
    scrollOffset: any;

    constructor(
        private router: Router,
        private viewportScroller: ViewportScroller
    ) {
        /**
         * Help function to scroll to the correct position of the fragment
         */
        if (innerWidth <= 480) {
            this.scrollOffset = [0, 80];
        } else {
            this.scrollOffset = [0, 120];
        }

        viewportScroller.setOffset(this.scrollOffset);
        router.events
            .pipe(filter((e) => e instanceof Scroll))
            .subscribe((e: Scroll) => {
                if (e.anchor) {
                    setTimeout(() => {
                        viewportScroller.scrollToAnchor(e.anchor);
                    });
                } else if (e.position) {
                    viewportScroller.scrollToPosition(e.position);
                } else {
                    viewportScroller.scrollToPosition([0, 0]);
                }
            });
    }
}
