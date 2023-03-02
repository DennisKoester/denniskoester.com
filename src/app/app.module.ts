import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadSectionComponent } from './components/head-section/head-section.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { ProjectContainerRightComponent } from './components/project-container-right/project-container-right.component';
import { ArrowLeftContactComponent } from './components/arrow-left-contact/arrow-left-contact.component';
import { ArrowLeftSkillsComponent } from './components/arrow-left-skills/arrow-left-skills.component';
import { ArrowRightPortfolioComponent } from './components/arrow-right-portfolio/arrow-right-portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { ProjectContainerLeftComponent } from './components/project-container-left/project-container-left.component';

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
        ImprintComponent,
        HomeComponent,
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
