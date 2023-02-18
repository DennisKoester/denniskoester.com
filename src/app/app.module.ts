import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeadSectionComponent,
        AboutMeComponent,
        SkillSectionComponent,
        ArrowRightComponent,
        ArrowLeftComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
