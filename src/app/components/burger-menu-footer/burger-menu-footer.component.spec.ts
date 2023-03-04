import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenuFooterComponent } from './burger-menu-footer.component';

describe('BurgerMenuFooterComponent', () => {
  let component: BurgerMenuFooterComponent;
  let fixture: ComponentFixture<BurgerMenuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerMenuFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
