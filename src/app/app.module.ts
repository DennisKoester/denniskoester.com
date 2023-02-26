import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ProjectContainerRightComponent } from './project-container-right/project-container-right.component';
import { ArrowLeftContactComponent } from './arrow-left-contact/arrow-left-contact.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ArrowLeftSkillsComponent } from './arrow-left-skills/arrow-left-skills.component';
import { ArrowRightPortfolioComponent } from './arrow-right-portfolio/arrow-right-portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ProjectContainerLeftComponent } from './project-container-left/project-container-left.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeadSectionComponent,
        AboutMeComponent,
        SkillSectionComponent,
        PortfolioSectionComponent,
        ProjectContainerRightComponent,
        ArrowLeftContactComponent,
        ContactSectionComponent,
        ArrowLeftSkillsComponent,
        ArrowRightPortfolioComponent,
        FooterComponent,
        BurgerMenuComponent,
        ProjectContainerLeftComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
