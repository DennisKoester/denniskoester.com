import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSectionComponent } from './portfolio-section.component';
import { ProjectComponent } from '../project/project.component';

describe('PortfolioSectionComponent', () => {
  let component: PortfolioSectionComponent;
  let fixture: ComponentFixture<PortfolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioSectionComponent, ProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
