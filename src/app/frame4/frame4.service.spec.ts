import { TestBed } from '@angular/core/testing';

import { Frame4Service } from './frame4.service';

describe('Frame4Service', () => {
  let service: Frame4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Frame4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
