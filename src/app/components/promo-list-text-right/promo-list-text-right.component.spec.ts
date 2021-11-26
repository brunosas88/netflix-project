import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoListTextRightComponent } from './promo-list-text-right.component';

describe('PromoListTextRightComponent', () => {
  let component: PromoListTextRightComponent;
  let fixture: ComponentFixture<PromoListTextRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoListTextRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoListTextRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
