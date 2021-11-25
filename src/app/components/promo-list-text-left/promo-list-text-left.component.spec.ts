import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoListTextLeftComponent } from './promo-list-text-left.component';

describe('PromoListTextLeftComponent', () => {
  let component: PromoListTextLeftComponent;
  let fixture: ComponentFixture<PromoListTextLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoListTextLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoListTextLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
