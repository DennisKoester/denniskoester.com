import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionComponent } from './contact-section.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactSectionComponent', () => {
    let component: ContactSectionComponent;
    let fixture: ComponentFixture<ContactSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContactSectionComponent],
            providers: [HttpClient, HttpHandler],
            imports: [ReactiveFormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
