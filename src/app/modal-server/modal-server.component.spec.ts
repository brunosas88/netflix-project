import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServerComponent } from './modal-server.component';

describe('ModalServerComponent', () => {
  let component: ModalServerComponent;
  let fixture: ComponentFixture<ModalServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
