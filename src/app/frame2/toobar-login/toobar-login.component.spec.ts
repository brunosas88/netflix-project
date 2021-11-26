import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobarLoginComponent } from './toobar-login.component';

describe('ToobarLoginComponent', () => {
  let component: ToobarLoginComponent;
  let fixture: ComponentFixture<ToobarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToobarLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToobarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
