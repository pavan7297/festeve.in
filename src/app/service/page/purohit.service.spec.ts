import { TestBed } from '@angular/core/testing';

import { PurohitService } from './purohit.service';

describe('PurohitService', () => {
  let service: PurohitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurohitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
