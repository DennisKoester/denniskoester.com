import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ProjectContainer1Component } from './project-container1/project-container1.component';
import { ProjectContainerRightComponent } from './project-container-right/project-container-right.component';
import { ArrowLeftContactComponent } from './arrow-left-contact/arrow-left-contact.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ArrowLeftSkillsComponent } from './arrow-left-skills/arrow-left-skills.component';
import { ArrowRightPortfolioComponent } from './arrow-right-portfolio/arrow-right-portfolio.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeadSectionComponent,
        AboutMeComponent,
        SkillSectionComponent,
        PortfolioSectionComponent,
        ProjectContainer1Component,
        ProjectContainerRightComponent,
        ArrowLeftContactComponent,
        ContactSectionComponent,
        ArrowLeftSkillsComponent,
        ArrowRightPortfolioComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
