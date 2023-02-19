import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowLeftSkillsComponent } from './arrow-left-skills.component';

describe('ArrowLeftSkillsComponent', () => {
  let component: ArrowLeftSkillsComponent;
  let fixture: ComponentFixture<ArrowLeftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowLeftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowLeftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
