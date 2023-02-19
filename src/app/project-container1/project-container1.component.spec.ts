import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContainer1Component } from './project-container1.component';

describe('ProjectContainer1Component', () => {
  let component: ProjectContainer1Component;
  let fixture: ComponentFixture<ProjectContainer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectContainer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectContainer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
