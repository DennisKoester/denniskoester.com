import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeadSectionComponent } from 'src/app/components/head-section/head-section.component';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';
import { ArrowLeftContactComponent } from 'src/app/components/arrow-left-contact/arrow-left-contact.component';
import { ArrowLeftSkillsComponent } from 'src/app/components/arrow-left-skills/arrow-left-skills.component';
import { SkillSectionComponent } from 'src/app/components/skill-section/skill-section.component';
import { ArrowRightPortfolioComponent } from 'src/app/components/arrow-right-portfolio/arrow-right-portfolio.component';
import { PortfolioSectionComponent } from 'src/app/components/portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from 'src/app/components/contact-section/contact-section.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import { ProjectComponent } from 'src/app/components/project/project.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                HeadSectionComponent,
                AboutMeComponent,
                ArrowLeftSkillsComponent,
                SkillSectionComponent,
                ArrowRightPortfolioComponent,
                PortfolioSectionComponent,
                ArrowLeftContactComponent,
                ContactSectionComponent,
                NgxTypedJsComponent,
                ProjectComponent,
            ],
            providers: [HttpClient, HttpHandler],
            imports: [ReactiveFormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
