import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuFooterComponent } from './mobile-menu-footer.component';

describe('MobileMenuFooterComponent', () => {
  let component: MobileMenuFooterComponent;
  let fixture: ComponentFixture<MobileMenuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
