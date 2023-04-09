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
    HashLocationStrategy,
    LocationStrategy,
} from '@angular/common';
import { filter } from 'rxjs';
import { ProjectComponent } from './components/project/project.component';

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
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {
    scrollOffset: any;

    constructor(router: Router, viewportScroller: ViewportScroller) {
        if (innerWidth <= 480) {
            this.scrollOffset = [0, 90];
        } else {
            this.scrollOffset = [0, 130];
        }

        viewportScroller.setOffset(this.scrollOffset);
        router.events
            .pipe(filter((e) => e instanceof Scroll))
            .subscribe((e: Scroll) => {
                //a good solve but it still does not scroll to anchor element after second click on the same anchor
                //one fix should be to set routing config option onSameUrlNavigation: 'reload',
                if (e.anchor) {
                    // anchor navigation
                    /* setTimeout is the core line to solve the solution */
                    setTimeout(() => {
                        viewportScroller.scrollToAnchor(e.anchor);
                    });
                } else if (e.position) {
                    // backward navigation
                    viewportScroller.scrollToPosition(e.position);
                } else {
                    // forward navigation
                    viewportScroller.scrollToPosition([0, 0]);
                }
            });
    }
}
