import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContainerRightComponent } from './project-container-right.component';

describe('ProjectContainerRightComponent', () => {
  let component: ProjectContainerRightComponent;
  let fixture: ComponentFixture<ProjectContainerRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectContainerRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectContainerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
