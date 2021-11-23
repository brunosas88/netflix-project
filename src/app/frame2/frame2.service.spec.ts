import { TestBed } from '@angular/core/testing';

import { Frame2Service } from './frame2.service';

describe('Frame2Service', () => {
  let service: Frame2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Frame2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
