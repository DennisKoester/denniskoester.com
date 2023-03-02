import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowRightPortfolioComponent } from './arrow-right-portfolio.component';

describe('ArrowRightPortfolioComponent', () => {
  let component: ArrowRightPortfolioComponent;
  let fixture: ComponentFixture<ArrowRightPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowRightPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowRightPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
