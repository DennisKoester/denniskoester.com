import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowLeftContactComponent } from './arrow-left-contact.component';

describe('ArrowLeftContactComponent', () => {
  let component: ArrowLeftContactComponent;
  let fixture: ComponentFixture<ArrowLeftContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowLeftContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowLeftContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
