import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContainerLeftComponent } from './project-container-left.component';

describe('ProjectContainerLeftComponent', () => {
  let component: ProjectContainerLeftComponent;
  let fixture: ComponentFixture<ProjectContainerLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectContainerLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectContainerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
